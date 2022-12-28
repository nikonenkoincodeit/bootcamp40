import { initializeApp } from "firebase/app";
import { getDatabase, push, ref } from "firebase/database";
import { firebaseConfig } from "../firebase-config";

const app = initializeApp(firebaseConfig);
const db = getDatabase();

export const sendData = (data = {}) => {
  try {
    push(ref(db, "messages"), data);
  } catch (error) {
    throw new Error(error);
  }
};
