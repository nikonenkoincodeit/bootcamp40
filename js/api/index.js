const DATA_KEY = "task";

export const getData = () => {
  try {
    return localStorage.getItem(DATA_KEY);
  } catch (error) {
    console.log("error :>> ", error);
  }
};

export const updateLocalStorage = (data) => {
  localStorage.setItem(DATA_KEY, JSON.stringify(data));
};

export const addData = (data) => {
  try {
    let result = [];
    const dataJSON = getData();
    if (dataJSON) {
      result = JSON.parse(dataJSON);
    }
    result.push(data);
    updateLocalStorage(result);
  } catch (error) {
    console.log("error :>> ", error);
  }
};
