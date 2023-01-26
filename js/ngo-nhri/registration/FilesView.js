class FilesView {
  _documentsForm = document.querySelector(".nnr-form__next-btn");
  _formHandler = document.querySelector(".nnr-form__submit-page");
  _subtn = document.querySelector(".form-submit-btn");

  // applicationLetterHandler = document.getElementById("application-letter");
  // listOfMembersHandler = document.getElementById("list-of-members");
  // consultativeStatuteHandler = document.getElementById("consultative-statute");
  // certificateOfLegalStatusHandler = document.getElementById(
  //   "certificate-of-legal-status"
  // );
  // sourcesOfFundingHandler = document.getElementById("sources-of-funding");
  // financialStatementHandler = document.getElementById("financial-statement");
  // annualActivityReportHandler = document.getElementById(
  //   "annual-activity-report"
  // );
  // strategicPlanHandler = document.getElementById("strategic-plan");

  getFormHandler() {
    return document.getElementById("nnr-form-files");
  }

  addSubmitBtnLoaderHandler(handler) {
    this._subtn.addEventListener("click", handler);
  }

  addFormSubmitEventListener(handler) {
    this._formHandler.addEventListener("submit", handler);
  }

  renderSubmitBtnLoader() {
    this._subtn;
  }
  renderError() {}
}

export default new FilesView();
