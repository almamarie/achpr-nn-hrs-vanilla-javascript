import detailsView from "./BasicDetailsView.js";
import * as constants from "../../constants.js";

const submitBtn = document.querySelector(".form-submit-btn");
const url = "http://127.0.0.1:5000/observer-reg";

console.log("working");
const storeFormData = function (e) {
  e.returnValue = false;
  const formData = Object.fromEntries(
    new FormData(detailsView.getFormHandler()).entries()
  );
  try {
    // add the timestamp to the data
    formData["time"] = new Date().toISOString().slice(0, 19).replace("T", " ");
    // put the data into the local storage for the next page
    const stringdata = JSON.stringify(formData);
    sessionStorage.setItem("form-data", stringdata);

    console.log(JSON.parse(sessionStorage.getItem("form-data")));

    // // move to the next page
    window.location.href =
      "/html_files/ngo-nhri-portal/registration/ngo-nhri-documents-submit.html";
  } catch (error) {
    console.log(error);
  }
};

const init = function () {
  // generate countries dropdown
  detailsView.renderCountriesDropDown(constants.africanCountries);

  // formHandler.addEventListener("submit", storeFormData);
  detailsView.addFormSubmitEventListener(storeFormData);
};

init();
