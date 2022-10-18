//Поширення подій (event propagation) - це термін, що описує життєвий цикл події,
//який має три етапи: занурення, таргетинг і спливання.
//На практиці найчастіше використовують тільки фазу спливання.
// - Capturing phase (занурення) - подія починається на window і тоне
// - Target phase (таргетинг) - подія дійшла до цільового елемента.
// - Bubbling phase (спливання) - кінцева фаза, подія спливає від найглибшого, цільового
//елемента, через усі елементи-предки до window.

const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const descendant = document.querySelector('#descendant');
// { capture: true }
// parent.addEventListener(
//   'click',
//   () => {
//     alert('Parent click handler');
//   },
//   true,
// );

// child.addEventListener(
//   'click',
//   () => {
//     alert('Child click handler');
//   },
//   true,
// );

// descendant.addEventListener(
//   'click',
//   () => {
//     alert('Descendant click handler');
//   },
//   true,
// );

//Властивість event.target
// - event.target - це посилання на вихідний елемент, на якому відбулася подія,
//в процесі спливання вона - незмінна.

// - event.currentTarget - це посилання на поточний елемент, до якого дійшло спливання,
//на ньому зараз виконується обробник події.

// parent.addEventListener('click', function (e) {
//   console.log('this :>> ', this);
//   console.log('e.currentTarget :>> ', e.currentTarget);
//   console.log('e.target :>> ', e.target);
// });

//Припинення спливання stopPropagation()
// parent.addEventListener('click', () => {
//   alert('Parent click handler');
// });

// child.addEventListener('click', e => {
//   e.stopPropagation();
//   alert('Child click handler');
// });

// descendant.addEventListener('click', e => {
//   alert('Descendant click handler');
// });

//Метод Element.closest() повертає найближчий батьківський елемент (або сам елемент),
//який відповідає заданому CSS-селектор або null, якщо таких елементів взагалі немає.

//Делегування подій

const listGroupRef = document.querySelector('.js-list-group');
const titleRef = document.querySelector('.js-title');

function onClick(e) {
  // console.log('e.target.nodeName :>> ', e.target.nodeName);
  // console.log('e.target.tagName :>> ', e.target.tagName);
  if (e.target.tagName !== 'LI') return;
  console.log(e.target.dataset.text);
  titleRef.textContent = e.target.dataset.text;
}

listGroupRef.addEventListener('click', onClick);
