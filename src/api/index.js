import { initializeApp } from "firebase/app";
import { getDatabase, push, ref, onValue } from "firebase/database";
import { firebaseConfig } from "../firebase-config";
import { updateChat } from "../main";
const app = initializeApp(firebaseConfig);
const db = getDatabase();

export const sendData = (data = {}) => {
  try {
    push(ref(db, "messages"), data);
  } catch (error) {
    throw new Error(error);
  }
};

onValue(ref(db, "messages"), (snapshot) => {
  const data = snapshot.val();
  const items = Object.values(data);
  if (!items.length) return;
  updateChat(items);
});
