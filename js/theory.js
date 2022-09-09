//Поширення подій (event propagation) - це термін, що описує життєвий цикл події,
//який має три етапи: занурення, таргетинг і спливання.
//На практиці найчастіше використовують тільки фазу спливання.
// - Capturing phase (занурення) - подія починається на window і тоне
// - Target phase (таргетинг) - подія дійшла до цільового елемента.
// - Bubbling phase (спливання) - кінцева фаза, подія спливає від найглибшого, цільового
//елемента, через усі елементи-предки до window.

//Властивість event.target
// - event.target - це посилання на вихідний елемент, на якому відбулася подія,
//в процесі спливання вона - незмінна.

// - event.currentTarget - це посилання на поточний елемент, до якого дійшло спливання,
//на ньому зараз виконується обробник події.

// const coursesContainerRef = document.querySelector('.js-courses-container');
// const itemRef = document.querySelector('.js-item');

// coursesContainerRef.addEventListener('click', function (e) {
//   console.log('this :>> ', this);
//   console.log('e.currentTarget :>> ', e.currentTarget);
//   console.log('e.target :>> ', e.target);
// });

//Метод Element.closest() повертає найближчий батьківський елемент (або сам елемент),
//який відповідає заданому CSS-селектор або null, якщо таких елементів взагалі немає.

//Припинення спливання stopPropagation()

//Делегування подій

const coursesContainerRef = document.querySelector('.js-courses-container');

coursesContainerRef.addEventListener('click', function (e) {
  if (e.target.nodeName === 'BUTTON') {
    console.log(e.target.closest('li').dataset.id);
  }
});
