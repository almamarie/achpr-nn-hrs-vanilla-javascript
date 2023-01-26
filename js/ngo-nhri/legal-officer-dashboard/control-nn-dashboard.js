import * as model from "./model.js";
import view from "./views/nnDashboardView.js";
console.log("nn dashboard working");

const controlActivityReport = function () {
  view.renderActivityReport(model.state.response.currentUser);
  view.addClosePopupHandler(controlClosePopup);
};

const controlUpdateProfile = function () {
  view.renderEditProfile(model.state.response.currentUser);
  view.addClosePopupHandler(controlClosePopup);
};

const controlSessionRegistration = function () {
  view.renderSessionRegistration(model.state.response.currentUser);
  view.addClosePopupHandler(controlClosePopup);
};

const updateDetails = async function () {
  await model.loadRandomNgoOrNhriUser();
  view.renderUserDetails(model.state.response.currentUser);
};

const controlClosePopup = function () {
  view.closePopup();
};

const init = async function () {
  view.addActivityReportHandler(controlActivityReport);
  view.addEditProfileHandler(controlUpdateProfile);
  view.addSessionRegistrationHandler(controlSessionRegistration);
  // view.addClosePopupHandler(controlClosePopup);

  updateDetails();
};

init();
