const LOCAL_STORAGE_KEY = "message";

export function saveMessage(data) {
  const dataLocalStorage = getMessage();

  dataLocalStorage.push(data);

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataLocalStorage));
}

export function getMessage() {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);

  return data ? JSON.parse(data) : [];
}
