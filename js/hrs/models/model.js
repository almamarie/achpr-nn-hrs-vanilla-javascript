import { API_BASE_URL } from "../../config.js";
import { AJAX } from "../../helpers.js";

export const state = {
  complaints: {},
};

export const loadComplaints = async function () {
  const url = API_BASE_URL + "/complaints";
  try {
    const data = await AJAX(url);
    state.complaints = data.ngos;
  } catch (err) {
    // Temp error handling
    console.error(`${err} 💥💥💥💥`);
    throw err;
  }
};
