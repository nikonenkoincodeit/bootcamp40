export const createObjMessage = (message = "", user) => {
  return {
    message,
    user,
    dataMessage: Date.now(),
    file: {},
  };
};
