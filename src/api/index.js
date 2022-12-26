const BASE_URL = "http://localhost:3000/contacts/";

export const getData = () => {
  return fetch(BASE_URL).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  });
};

export const sendData = (data = {}) => {
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

export const deleteData = (id) => {
  return fetch(BASE_URL + id, {
    method: "DELETE",
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  });
};

export const updateData = (id, data = {}) => {
  return fetch(BASE_URL + id, {
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
