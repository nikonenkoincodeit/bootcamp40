import { getData } from "../service";
import { createUsersTable } from "../markup";
import { addMarkup } from "../helpers";

import { tBodyTableUsers } from "../refs";

export const getUsers = () => {
  getData("users")
    .then((data) => {
      const markup = createUsersTable(data);
      addMarkup(tBodyTableUsers, markup);
    })
    .catch((error) => {
      console.log("error :>> ", error);
    });
};

const getUserId = (e) => {
  const { parentNode: parent } = e.target;
  const userId = parent.dataset.userid;
  if (!userId) return;
  location.href = "/user.html?userId=" + userId;
};

if (tBodyTableUsers) {
  tBodyTableUsers.addEventListener("click", getUserId);
}

