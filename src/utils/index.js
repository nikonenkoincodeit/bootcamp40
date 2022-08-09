export const findUser = (userId, users = []) => {
  return users.find(({ id }) => id === Number(userId));
};

export const filterObjById = (userIdAlbums, albums = [], key = '') => {
  console.log("🚀 ~ filterObjById ~ key", key)
  console.log("🚀 ~ filterObjById ~ albums", albums)
  console.log("🚀 ~ filterObjById ~ userIdAlbums", userIdAlbums)

  return albums.filter((obj) => obj[key] === Number(userIdAlbums));
}