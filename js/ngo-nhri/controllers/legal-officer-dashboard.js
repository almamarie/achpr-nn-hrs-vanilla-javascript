console.log("I am working");

// Model

// View
class AchprDashboardView {
  _table_nav_ele = document.querySelectorAll(".table__nav--button");
  // timeout function

  _navigate(event) {
    event.preventDefault();
    console.log(event.target.dataset);
  }

  addEventListners = function () {
    this._table_nav_ele.forEach((btn) => {
      btn.addEventListener("click", this._navigate);
    });
  };
}

// const navigate = function (event) {
//   event.preventDefault();
//   console.log(event.target.dataset);
// };

// const all_table_navs_btn = document.querySelectorAll(".table__nav--button");

// all_table_navs_btn.forEach((btn) => {
//   btn.addEventListener("click", navigate);
// });

// AchprDashboard.addEventListners();

// const achpr = new AchprDashboardView();

// achpr.addEventListners();
