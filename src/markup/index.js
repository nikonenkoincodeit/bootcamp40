export const createMessage = (data = [], userId) => {
  return data
    .map(({ user, message, dateMessage }) => {
      return `<div class="container ${user.uid === userId ? "darker" : ""}">
      <img src="${user.photoURL}" alt="${user.displayName}" class="${
        user.uid === userId ? "right" : ""
      }">
      <p>${message}</p>
      <span class="time-left">11:01</span>
    </div>`;
    })
    .join("");
};
