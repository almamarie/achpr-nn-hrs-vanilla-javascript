class PendingApplications {
  _table_rows_box = document.querySelector(".table--rows--box");

  // Pending Applications
  _action_download = document.querySelectorAll(".pa__actions-btn--download");
  _action_accept = document.querySelectorAll(".pa__actions-btn--green");
  _action_reject = document.querySelectorAll(".pa__actions-btn--red");
  _popup = document.querySelector("#popup");

  _actionsList = [
    ...this._action_download,
    ...this._action_accept,
    ...this._action_reject,
  ];

  addClosePopupHandler(handler) {
    document.querySelector(".close-modal").addEventListener("click", handler);
  }

  addRowsEventHandlers(handler) {
    const rows = document.querySelectorAll(".pa__table__rows--row");
    rows.forEach((ele) => ele.addEventListener("click", handler));
  }

  _addRowsBoxEventListener(handler) {
    this._table_rows_box.addEventListener("change", handler);
  }
  addDownloadEventListener(downloadHandler, acceptHandler, rejectHandler) {
    document.querySelectorAll(".download").forEach((element) => {
      element.addEventListener("click", downloadHandler);
    });

    document.querySelectorAll(".accept").forEach((element) => {
      element.addEventListener("click", acceptHandler);
    });

    document.querySelectorAll(".reject").forEach((element) => {
      element.addEventListener("click", rejectHandler);
    });
  }

  _generatePendingApplicationsMarkup(row) {
    // Create a unique ID
    const tmpClassName = `${row.id + row.ngo_or_nhri}`;
    const attributes = `${row.id},${row.ngo_or_nhri}, ${tmpClassName}`;
    const popupAttributes = `${row.id}`;

    return `
    <ul class="pa__table__rows" id="${tmpClassName}">
             
              <li class="pa__table__rows--row pa pa__id" data-identifier="${popupAttributes}">${row.id}</li>
              <li class="pa__table__rows--row pa pa__name" data-identifier="${popupAttributes}">${row.name}</li>
              <li
                class="pa__table__rows--row pa pa__ngo-nhri pa__margin-update--ngo-nhri" data-identifier="${popupAttributes}"
              >
              ${row.ngo_or_nhri}
              </li>
              <li
                class="pa__table__rows--row pa pa__country pa__margin-update--country" data-identifier="${popupAttributes}"
              >
              ${row.country}
              </li>
              <li
                class="pa__table__rows--row pa pa__email pa__margin-update--email"
              >
                <a href="mailto:${row.email}"
                  >${row.email}</a
                >
              </li>
              <li class="pa__table__rows--row pa pa__website">
                <a href="${row.website}" target=”_blank” >${row.website}</a>
              </li>

              <li class="pa__table__rows--row pa pa__actions">
                <div class="btn pa pa__actions-btn--download download" data-data="${attributes}">Download</div>
                <div class="btn pa pa__actions-btn--green accept" data-data="${attributes}">Accept</div>
                <div class="btn pa pa__actions-btn--red reject" data-data="${attributes}">Reject</div>
              </li>
            </ul>
    `;
  }

  _generatePopupMarkup(user) {
    return `
    <button class="close-modal">&times;</button>
            <ul class="popup__details">
            <li class="popup__details--entry">
              <span class="popup__details--title">Name:</span>
              <span class="popup__details--value">${user.name}</span>
            </li>

              <li class="popup__details--entry">
                <span class="popup__details--title">Country:</span>
                <span class="popup__details--value">${user.country}</span>
              </li>

              <li class="popup__details--entry">
                <span class="popup__details--title">City:</span>
                <span class="popup__details--value">${user.city}</span>
              </li>

              <li class="popup__details--entry">
                <span class="popup__details--title">Phone number:</span>
                <span class="popup__details--value">+${user.phone_number}</span>
              </li>

              <li class="popup__details--entry">
                <span class="popup__details--title">Email:</span>
                <span class="popup__details--value"><a href="${user.email}" target="_blank">${user.email}</a></span>
              </li>

              <li class="popup__details--entry popup__details--top-down">
                <span class="popup__details--title">Objectives:</span>
                <span class="popup__details--value"
                  >${user.objectives}.</span
                >
              </li>

              <li class="popup__details--entry">
                <span class="popup__details--title">Website:</span>
                <span class="popup__details--value" target=”_blank” ><a href="${user.website}" target="_blank">${user.website}</a></a></span>
              </li>
              <li class="popup__details--entry popup__details--top-down">
                <button class="review-btn">Add or Review Remarks</button>
              </li>
            </ul>
    `;
  }
  // _clear() {
  //   this._table_rows_box.innerHTML = "";
  // }

  _updateTableRows(rows) {
    // // clear the document area
    // this._clear();

    // udate with data
    this._table_rows_box.innerHTML = rows;
  }

  renderPendingApplications(rows) {
    // update table row
    // generate the markup for the rows
    const final = rows
      .map((row) => this._generatePendingApplicationsMarkup(row))
      .join("");

    // update the window with the new rows
    this._updateTableRows(final);
  }

  removeOldElement(element) {
    const ele = element.trim();
    console.log(ele);
    document.getElementById(ele).remove();
  }

  // Popup functions
  closePopup() {
    this._popup.classList.add("hide-from-view");
  }

  _openPopup() {
    this._popup.classList.remove("hide-from-view");
  }

  renderMoreInfoPopup(currentUser) {
    // open the popup
    this._openPopup();

    // clear the popup
    // this._clear(this._popup);

    // render the update details on the popup
    const markup = this._generatePopupMarkup(currentUser);

    // Update the view
    this._popup.innerHTML = markup;
  }
}

export default new PendingApplications();
