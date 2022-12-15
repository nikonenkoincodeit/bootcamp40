const LOCALSTORAGE_KEY = "items";

export function getData() {
  try {
    const data = localStorage.getItem(LOCALSTORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log("error :>> ", error);
  }
}

export function saveData(items) {
  try {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    console.log("error :>> ", error);
  }
}

export function sendData(obj) {
  try {
    const items = getData();
    items.push(obj);
    saveData(items);
  } catch (error) {
    console.log("error :>> ", error);
  }
}

export function removeData() {
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
