"use strict";

const fileHolder = document.querySelector(".supporting__form--file");
const submitbtn = document.querySelector(".form__submit");

console.log("Current report id: ", localStorage.getItem("current_complain_id"));

const uploadFile = function (e) {
  //   e.preventDefault();
  //   e.returnValue = false;

  const file = fileHolder.target.file;
};

submitbtn.addEventListener("click", uploadFile);
