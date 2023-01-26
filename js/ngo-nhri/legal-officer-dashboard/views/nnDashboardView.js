class View {
  _activityReportBtn = document.querySelector(".upload-activity-report");
  _editProfile = document.querySelector(".edit-profile");
  _sessionRegistration = document.querySelector(".session-registration");
  _popup = document.querySelector(".popup");
  _closePopup = document.querySelector(".close-modal");
  _detailsParentDiv = document.querySelector(".popup__details");

  addActivityReportHandler(handler) {
    this._activityReportBtn.addEventListener("click", handler);
  }

  addEditProfileHandler(handler) {
    this._editProfile.addEventListener("click", handler);
  }

  addSessionRegistrationHandler(handler) {
    this._sessionRegistration.addEventListener("click", handler);
  }

  addClosePopupHandler(handler) {
    document.querySelector(".close-modal").addEventListener("click", handler);
  }

  _clear(element) {
    element.innerHTML = "";
  }

  _generateDetailsMarkup(data) {
    const date = new Date(data.year_of_formation);
    const dateCopy = new Date(data.year_of_formation);
    const nextActivityReportDate = new Date(
      dateCopy.setFullYear(date.getFullYear() + 2)
    ).toUTCString();

    return `
    <li class="popup__details--entry">
    <span class="popup__details--title">Region:</span>
    <span class="popup__details--value">West Africa</span>
  </li>

  <li class="popup__details--entry">
    <span class="popup__details--title">Country:</span>
    <span class="popup__details--value">${data.country}</span>
  </li>

  <li class="popup__details--entry">
    <span class="popup__details--title">City:</span>
    <span class="popup__details--value">${data.city}</span>
  </li>

  <li class="popup__details--entry">
    <span class="popup__details--title">Phone number:</span>
    <span class="popup__details--value">+${data.phone_number}</span>
  </li>

  <li class="popup__details--entry">
    <span class="popup__details--title">Email:</span>
    <span class="popup__details--value">${data.email}</span>
  </li>

  <li class="popup__details--entry popup__details--top-down">
    <span class="popup__details--title">Objectives:</span>
    <span class="popup__details--value"
      >${data.objectives}</span
    >
  </li>

  <li class="popup__details--entry">
    <span class="popup__details--title">Website:</span>
    <span class="popup__details--value">${data.website}</span>
  </li>

  <li class="popup__details--entry popup__details--top-down">
    <span class="popup__details--title"
      >Past activity report submission date:</span
    >
    <span class="popup__details--value">${data.year_of_formation}</span>
  </li>

  <li class="popup__details--entry popup__details--top-down">
    <span class="popup__details--title"
      >Next activity report submission date:</span
    >
    <span class="popup__details--value">${nextActivityReportDate}</span>
  </li>

    `;
  }

  _generateSessionRegistrationMarkup(data) {
    return `
    <div class="sr">
            <button class="close-modal">&times;</button>
            <h3 class="sr__upload--heading heading__tertiary">
              Session Registration
            </h3>
            <form action="" class="sr__upload--form">
              <div class="sr__upload--form-details">
                <label for="activity-report-file">Upload file below</label>
                <input type="file" id="activity-report-file" />
              </div>
              <input
                type="submit"
                value="SUBMIT"
                class="btn sr__upload--submit"
              />
            </form>
          </div>`;
  }

  _generateUpdateMarkup(data) {
    return `
    <div class="nn-dashboard--update">
    <button class="close-modal">&times;</button>
    <!-- This form is for updating details -->
    <form class="ngo__signin nn-dashboard--update--form">
      <h2 class="heading__secondary">Edit profile</h2>
      <ul class="nn-dashboard--update--ul">
        <li>
          <label for="email" class="nn-dashboard--update--label"
            >Email:</label
          >
          <input
            type="email"
            id="email"
            name="email"
            class="nn-dashboard--update--input"
            value="${data.email}"
          />
        </li>

        <li>
          <label for="address" class="nn-dashboard--update--label"
            >Address:</label
          >
          <input
            type="text"
            id="address"
            name="address"
            class="nn-dashboard--update--input"
            value="${data.address}"
          
          />
        </li>

        <li>
          <label for="website" class="nn-dashboard--update--label"
            >Website:</label
          >
          <input
            type="text"
            id="website"
            name="website"
            class="nn-dashboard--update--input"
            value="${data.website}"
          />
        </li>

        <li>
          <label for="phone-number" class="nn-dashboard--update--label"
            >Phone Number:</label
          >
          <input
            type="tel"
            id="phone-number"
            name="phone-number"
            class="nn-dashboard--update--input"
            value="${data.phone_number}"
          />
        </li>
      </ul>
      <input
        type="submit"
        class="nn-dashboard--update--submit btn"
        value="Save"
      />
    </form>
  </div>

    `;
  }

  _generateActivityReportMarkup(data) {
    return `
    <div class="update-ar">
    <button class="close-modal">&times;</button>
    <h3 class="update-ar__upload--heading heading__tertiary">
      Upload Activity report
    </h3>
    <form action="" class="update-ar__upload--form">
      <div class="update-ar__upload--form-details">
        <label for="activity-report-file">Upload file below</label>
        <input type="file" id="activity-report-file" />
      </div>
      <input
        type="submit"
        value="SUBMIT"
        class="btn update-ar__upload--submit"
      />
    </form>
  </div>`;
  }

  closePopup() {
    this._popup.classList.add("hide-from-view");
  }

  _openPopup() {
    this._popup.classList.remove("hide-from-view");
  }

  renderUserDetails(data) {
    // clear the parent element
    this._clear(this._detailsParentDiv);

    // generate the markup
    const markup = this._generateDetailsMarkup(data);

    // update the view
    this._detailsParentDiv.innerHTML = markup;
  }
  renderEditProfile(data) {
    // open the popup
    this._openPopup();

    // clear the popup
    // this._clear(this._popup);

    // render the update details on the popup
    const markup = this._generateUpdateMarkup(data);

    // Update the view
    this._popup.innerHTML = markup;
  }

  renderActivityReport(data) {
    // open the popup
    this._openPopup();

    // clear the popup
    // this._clear(this._popup);

    // render the update details on the popup
    const markup = this._generateActivityReportMarkup(data);

    // Update the view

    this._popup.innerHTML = markup;
  }

  renderSessionRegistration(data) {
    // open the popup
    this._openPopup();

    // clear the popup
    // this._clear(this._popup);

    // render the update details on the popup
    const markup = this._generateSessionRegistrationMarkup(data);

    // Update the view

    this._popup.innerHTML = markup;
  }
}

export default new View();
