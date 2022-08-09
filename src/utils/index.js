export const findUser = (userId, users = []) => {
  return users.find(({ id }) => id === Number(userId));
};
