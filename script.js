'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

console.log(document.documentElement)
console.log(document.head)
console.log(document.body)

document.querySelector('.header')
document.querySelectorAll('.section')

document.getElementById('section--1');
const allBtns = document.getElementsByTagName('button')
console.log(allBtns) 

// Creating and inserting elements
const msg = document.createElement('div') 
msg.classList.add('cookie-message');

// sets the text
msg.textContent = 'We use cookies to improve analytics'

// inserts html in the element
msg.innerHTML = 'We use cookies to improve analytics. <button class="btn btn--close-cookie">Got it!</button>'

// So now, we have our element and we just have to insert it in our DOM
const header = document.querySelector('.header')

// adds the first child of the element
header.prepend(msg)

// add the last child of the element
header.append(msg)

// You can either append the element or prepend it. How to create multiple copies of the same element?
// We have to create a clone of the element that we have to append or prepend multiple times using .cloneNode method

// header.append(msg.cloneNode(true))

// .before and .after method
header.before(msg) // adds element before the header element
header.after(msg) // adds element after the header element

// removing element 
const cookieBtn = document.querySelector('.btn--close-cookie')
cookieBtn.addEventListener('click', () => {
  msg.remove()
})