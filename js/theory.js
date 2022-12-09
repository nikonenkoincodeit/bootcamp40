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
// // { capture: true }
// parent.addEventListener(
//   'click',
//   e => {
//     alert('Parent click handler');
//   },
//   true,
// );

// child.addEventListener(
//   'click',
//   e => {
//     alert('Child click handler');
//   },
//   true,
// );

// descendant.addEventListener(
//   'click',
//   e => {
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
//   // console.log('this :>> ', this);
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

//Делегування подій

// const groupRef = document.querySelector('.js-list-group');

// const markup = ` <li class="list-group-item" data-text="Элемент">Элемент</li>
// <li class="list-group-item" data-text="Второй элемент">Второй элемент</li>
// <li class="list-group-item" data-text="Третий элемент">Третий элемент</li>
// <li class="list-group-item" data-text="Четвертый элемент">Четвертый элемент</li>
// <li class="list-group-item" data-text="И пятый">И пятый</li>`;
// groupRef.innerHTML = markup;
// const listGroupRef = document.querySelectorAll('.list-group-item');
// listGroupRef.forEach(item => {
//   // console.log('item :>> ', item);
//   item.addEventListener('click', onClick);
// });

// function onClick(e) {
//   const text = this.textContent;
//   alert(text);
// }

setTimeout(() => {
  const markup = ` <li class="list-group-item" data-text="Элемент">Элемент</li>
  <li class="list-group-item" data-text="Второй элемент">Второй элемент</li>
  <li class="list-group-item" data-text="Третий элемент">Третий элемент</li>
  <li class="list-group-item" data-text="Четвертый элемент">Четвертый элемент</li>
  <li class="list-group-item" data-text="И пятый">И пятый</li>`;
  groupRef.innerHTML = markup;
}, 3000);

const groupRef = document.querySelector('.js-list-group');
function onClick(e) {
  // console.log(e.target.nodeName);
  // console.log(e.target.tagName);
  if (e.target.tagName !== 'LI') return;
  const text = e.target.textContent;
  alert(text);
}

groupRef.addEventListener('click', onClick);
