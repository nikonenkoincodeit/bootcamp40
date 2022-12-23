import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, get, remove, update } from "firebase/database";

import { firebaseConfig } from "../firebase-config";

const app = initializeApp(firebaseConfig);
const db = getDatabase();

export const sendData = (data = {}) => {
  try {
    push(ref(db, "task"), data);
  } catch (error) {
    console.log("error :>> ", error);
  }
};

export const getData = () => {
  return get(ref(db, "task"))
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

export const deleteItem = (id) => {
  try {
    remove(ref(db, "task/" + id));
  } catch (error) {}
};

export const updateItem = (id, checked) => {
  try {
    update(ref(db, "task/" + id), { checked });
  } catch (error) {}
};
