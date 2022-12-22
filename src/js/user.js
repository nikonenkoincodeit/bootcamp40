import { getData } from "../api";
import { albumRef, userTableRef } from "../refs";
import { createListAlbums, createUserTable } from "../markup";
import { addMarkup } from "../helpers";

const userId = location.search.split("=")[1] ?? 1;

getData("users/" + userId)
  .then((response) => {
    const markup = createUserTable([response]);
    addMarkup(userTableRef, markup);
  })
  .then((response) => getData("albums?userId=" + userId))
  .then((response) => {
    const markup = createListAlbums(response);
    addMarkup(albumRef, markup);
  })
  .catch((error) => {
    console.log(error.message);
  });

const getUserAlbum = (e) => {
  const t = e.target;
  const parent = t.closest(".js-list-user-album");
  if (!parent) return;
  const albumId = parent.dataset.id;
  location.href = "/album.html?albumId=" + albumId;
};

albumRef.addEventListener("click", getUserAlbum);
