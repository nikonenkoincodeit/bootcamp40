const BASE_URL = "http://localhost:3000/data/";

export const sendData = (data) => {
  return fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  });
};

export const getData = () => {
  return fetch(BASE_URL).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.statusText);
  });
};

export const deleteItem = (id) => {
  return fetch(BASE_URL + id, {
    method: "DELETE",
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.statusText);
  });
};

export const updateTaskDB = (id, checked) => {
  return fetch(BASE_URL + id, {
    method: "PATCH",
    body: JSON.stringify({ checked }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.statusText);
  });
};
