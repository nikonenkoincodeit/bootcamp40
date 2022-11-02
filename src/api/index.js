import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue, get, set } from "firebase/database";

import { firebaseConfig } from "../config";
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

export const getData = (id = "") => {
  return get(ref(db, "task/" + id))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

export const sendData = (data) => {
  return push(ref(db, "task/"), data).then((response) => response.key);
};

onValue(ref(db, "task/"), (snapshot) => {
  const data = snapshot.val();
  console.log("onValue :>> ", data);
});

export const deleteData = (id) => {
  return set(ref(db, "task/" + id), null);
};

export const updateData = async (id, payload) => {
  const data = await getData(id);
  set(ref(db, "task/" + id), { ...data, ...payload });
};
