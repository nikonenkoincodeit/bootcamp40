export const createMessage = (data = [], userId) => {
  return data
    .map(({ user, message, uid, dateMessage }) => {
      return `<div class="container ${uid === userId ? "darker" : ""}">
      <img src="${user.photoURL}" alt="${user.displayName}" class="${
        uid === userId ? "right" : ""
      }">
      <p>${message}</p>
      <span class="time-left">11:01</span>
    </div>`;
    })
    .join("");
};
