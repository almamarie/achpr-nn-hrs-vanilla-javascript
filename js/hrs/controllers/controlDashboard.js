import * as model from "../models/model.js";
import DashboardView from "../views/dashboardView.js";

const controlComplaints = async function () {
  await model.loadComplaints();
  DashboardView.render(model.state.complaints);
  DashboardView.addRowsEventHandlers(controlRowsClick);
};

const controlRowsClick = async function (e) {
  const attribute = e.target.dataset;
  if (!attribute) {
    return;
  }
  //   console.log(attribute);

  const data = {
    id: attribute.id,
  };
  console.log(data);

  let complaint = {};
  complaint = model.state.complaints.forEach((ele) => {
    console.log(ele);
    console.log(ele.id === parseInt(data.id));
    if (ele.id === parseInt(data.id)) {
      console.log("found: ", ele);

      DashboardView.renderMoreInfoPopup(ele);
      DashboardView.addClosePopupHandler(controlClosePopup);
    }
  });
  console.log(complaint);
};

const controlClosePopup = function () {
  DashboardView.closePopup();
};

const init = async function () {
  await model.loadComplaints();
  console.log(model.state.complaints);
  controlComplaints();
};

init();
