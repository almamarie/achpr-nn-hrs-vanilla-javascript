const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

//    a function for http requests
export const AJAX = async function (url, uploadData = undefined) {
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

    const res = await Promise.race([fetchPro, timeout(60)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};

// At this point, creating a different AJAX to send multipart/form-data would make sense.
// This way, I will not have to keep modifying the geeral AJAX and make it complex

// try {
//   let res = await fetch("http://127.0.0.1:5000/observer-registration", {
//     method: "POST",
//     body: formD,
//     // Content-type is automatically added when the form is added
//     // in the constructor of FormData. So this is not needed
//     //headers: {"Content-Type":"multipart/form-data;"}
//   });

//   // get the results as text not json
//   // becuase I am returing plain text
//   let result = await res.text();
//   console.log(res.status, result);
// } catch (ex) {
//   console.log(ex);
// }

export const FILE_AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = fetch("http://127.0.0.1:5000/observer-registration", {
      method: "POST",
      body: uploadData,
      // Content-type is automatically added when the form is added
      // in the constructor of FormData. So this is not needed
      //headers: {"Content-Type":"multipart/form-data;"}
    });

    const res = await Promise.race([fetchPro, timeout(180)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};
