import { API_BASE_URL } from "../../config.js";
import { AJAX } from "../../helpers.js";

export const state = {
  current_tab: "",
  response: {
    acceptedUserDetails: {},
    currentUser: {},
    ngos: {},
    nhris: {},
    pendingApplications: {},
    files: {},
  },
};

export const loadNgos = async function () {
  const url = API_BASE_URL + "/ngos";
  try {
    const data = await AJAX(url);
    state.response.ngos = data.ngos;
  } catch (err) {
    // Temp error handling
    console.error(`${err} 💥💥💥💥`);
    throw err;
  }
};

export const loadNhris = async function () {
  const url = API_BASE_URL + "/nhris";
  try {
    const data = await AJAX(url);
    state.response.nhris = data.nhris;
  } catch (err) {
    // Temp error handling
    console.error(`${err} 💥💥💥💥`);
    throw err;
  }
};

export const loadPendingApplications = async function () {
  const url = API_BASE_URL + "/pending-applications";
  try {
    const data = await AJAX(url);
    state.response.pendingApplications = data.pending_applications;
  } catch (err) {
    // Temp error handling
    console.error(`${err} 💥💥💥💥`);
    throw err;
  }
};

export const loadRandomNgoOrNhriUser = async function () {
  const url = API_BASE_URL + "/random-user";
  try {
    const data = await AJAX(url);
    state.response.currentUser = data.data;
  } catch (err) {
    // Temp error handling
    console.error(`${err} 💥💥💥💥`);
    throw err;
  }
};

export const loadCurrentNgoOrNhriUser = async function (userDetails) {
  const url = API_BASE_URL + "/user";
  try {
    const data = await AJAX(url, userDetails);
    state.response.currentUser = data.user;
  } catch (err) {
    // Temp error handling
    console.error(`${err} 💥💥💥💥`);
    throw err;
  }
};

export const acceptApplication = async function (applicationData) {
  const url = API_BASE_URL + "/accept-application";
  try {
    const data = await AJAX(url, applicationData);
    state.response.acceptedUserDetails = data;
  } catch (err) {
    // Temp error handling
    console.error(`${err} 💥💥💥💥`);
    throw err;
  }
};

export const rejectApplication = async function (applicationData) {
  const url = API_BASE_URL + "/reject-application";
  try {
    const data = await AJAX(url, applicationData);
    state.response.rejectedUserDetails = data;
  } catch (err) {
    // Temp error handling
    console.error(`${err} 💥💥💥💥`);
    throw err;
  }
};

export const fetchApplicationFiles = async function (id) {
  const url = API_BASE_URL + "/applicant-files";
  try {
    const data = await AJAX(url, id);
    state.response.files = data.data;
    console.log(state.response.files);
  } catch (err) {
    // Temp error handling
    console.error(`${err} 💥💥💥💥`);
    throw err;
  }
};
