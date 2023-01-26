class DashboardView {
  _data;
  _table_rows_box = document.querySelector(".table--rows--box");
  _rows_wrapper = document.querySelector(".rows-wrapper");

  _table_head_content_handler = document.querySelector(".table-head-wrapper");

  _action_download = document.querySelector(".pa__actions-btn--download");

  _popup = document.querySelector("#popup");

  addClosePopupHandler(handler) {
    document.querySelector(".close-modal").addEventListener("click", handler);
  }
  addRowsEventHandlers(handler) {
    const rows = document.querySelectorAll(".table__rows--row");
    rows.forEach((ele) => ele.addEventListener("click", handler));
  }

  _generateRowsMarkup(row) {
    const attribute = row.id;

    return `
    <ul class="table__rows btn">
    <li class="table__rows--row complaint--id" data-id="${attribute}">${row.id}</li>
    <li class="table__rows--row complaint--country" data-id="${attribute}">${row.country}</li>
    <li class="table__rows--row complaint--city" data-id="${attribute}">${row.city}</li>
    <li class="table__rows--row complaint--details" data-id="${attribute}">${row.complaint}</li>
  </ul>
    `;
  }

  _generatePopupMarkup(user) {
    return `
      <button class="close-modal">&times;</button>
              <ul class="popup__details">
              <li class="popup__details--entry">
                <span class="popup__details--title">Name:</span>
                <span class="popup__details--value">${user.id}</span>
              </li>
              <li class="popup__details--entry">
                <span class="popup__details--title">Name:</span>
                <span class="popup__details--value">${user.date_of_report}</span>
              </li>
  
                <li class="popup__details--entry">
                  <span class="popup__details--title">Country:</span>
                  <span class="popup__details--value">${user.country}</span>
                </li>

                <li class="popup__details--entry">
                  <span class="popup__details--title">Country:</span>
                  <span class="popup__details--value">${user.city}</span>
                </li>
  
                <li class="popup__details--entry popup__details--top-down">
                  <span class="popup__details--title">Objectives:</span>
                  <span class="popup__details--value"
                    >${user.complaint}.</span
                  >
                </li>
              </ul>
      `;
  }

  _clear() {
    this._table_rows_box.innerHTML = "";
  }

  // Popup functions
  closePopup() {
    this._popup.classList.add("hide-from-view");
  }

  _openPopup() {
    this._popup.classList.remove("hide-from-view");
  }

  _updateTableRows(rows) {
    // clear the document area
    this._clear();

    // udate with data
    this._table_rows_box.innerHTML = rows;
  }

  render(rows) {
    // generate the markup for the rows
    const final = rows.map((row) => this._generateRowsMarkup(row)).join("");

    // update the window with the new rows
    this._updateTableRows(final);
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

export default new DashboardView();
