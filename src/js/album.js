import { getData } from "../api";
import { listSongRef } from "../refs";
import { createPhotoCard } from "../markup";
import { addMarkup } from "../helpers";

const albumId = location.search.split("=")[1] ?? 1;

getData("photos?albumId=" + albumId)
  .then((response) => {
    const markup = createPhotoCard(response);
    addMarkup(listSongRef, markup);
  })
  .catch((error) => {
    console.log(error.message);
  });
