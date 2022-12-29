export const createObjMessage = (message = "", user, type, imageURL = "") => {
  return {
    message,
    user,
    dateMessage: Date.now(),
    type,
    imageURL,
  };
};

const padStart = (value) => value.toString().padStart(2, 0);

export const getData = (time) => {
  const date = new Date(time);
  return padStart(date.getHours()) + ":" + padStart(date.getMinutes());
};
