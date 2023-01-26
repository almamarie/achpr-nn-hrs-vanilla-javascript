class AllNgoNhriView {
  _data;
  _table_nav_ele = document.querySelectorAll(".table__nav--button");
  _table_rows_box = document.querySelector(".table--rows--box");
  _rows_wrapper = document.querySelector(".rows-wrapper");

  _ngo_nhri = document.querySelector(".ngos-nhris").classList;
  _ngo = document.querySelector(".ngos").classList;
  _nhri = document.querySelector(".nhris").classList;
  _pending_applications = document.querySelector(".pending-applications")
    .classList;
  _downloads = document.querySelector(".downloads").classList;
  _activity_reports = document.querySelector(".activity-reports").classList;

  _table_head_content_handler = document.querySelector(".table-head-wrapper");

  _action_download = document.querySelector(".pa__actions-btn--download");
  _currentTab = this._ngo_nhri;

  _popup = document.querySelector("#popup");
  _table_nav_ele = document.querySelectorAll(".table__nav--button");
  _action_download = document.querySelector(".pa__actions-btn--download");
  _action_accept = document.querySelector(".pa__actions-btn--");
  _action_reject = document.querySelector(".pa__actions-btn--red");
  // timeout function

  addNavEventListners = function (handler) {
    this._table_nav_ele.forEach((btn) => {
      btn.addEventListener("click", handler);
    });
  };
  addClosePopupHandler(handler) {
    document.querySelector(".close-modal").addEventListener("click", handler);
  }
  addRowsEventHandlers(handler) {
    const rows = document.querySelectorAll(".table__rows--row");
    rows.forEach((ele) => ele.addEventListener("click", handler));
  }
  _generateDownloadsMarkup() {
    return `<div class="download-options">
    <a href="#" class="download-options--option download-options--link"
      >All NGOs and NHRIs</a
    >
    <a href="#" class="download-options--option download-options--link"
      >All NGOs</a
    >
    <a href="#" class="download-options--option download-options--link"
      >All NHRIs</a
    >
    <select
      name="countries"
      class="download-options--option download-options--countries"
    >
      <option value="" selected disabled hidden>
        Select by Country
      </option>
      <option value="Gambia">Gambia</option>
      <option value="Nigeria">Nigeria</option>
      <option value="Gabon">Gabon</option>
      <option value="Cameroon">Cameroon</option>
      <option value="South Africa">South Africa</option>
    </select>

    <select
      name="regions"
      class="download-options--option download-options--regions"
    >
      <option value="" selected disabled hidden>
        Select by Region
      </option>
      <option value="Gambia">Central Africa</option>
      <option value="Nigeria">East Africa</option>
      <option value="Gabon">West Africa</option>
      <option value="Southern Africa">South Africa</option>
    </select>
  </div>`;
  }
  _generateRowsMarkup(row, ngo_or_nhri = false) {
    const ngo_nhri = ngo_or_nhri ? ngo_or_nhri : row.ngo_or_nhri;
    const attribute = `${row.observer_number},${row.email},${ngo_nhri}`;
    // console.log(attribute);
    return `<ul class="table__rows btn">
      <li class="table__rows--row" data-identifier="${attribute}">${row.observer_number}</li>
      <li class="table__rows--row name" data-identifier="${attribute}">${row.name}</li>
      <li class="table__rows--row ngo-or-nhri" data-identifier="${attribute}">${ngo_nhri}</li>
      <li class="table__rows--row" data-identifier="${attribute}">${row.country}</li>
      <li class="table__rows--row">
        <a href="${row.email}"
          >${row.email}</a
        >
      </li>
      <li class="table__rows--row">
        <a href="${row.website}" target=”_blank”>${row.website}</a>
      </li>
    </ul>`;
  }

  _updateTableTop(category) {
    const normalHeadContent = `<ul class="table__head">
    <li class="table__head--name">Observer Number</li>
    <li class="table__head--name name">Name</li>
    <li class="table__head--name ngo-or-nhri">NGO/NHRI</li>
    <li class="table__head--name country">Country</li>
    <li class="table__head--name email">Email</li>
    <li class="table__head--name website">Website</li>
  </ul>`;

    const pendingApplicationsHeadContent = ` <ul class="pa__table--head">
    <li class="pa pa__id">ID</li>
    <li class="pa pa__name">Name</li>
    <li class="pa pa__ngo-nhri">NGO/NHRI</li>
    <li class="pa pa__country">Country</li>
    <li class="pa pa__email">Email</li>
    <li class="pa pa__website">Website</li>

    <li class="pa pa__actions pa__actions--text">Actions</li>
  </ul>`;

    if (category === "normal") {
      // clear the content of the header
      this._table_head_content_handler.innerHTML = "";

      // update the content of the header with the normal content
      this._table_head_content_handler.innerHTML = normalHeadContent;
    } else if (category === "pending applications") {
      // clear the content of the header
      this._table_head_content_handler.innerHTML = "";

      // update the content of the header with the normal content
      this._table_head_content_handler.innerHTML =
        pendingApplicationsHeadContent;
    }
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
                <span class="popup__details--value">${user.email}</span>
              </li>

              <li class="popup__details--entry popup__details--top-down">
                <span class="popup__details--title">Objectives:</span>
                <span class="popup__details--value"
                  >${user.objectives}.</span
                >
              </li>

              <li class="popup__details--entry">
                <span class="popup__details--title">Website:</span>
                <span class="popup__details--value">${user.website}</span>
              </li>

              <li class="popup__details--entry popup__details--top-down">
                <span class="popup__details--title"
                  >Next activity report submission date:</span
                >
                <span class="popup__details--value">02/06/2022</span>
              </li>

              <li class="popup__details--entry popup__details--top-down">
                <span class="popup__details--title"
                  >Next activity report submission date:</span
                >
                <span class="popup__details--value">08/05/2024</span>
              </li>
            </ul>
    `;
  }

  _updateCurrentNavWindow(nextTab) {
    // remove the active class list from the current tab

    this._currentTab.remove("table__nav--button__active");
    console.log("Nav Update: ", nextTab);

    switch (nextTab.toLowerCase()) {
      case "ngos-nhris":
        this._ngo_nhri.add("table__nav--button__active");
        this._currentTab = this._ngo_nhri;
        break;

      case "ngo":
        this._ngo.add("table__nav--button__active");
        this._currentTab = this._ngo;
        break;

      case "nhri":
        this._nhri.add("table__nav--button__active");
        this._currentTab = this._nhri;
        break;

      case "pending":
        this._pending_applications.add("table__nav--button__active");
        this._currentTab = this._pending_applications;
        break;

      case "downloads":
        this._downloads.add("table__nav--button__active");
        this._currentTab = this._downloads;
        break;

      case "activity-reports":
        this._activity_reports.add("table__nav--button__active");
        this._currentTab = this._activity_reports;
        break;
    }
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

  //   These functions are used to create the markup for the All Ngo/ngri tab

  _shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  _formatForAllNgoNhri(ngo, nhri) {
    ngo.forEach((element) => {
      element["ngo_or_nhri"] = "NGO";
    });

    nhri.forEach((element) => {
      element["ngo_or_nhri"] = "NHRI";
    });

    return [...ngo, ...nhri];
  }

  renderAllNgosNhris(ngo, nhri) {
    // update table top
    this._updateTableTop("normal");

    // format the data to add the ngo_or_nhri column to it
    const formated = this._formatForAllNgoNhri(ngo, nhri);

    // shuffle/randomize the data
    const shuffled = this._shuffle(formated);
    console.log("shuffled: ", shuffled);

    // create the markup
    const markup = shuffled
      .map((row) => this._generateRowsMarkup(row))
      .join("");
    // update current tab
    this._updateCurrentNavWindow("ngos-nhris");

    // render the data
    this._updateTableRows(markup);
  }

  render(rows, ngo_or_nhri) {
    // update table top
    this._updateTableTop("normal");

    // generate the markup for the rows
    const final = rows
      .map((row) => this._generateRowsMarkup(row, ngo_or_nhri))
      .join("");

    this._updateCurrentNavWindow(ngo_or_nhri);
    // update the window with the new rows
    this._updateTableRows(final);
  }

  renderDownloads() {
    // update table top
    this._updateTableTop("normal");

    // generate markup
    const markup = this._generateDownloadsMarkup();

    // update Nav
    this._updateCurrentNavWindow("downloads");

    // update view
    this._updateTableRows(markup);
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

export default new AllNgoNhriView();
