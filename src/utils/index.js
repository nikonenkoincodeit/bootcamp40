export const createObjMessage = (message = "", user, type, imageURL = "") => {
  return {
    message,
    user,
    dataMessage: Date.now(),
    type,
    imageURL,
  };
};
