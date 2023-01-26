import View from "../../View.js";

class BasicDetailsView extends View {
  _countriesDropdownHandler = document.querySelector(".countries__dropdown");
  _documentsForm = document.querySelector(".nnr-form__next-btn");
  // _formHandler = document.querySelector(".nnr-form__submit-page");
  _formHandler = document.querySelector(".nnr-form");

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

  addFormSubmitEventListener(handler) {
    this._formHandler.addEventListener("submit", handler);
  }

  getFormHandler() {
    return document.querySelector(".nnr-form");
  }

  renderCountriesDropDown(countries) {
    // generate markup
    const markup =
      `<option value="" selected disabled hidden>Select Country</option>` +
      this._generateCountriesDropdownMarkup(countries);

    // update countries drop down
    this._countriesDropdownHandler.innerHTML = markup;
  }
}

export default new BasicDetailsView();
