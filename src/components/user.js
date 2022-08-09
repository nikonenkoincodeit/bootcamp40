import { getData } from "../service";
//import { createUsersTable } from "../markup";
//import { addMarkup } from "../helpers";
import { findUser } from "../utils";

const href = location.href;

const userId = location.search.split("=")[1];

console.log("location :>> ", userId);
export const getUser = () => {
  if (!userId) return;
  getData("users")
    .then((data) => {
      const result = findUser(userId, data);
      console.log("result :>> ", result);
    })
    .catch((error) => {
      console.log("error :>> ", error);
    });
};
