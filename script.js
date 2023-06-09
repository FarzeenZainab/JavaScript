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

// getComputedStyles() gives us the styles of an element inside the dom
console.log(getComputedStyle(msg).height) 
msg.style.height = Number.parseFloat(getComputedStyle(msg).height, 10) + 40 + 'px'

console.log(getComputedStyle(msg).height + 40 + 'px')
console.log(Number.parseFloat(getComputedStyle(msg).height, 10) + 40 + 'px')

// CSS custom properties / CSS variables
// when changing custom properties in CSS we have to use setProperty() method on the document element
// document.documentElement.style.setProperty('--color-primary', 'orangered')

// Setting html attributes in JS
const logo = document.querySelector('.nav__logo')
console.log(logo.alt)
console.log(logo.className)

// non standard attribute
console.log(logo.designer)

// there is another way of reading non standard attributes from the dom
// getAttribute()
console.log(logo.getAttribute('designer'))

// we can set attribute as well using setAttribute method
logo.setAttribute('company', 'Bankist')

// src attribute returns the absolute path as the value, to get the relative path we have to use getAttribute method
console.log(logo.src)
console.log(logo.getAttribute('src'))

// same is for links
console.log(document.querySelector('.twitter-link').href)
console.log(document.querySelector('.twitter-link').getAttribute('href'))

// nav link
const modalBtn = document.querySelector('.btn--show-modal')
console.log(modalBtn.href) // returns absolute path
console.log(modalBtn.getAttribute('href')) // returns relative path

// data attributes
// these are special attributes that starts with the word data
console.log(logo.dataset.versionNumber) // we use camel case where we have dash in the data attribute's name

// Classes
// methods we have for classes in JS
logo.classList.add('c', 'j')
logo.classList.remove('c', 'j')
logo.classList.toggle('c', 'j')
logo.classList.contains('c', 'j')

// donot use
logo.className = 'class' // it will override all the existing classes and only put one class on the element

// --- Summary ---

// Select element
/**
 * getElementById()
 * getElementByClassName() 
 * getElementsByTagName() -> returns an HTMLCollection that will update if the dom changes
 * querySelector()
 * querySelectorAll() -> returns a nodelist
 */

// Select parts of HTML page
/**
 * document.documentElement
 * document.head
 * document.body
 */

// Create a new DOM element
/**
 * document.createElement('div') -> creates new element
 * element.prepand(newElement) -> prepands new element as the first child to the specified element
 * element.append(newElement) -> appends new element as the last child to the specified element
 * element.append(newElement.clone(true)) -> create a clone so we can append and prepand at the same time 
 * 
 * .textContent -> sets the text content of the element
 * .innerHTML -> adds html and text inside the element
 * 
 * .remove() -> removes element from the DOM
 */

// working with element styles
/**
 * .style.css -> set css styles to the element
 * console.log(ele.style.height) -> gives us the height
 * to manuipulate exisiting css styles ex. add more to height we use .getComputedStyles() method
 * setProperty() sets new or updates the value of a custom CSS property inside JS
 */

// working with attributes
/**
 * ele.href -> gives href (absolute link)
 * ele.src -> gives src (absolute link)
 * ele.getAttribute('attName') -> gets the specified attribute
 * ele.data.attName -> gets the data- attribute of the element
*/

// Classes' methods
/**
 * .add()
 * .remove()
 * .toggle()
 * .containes()
 */

// Implementing Smooth Scroll
const btnScrollTo = document.querySelector('.btn--scroll-to')
const section = document.querySelector('#section--1')

btnScrollTo.addEventListener('click', function (e) {
  // get the cordinates we want to scroll to 
  const s1Cords = section.getBoundingClientRect()
  console.log(s1Cords);

  /* getBoundingClientRect() gives us following:

      It returns a DOMRect object providing the information the size of an element and its position relative to the viewport

      What is DOMRect?
      It describes the size and position of a reactangle

      x position: x distance between the browser and the element
      y positions: y distance betweent the browser and the element
      left:
      right:
      width:
      height:

      boundingClientRect is relative to current viewport 
  */

      console.log(e.target.getBoundingClientRect())

      // get current scroll position
      console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset) 
      // result (0, 584) means we have scrolled 0px along x-axis and scrolled 584px along y-axis -> which is the distance between the current position of the view port and the top of the page

      // reading the height and the width of the viewport -> the screen area in which we can see the current portion of the page
      console.log('height/width of viewport ', document.documentElement.clientHeight, document.documentElement.clientWidth);

      // so why do we need these co-ordinates for scrolling?
      // Answer: we need these coordinates to tell JS where on the page we should scroll to

      // Smooth scrolling
      window.scrollTo('0', '1200') 
      window.scrollTo(s1Cords.left, s1Cords.top) 
      
      //global function available on the window object
      // to scroll it needs the x and y value
      // x value determines how much it should scroll vertically
      // y value determines how much it should scroll horizontally/down the page
})