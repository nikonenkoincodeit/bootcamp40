export const createObjMessage = (message = "", userId = 0) => {
  return {
    message,
    userId,
    dataMessage: Date.now(),
    file: {},
  };
};
