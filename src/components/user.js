import { getData } from "../api";
import { userTableRef, albumRef } from "../refs";
import { createUserTable, createUserAlbums } from "../markup";
import { updatePage } from "../helpers";

const userId = location.search.split("=")[1];

getData("users/" + userId)
  .then((data) => {
    const markup = createUserTable([data]);
    updatePage(userTableRef, markup);
  })
  .catch((error) => {
    alert(error);
  });

getData("albums/")
  .then((data) => {
    const filterData = data.filter(({ userId: id }) => {
      return Number(id) === Number(userId);
    });
    console.log("filterData :>> ", filterData);
    const markup = createUserAlbums(filterData);
    updatePage(albumRef, markup);
  })
  .catch((error) => {
    alert(error);
  });
