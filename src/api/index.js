const BASE_URL = "https://dummyjson.com/";
export const getData = (path = "") => {
  return fetch(BASE_URL + path).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  });
};
