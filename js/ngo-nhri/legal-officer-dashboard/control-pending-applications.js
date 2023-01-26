// pa stands for pending applications
import paView from "./views/pending-applications-view.js";
import * as model from "./model.js";
import { CLOUDINARY_NAME } from "../../config.js";

console.log(paView);

const addEventListeners = function () {
  paView.addEventListners(controlActions);
};
const controlDownload = async function (e) {
  // extract id from the event
  const data = e.target.dataset.data;
  const id = parseInt(data.split(",")[0]);
  console.log(id);

  // fetch the files of the pending application
  await model.fetchApplicationFiles(id);

  const files = model.state.response.files;

  for (const [name, id] of Object.entries(files)) {
    console.log(
      `${name} => "https://res.cloudinary.com/${CLOUDINARY_NAME}/image/upload/${id}.pdf`
    );
  }

  //  Download should happen here
};

const controlAccept = async function (e) {
  const details = e.target.dataset.data.split(",");
  console.log("Details: ", details);
  const acceptedDate = new Date().toISOString().slice(0, 19).replace("T", " ");
  const uploadData = {
    id: parseInt(details[0]),
    category: details[1].toUpperCase(),
    date_application_accepted: acceptedDate,
  };
  console.log(uploadData);
  await model.acceptApplication(uploadData);
  if (model.state.response.acceptedUserDetails.success) {
    paView.removeOldElement(details[2]);
  }
};

const controlReject = async function (e) {
  console.log(e.target);
  const details = e.target.dataset.data.split(",");
  const id = details[0];
  await model.rejectApplication({ id: id });
  if (model.state.response.rejectedUserDetails.success) {
    paView.removeOldElement(details[2]);
  }
};

const controlRowsClick = async function (e) {
  const attribute = e.target.dataset;
  if (!attribute.identifier) {
    return;
  }

  const id = parseInt(attribute.identifier);
  const data = {
    id: id,
  };
  console.log(data);
  await model.loadCurrentNgoOrNhriUser(data);

  paView.renderMoreInfoPopup(model.state.response.currentUser);
  paView.addClosePopupHandler(controlClosePopup);
};

const controlClosePopup = function () {
  paView.closePopup();
};

const init = async function () {
  await model.loadPendingApplications();
  paView.renderPendingApplications(model.state.response.pendingApplications);
  paView.addDownloadEventListener(
    controlDownload,
    controlAccept,
    controlReject
  );
  paView.addRowsEventHandlers(controlRowsClick);
};

init();
