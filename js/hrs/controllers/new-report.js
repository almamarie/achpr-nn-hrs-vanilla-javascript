"use strict";

const countryEl = document.querySelector(".hrs-country");
const townEl = document.querySelector(".hrs-region");
const complainEl = document.querySelector(".hrs-complain");
const submitBtn = document.querySelector(".hrs-submit-btn");
const fromHandler = document.querySelector(".hrs-form");

const url = "http://127.0.0.1:5000/report";

let state = {
  complain_id: "",
};

console.log("new report");
const getFormValues = async function (e) {
  console.log("Starting");
  e.preventDefault();

  // get the values from the form
  const country = countryEl.value;
  const town = townEl.value;
  const complain = complainEl.value;

  // create a new object from the form data
  const newComplain = {
    time: new Date().toISOString().slice(0, 19).replace("T", " "),
    country: country,
    region: town,
    complain: complain,
  };

  console.log(newComplain);

  console.log("Adding new complain");
  // post the data
  await AJAX(url, newComplain);

  // save the id in local storage
  localStorage.setItem("current_complain_id", state.complain_id);

  // redirect to next page
  window.location.href = "/html_files/report_hrs/hrsFormSubmited.html";
};

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);

    const res = await Promise.race([fetchPro, timeout(10)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    console.log(data);
    state.complain_id = data.complain_id;
    console.log("State: ", state.complain_id);
    return data;
  } catch (err) {
    throw err;
  }
};

const controlForm = function (e) {
  e.preventDefault();

  console.log(e);
};

submitBtn.addEventListener("click", getFormValues);

// fromHandler.addEventListener("submit", controlForm);

console.log(townEl);
