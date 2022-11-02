import axios from "axios";

const BASE_URL = "http://localhost:3000/data";
axios.defaults.baseURL = BASE_URL;

export const sendData = async (payload) => {
  const { data } = await axios.post("/", payload);
  return data;
};

// export const sendData = (data) => {
//   return axios.post("/", data).then(({ data }) => data);
// };

// export const sendData = (data) => {
//   return fetch(BASE_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   }).then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error(response.statusText);
//   });
// };

export const getData = async () => {
  const { data } = await axios.get();
  return data;
};

// export const getData = () => {
//   return axios.get().then((response) => {
//     return response.data;
//   });
// };

// export const getData = () => {
//   return fetch(BASE_URL).then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error(response.statusText);
//   });
// };

export const deleteData = async (id) => {
  const { data } = await axios.delete(`/${id}`);
  return data;
};

// export const deleteData = (id) => {
//   return axios.delete(`/${id}`).then(({ data }) => data);
// };

// export const deleteData = (id) => {
//   return fetch(BASE_URL + `/${id}`, {
//     method: "DELETE",
//   }).then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error(response.statusText);
//   });
// };

export const updateData = async (id, payload) => {
  const { data } = await axios.patch(`/${id}`, payload);
  return data;
};

// export const updateData = (id, data) => {
//   return axios.patch(`/${id}`, data).then(({ data }) => data);
// };

// export const updateData = (id, data) => {
//   return fetch(BASE_URL + `/${id}`, {
//     method: "PATCH",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   }).then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error(response.statusText);
//   });
// };
