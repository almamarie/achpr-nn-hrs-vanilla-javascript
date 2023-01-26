import { API_BASE_URL } from "../../config.js";
import { AJAX, FILE_AJAX } from "../../helpers.js";

export const state = {
  basicDetails: {},
  response: {},
};

// export const updateFiles = function (files) {
//     state.files
// };

export const submitApplication = async function (formData) {
  const url = API_BASE_URL + "/observer-registration";
  try {
    const data = await FILE_AJAX(url, formData);
    state.response = data;
  } catch (err) {
    // Temp error handling
    console.error(`${err} 💥💥💥💥`);
    throw err;
  }
};
