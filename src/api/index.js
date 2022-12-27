import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/contacts/";

const xhr = new XMLHttpRequest();
const BASE_URL = "http://localhost:3000/contacts/";

// export const getData = () => {
//   return fetch(BASE_URL).then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error(response.statusText);
//   });
// };

// export const getData = async () => {
//   try {
//     const { data } = await axios.get();
//     return data;
//   } catch (error) {
//     throw new Error(error);
//   }
// };

export const getData = () => {
  return new Promise((resolve, reject) => {
    xhr.open("GET", BASE_URL);

    xhr.responseType = "json";
    xhr.send();

    xhr.onload = () => {
      resolve(xhr.response);
    };

    xhr.onerror = () => {
      reject(xhr.error);
    };
  });
};

// export const sendData = (data = {}) => {
//   return fetch(BASE_URL, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   }).then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error(response.statusText);
//   });
// };

// export const sendData = (data = {}) => {
//   return axios.post("", data).then(({ data }) => data);
// };

// export const sendData = async (payload = {}) => {
//   try {
//     const { data } = await axios.post("", payload);
//     return data;
//   } catch (error) {
//     throw new Error(error);
//   }
// };

export const sendData = async (payload = {}) => {
  return new Promise((resolve, reject) => {
    xhr.open("POST", BASE_URL);
    xhr.responseType = "json";
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(payload));

    xhr.onload = () => {
      resolve(xhr.response);
    };

    xhr.onerror = () => {
      reject(xhr.error);
    };
  });
};

// export const deleteData = (id) => {
//   return fetch(BASE_URL + id, {
//     method: "DELETE",
//   }).then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error(response.statusText);
//   });
// };

export const deleteData = async (id) => {
  try {
    const { data } = await axios.delete(id);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

// export const updateData = (id, data = {}) => {
//   return fetch(BASE_URL + id, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   }).then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error(response.statusText);
//   });
// };

// export const updateData = (id, data = {}) => {
//   return axios.patch(id, data).then(({ data }) => data);
// };

export const updateData = async (id, payload = {}) => {
  try {
    const { data } = await axios.patch(id, payload);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
