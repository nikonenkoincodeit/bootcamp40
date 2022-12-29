const createImgMessage = ({ dateMessage, imageURL, user }, userId) => {
  return `<div class="img-box ${user.uid === userId ? "right" : ""}">
  <img
    src="${imageURL}"
    alt="img" class="img">
  <p class="img-time">11:20</p>
  </div>`;
};

const createWordMessage = ({ user, message, dateMessage }, userId) => {
  return `<div class="container ${user.uid === userId ? "darker" : ""}">
  <img src="${user.photoURL}" alt="${user.displayName}" class="${
    user.uid === userId ? "right" : ""
  }">
  <p>${message}</p>
  <span class="time-left">11:01</span>
</div>`;
};

export const createMessage = (data = [], userId) => {
  return data
    .map((data) => {
      return data.type === "message"
        ? createWordMessage(data, userId)
        : createImgMessage(data, userId);
    })
    .join("");
};

// export const createMessage = (data = [], userId) => {
//   return data
//     .map(({ user, message, dateMessage }) => {
//       return `<div class="container ${user.uid === userId ? "darker" : ""}">
//       <img src="${user.photoURL}" alt="${user.displayName}" class="${
//         user.uid === userId ? "right" : ""
//       }">
//       <p>${message}</p>
//       <span class="time-left">11:01</span>
//     </div>`;
//     })
//     .join("");
// };
