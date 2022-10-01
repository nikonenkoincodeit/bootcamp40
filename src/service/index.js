const LOCAL_STORAGE_KEY = "message";

export function saveMessage(data) {
  const dataLocalStorage = getMessage();

  dataLocalStorage.push(data);
  saveData(dataLocalStorage);
}

export function getMessage() {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);

  return data ? JSON.parse(data) : [];
}

export function saveData(data) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}
