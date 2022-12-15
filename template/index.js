export function createCard(items = []) {
  return items
    .map(({ id, question, answer }) => {
      return `     <li class="flashcard js-flashcard" data-id=${id}>
      <h2 class="title">${question}</h2>
      <h3 class="subtitle js-subtitle is-hide">${answer}</h3>
      <i class="fas fa-minus js-fa-minus"></i>
    </li>`;
    })
    .join("");
}
