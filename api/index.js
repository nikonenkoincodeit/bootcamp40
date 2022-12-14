export function sendData(data) {
  const array = getData();
  array.push(data);
  saveData(array);
}

export function saveData(data) {
  localStorage.setItem("tasks", JSON.stringify(data));
}

export function getData() {
  try {
    const data = localStorage.getItem("tasks");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log("error :>> ", error);
  }
}
