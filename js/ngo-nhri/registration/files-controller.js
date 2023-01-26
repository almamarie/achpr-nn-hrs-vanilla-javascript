import view from "./FilesView.js";
import * as model from "./model.js";

const controlForm = async function (e) {
  e.preventDefault();

  // retrieve the datya from the form as form data
  let formD = new FormData(view.getFormHandler());

  // add basic details to the form data
  formD.append("basic_details", model.state.basicDetails);

  // send data to backend
  console.log("Creating new application");
  await model.submitApplication(formD);

  console.log(model.state.response);
  if (model.state.response["success"]) {
    sessionStorage.clear();
    sessionStorage.setItem(
      "application_id",
      model.state.response.application_id
    );
    window.location.href =
      "/html_files/ngo-nhri-portal/registration/success.html";
  }
};

// ===================== file saver=================

const download = async (url) => {
  const resp = await fetch(url);
  return await resp.blob();
};

const downloadMany = (urls) => {
  return Promise.all(urls.map((url) => download(url)));
};

const exportZip = (blobs) => {
  const zip = JSZip();
  blobs.forEach((blob, i) => {
    zip.file(`file-${i}.csv`, blob);
  });
  zip.generateAsync({ type: "blob" }).then((zipFile) => {
    const currentDate = new Date().getTime();
    const fileName = `combined-${currentDate}.zip`;
    return FileSaver.saveAs(zipFile, fileName);
  });
};

const controlSubmitBtn = function () {
  console.log("submit");
};

// =================================================

const init = async function () {
  // retrieve the basic details from the session storage
  const basicDetails = sessionStorage.getItem("form-data");

  //   add the basic details to the state property
  model.state.basicDetails = basicDetails;

  // add event listner to form data
  view.addFormSubmitEventListener(controlForm);

  // Add submit btn event handler
  view.addSubmitBtnLoaderHandler(controlSubmitBtn);
};

init();
