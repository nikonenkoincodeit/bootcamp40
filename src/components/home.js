import { getData } from "../api";
import { tbodyRef } from "../refs";
import { createUsersTable } from "../markup";
import { updatePage } from "../helpers";
console.log("trsRef :>> ", trsRef);
getData("users")
  .then((data) => {
    const markup = createUsersTable(data);
    updatePage(tbodyRef, markup);
  })
  .catch((error) => {
    alert(error);
  });

const getUserId = (e) => {
  const userId = e.target.parentNode.dataset.userid;
  location.href = "/user.html?userid=" + userId;
};

tbodyRef.addEventListener("click", getUserId);
