import { initializeApp } from "firebase/app";
import {
  getDatabase,
  push,
  ref,
  onValue,
  onDisconnect,
  set,
  serverTimestamp,
} from "firebase/database";
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

// Since I can connect from multiple devices or browser tabs, we store each connection instance separately
// any time that connectionsRef's value is null (i.e. has no children) I am offline

const myConnectionsRef = ref(db, "users/joe/connections");

// stores the timestamp of my last disconnect (the last time I was seen online)
const lastOnlineRef = ref(db, "users/joe/lastOnline");

const connectedRef = ref(db, ".info/connected");
onValue(connectedRef, (snap) => {
  if (snap.val() === true) {
    // We're connected (or reconnected)! Do anything here that should happen only if online (or on reconnect)
    const con = push(myConnectionsRef);

    // When I disconnect, remove this device
    onDisconnect(con).remove();

    // Add this device to my connections list
    // this value could contain info about the device or a timestamp too
    set(con, true);

    // When I disconnect, update the last time I was seen online
    onDisconnect(lastOnlineRef).set(serverTimestamp());
  }
});
