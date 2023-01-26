import * as model from "./model.js";
// import view from "./views/view.js";
import allNgoNhriView from "./views/all-ngo-nhri.js";

const pendingApplicationsWindow =
  "/html_files/ngo-nhri-portal/legal-officer-dashboard/pending-applications.html";

const controlTableNav = async function (event) {
  event.preventDefault();
  const nav = event.target.dataset.name;
  console.log(nav);

  switch (nav) {
    case "ngos-nhris":
      updateAllNgosNhris();
      break;
    case "ngos":
      updateAllNgos();
      break;
    case "nhris":
      updateAllNhris();
      break;

    case "pending-applications":
      window.location.href = pendingApplicationsWindow;
      // updatePendingApplications();
      break;

    case "downloads":
      renderDownloadsView();
      break;

    case "activity-reports":
      console.log("activity-reports");
      break;
  }
};

const renderDownloadsView = function () {
  allNgoNhriView.renderDownloads();
  // view.addEventListners(controlTableNav);
};

const updateAllNgosNhris = async function () {
  // load both NGOs and NHRIS
  await model.loadNgos();
  await model.loadNhris();

  allNgoNhriView.renderAllNgosNhris(
    model.state.response.ngos,
    model.state.response.nhris
  );
  allNgoNhriView.addRowsEventHandlers(controlRowsClick);
};

const updateAllNgos = async function () {
  await model.loadNgos();
  allNgoNhriView.render(model.state.response.ngos, "NGO");
  allNgoNhriView.addRowsEventHandlers(controlRowsClick);
};

const updateAllNhris = async function () {
  await model.loadNhris();
  allNgoNhriView.render(model.state.response.nhris, "NHRI");
  allNgoNhriView.addRowsEventHandlers(controlRowsClick);
};

// const updatePendingApplications = async function () {
//   await model.loadPendingApplications();
//   allNgoNhriView.renderPendingApplications(
//     model.state.response.pendingApplications,
//     "pending"
//   );
// };

const controlRowsClick = async function (e) {
  const attribute = e.target.dataset;
  if (!attribute.identifier) {
    return;
  }

  const split = attribute.identifier.split(",");
  const data = {
    observer_number: split[0],
    email: split[1],
    ngo_or_nhri: split[2],
  };
  await model.loadCurrentNgoOrNhriUser(data);

  allNgoNhriView.renderMoreInfoPopup(model.state.response.currentUser);
  allNgoNhriView.addClosePopupHandler(controlClosePopup);
};

const controlClosePopup = function () {
  allNgoNhriView.closePopup();
};

// This function controls the download action in the pending applications view
const controlDownloadAction = function (event) {
  console.log("Download");
};

const init = function () {
  allNgoNhriView.addNavEventListners(controlTableNav);
};

(async function () {
  updateAllNgosNhris();
})();
init();
