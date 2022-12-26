const BASE_URL = "http://localhost:3000/data";

//GET
const getData = () => {
  return fetch(BASE_URL).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  });
};

getData().then(console.log).catch(console.log);

//POST
const sendData = (data = {}) => {
  return fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  });
};
// sendData({ value: "купити курку!", checked: false })
//   .then(console.log)
//   .catch(console.log);

//DELETE
const deleteItem = (id) => {
  return fetch(BASE_URL + "/" + id, {
    method: "DELETE",
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  });
};
// deleteItem(2).then(console.log).catch(console.log);
//PUT
// const updateItem = (id, data = {}) => {
//   return fetch(BASE_URL + "/" + id, {
//     method: "PUT",
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
// updateItem(3, { value: "купити курку!" }).then(console.log).catch(console.log);

//PATCH

const updateItem = (id, data = {}) => {
  return fetch(BASE_URL + "/" + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  });
};
updateItem(2, { value: "купити курку!" }).then(console.log).catch(console.log);
