import { getData } from "../service";
import { createUsersInfo, createUsersAlbum } from "../markup";
import { addMarkup } from "../helpers";
import { findUser, filterObjById } from "../utils";
import { tBodyTableUser, listUserAlbum } from "../refs"

const href = location.href;

const userId = location.search.split("=")[1];

console.log("location :>> ", userId);
export const getUser = () => {
  if (!userId) return;
  getData("users")
    .then((data) => {
      const result = findUser(userId, data);
      const userMarkup = createUsersInfo([result]);
      addMarkup(tBodyTableUser, userMarkup);
    })
    .catch((error) => {
      console.log("error :>> ", error);
    });
};

export const getUserAlbumById = () => {
  if (!userId) return;
  getData("albums")
    .then(data => {
      const result = filterObjById(userId, data, 'userId');
      const userAlbumMarkup = createUsersAlbum(result);
      addMarkup(listUserAlbum, userAlbumMarkup);
    })
    .catch(console.log);
}
getUserAlbumById();


const getAlbumId = (e) => {
  const { dataset: { id } } = e.target.closest('.js-list-user-album');
  if (!id) return;
  location.href = "/album.html?albumId=" + id;
}

if (listUserAlbum) {
  listUserAlbum.addEventListener("click", getAlbumId);
}
