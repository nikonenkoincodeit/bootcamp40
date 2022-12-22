import { getData } from "../api";
import { tbodyRef } from "../refs";
import { createUsersTable } from "../markup";
import { addMarkup } from "../helpers";

getData("users")
  .then((response) => {
    const markup = createUsersTable(response);
    addMarkup(tbodyRef, markup);
  })
  .catch((error) => {
    alert(error.message);
  });

const getUserData = (e) => {
  const t = e.target;
  const parent = t.closest(".js-t-row");
  if (!parent) return;
  const userId = parent.dataset.userid;
  location.href = "/user.html?userId=" + userId;
};

tbodyRef.addEventListener("click", getUserData);
