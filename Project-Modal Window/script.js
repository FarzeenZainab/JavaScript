'use strict';

const modalButton = document.querySelectorAll('.show-modal');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close-modal');
const hidden = 'hidden';

const closeModal = function () {
  modal.classList.add(hidden);
  overlay.classList.add(hidden);
};
const openModal = function () {
  modal.classList.remove(hidden);
  overlay.classList.remove(hidden);
};
/*    Explanation 
  we donot use () in event listner because () calls the function imegiadiatly
  as soon it executes eventListner, so it will not wait for the event to happen.

  Tip  We should use function expression most of the time.
*/
for (let i = 0; i < modalButton.length; i++) {
  modalButton[i].addEventListener('click', openModal);
}
close.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

/*
  How to know which key is pressed

   Important 

   All the information is stored inside the event which will occur as soon as the event occurs.

   JS usually makes an object that contains all the information about the event when it occurs. 

   Using that information from the object we can determine which key is pressed.

  Important 

  When we listen for a keypress we usually listen to the document, we can not listen to the to a button click, or text, or a variable.

  Important 

  'document' is a big object that have bunch of method that we can use. This also includes the DOM methods.

*/

//Create a short key to change the background color to red green blue and orange

//control + r
//control + b
//control + g
//control + o

/*
     Solution 

    1. add an event listner that will listen for control
    2. Inside that listner use if else statements to detemine key key
    3. run the CSS

*/
document.addEventListener('keydown', function (e) {
  if (e.code == 'KeyJ' && e.altKey) {
    if (
      !modal.classList.contains('hidden') &&
      !overlay.classList.contains('hidden')
    ) {
      closeModal();
    } else {
      openModal();
    }
  } else if (e.key == 'Escape') {
    closeModal();
  }
});
