'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const nav = document.querySelector('.nav');
const section1 = document.querySelector('#section--1');
const headerSection = document.querySelector('.header');
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

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

document.querySelector('.header');
document.querySelectorAll('.section');

document.getElementById('section--1');
const allBtns = document.getElementsByTagName('button');
// console.log(allBtns);

// Creating and inserting elements
// const msg = document.createElement('div');
// msg.classList.add('cookie-message');

// sets the text
// msg.textContent = 'We use cookies to improve analytics';

// inserts html in the element
// msg.innerHTML =
// 'We use cookies to improve analytics. <button class="btn btn--close-cookie">Got it!</button>';

// So now, we have our element and we just have to insert it in our DOM
const header = document.querySelector('.header');

// adds the first child of the element
// header.prepend(msg);

// add the last child of the element
// header.append(msg);

// You can either append the element or prepend it. How to create multiple copies of the same element?
// We have to create a clone of the element that we have to append or prepend multiple times using .cloneNode method

// header.append(msg.cloneNode(true))

// .before and .after method
// header.before(msg); // adds element before the header element
// header.after(msg); // adds element after the header element

// removing element
// const cookieBtn = document.querySelector('.btn--close-cookie');
// cookieBtn.addEventListener('click', () => {
//   msg.remove();
// });

// getComputedStyles() gives us the styles of an element inside the dom
// console.log(getComputedStyle(msg).height);
// msg.style.height =
//   Number.parseFloat(getComputedStyle(msg).height, 10) + 40 + 'px';

// console.log(getComputedStyle(msg).height + 40 + 'px');
// console.log(Number.parseFloat(getComputedStyle(msg).height, 10) + 40 + 'px');

// CSS custom properties / CSS variables
// when changing custom properties in CSS we have to use setProperty() method on the document element
// document.documentElement.style.setProperty('--color-primary', 'orangered')

// Setting html attributes in JS
const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.className);

// non standard attribute
// console.log(logo.designer);

// there is another way of reading non standard attributes from the dom
// getAttribute()
// console.log(logo.getAttribute('designer'));

// we can set attribute as well using setAttribute method
// logo.setAttribute('company', 'Bankist');

// src attribute returns the absolute path as the value, to get the relative path we have to use getAttribute method
// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// same is for links
// console.log(document.querySelector('.twitter-link').href);
// console.log(document.querySelector('.twitter-link').getAttribute('href'));

// nav link
// const modalBtn = document.querySelector('.btn--show-modal');
// console.log(modalBtn.href); // returns absolute path
// console.log(modalBtn.getAttribute('href')); // returns relative path

// data attributes
// these are special attributes that starts with the word data
// console.log(logo.dataset.versionNumber); // we use camel case where we have dash in the data attribute's name

// Classes
// methods we have for classes in JS
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c', 'j');
logo.classList.contains('c', 'j');

// donot use
logo.className = 'class'; // it will override all the existing classes and only put one class on the element

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
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  // get the cordinates we want to scroll to
  const s1Cords = section.getBoundingClientRect();
  // console.log(s1Cords);

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

  console.log(e.target.getBoundingClientRect());

  // get current scroll position
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  // result (0, 584) means we have scrolled 0px along x-axis and scrolled 584px along y-axis -> which is the distance between the current position of the view port and the top of the page

  // reading the height and the width of the viewport -> the screen area in which we can see the current portion of the page
  console.log(
    'height/width of viewport ',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // so why do we need these co-ordinates for scrolling?
  // Answer: we need these coordinates to tell JS where on the page we should scroll to

  // Smooth scrolling
  window.scrollTo('0', '1200');
  window.scrollTo(s1Cords.left, s1Cords.top);

  //global function available on the window object
  // to scroll it needs the x and y value
  // x value determines how much it should scroll vertically
  // y value determines how much it should scroll horizontally/down the page
});

// Types of events and events handler
// An event basically is a signle generated by a DOM node. That signal means that something has happened ex: click

// Mouse enter event
// const h1Ele = document.querySelector('h1');
// const showAlert = (e) => {
//   alert('reading heading')
// }
// h1Ele.addEventListener('mouseenter', showAlert )

// Different ways of attaching an event listeners to an element:
// 1. using onEventName method example => h1.onMouseenter

// h1Ele.onmouseenter = function () {
//   alert('h1')
// }

// h1Ele.onmouseenter = function () {
//   alert('I overwrote the previous event listener')
// }

// With addEventListener we can add multiple event listeners to a single element, but with 'on' method we can add only one

// Removing event listeners
// We can also remove an event listener after we are finished with listening that event
// const showAlert = e => {
//   alert('reading heading');
//   //  h1Ele.removeEventListener('mouseenter', showAlert)
// };
// h1Ele.addEventListener('mouseenter', showAlert);

// we can remove an event listener any where in our code, example: we can remove an event listener after a certain time has passed
// setTimeout(() => {
//   h1Ele.removeEventListener('mouseenter', showAlert);
// }, 3000);

/**
 * Event Bubbling & Propogation
 */

// JS events have a very important property. They have a capturing phase and a bubbling phase

// Capturing Phase:
// Let's say that a click happens on a link so, the DOM generates the click event right away. However, this click event is not generated at the target element instead the click event is generated at the root of the document so at the very top of the DOM. For there the so called capturing phase happens.

// The event will then pass down to every single parent element of the target element to reach to the target element and once it reaches the target element the target phase starts where it is going to execute the event listener./**
/*
 * Event Propogation: Bubbling and capturing - practice
 */

// Event bubbling is a behavior in which an event that occurs on a specific element will also trigger the same event on its parent elements, one by one, all the way up to the root element of the document.

/**
 * Suppose you have a webpage with a button inside a div element, and the div element is inside a section
 * element, which is further inside a body element
 *
 * <body>
 *    <section>
 *      <div>
 *        <button>Click me!</button>
 *      </div>
 *    </section>
 * </body>
 *
 * Now let's say you click the button. When you click the button, the click event will be triggered for
 * the button itself. This is called the "target" element of the event
 *
 * But event bubbling does not stop there. After the button's click event is handled, the event will
 * "bubble up" to its parent element, in this case, the div element. If there is a click event listener
 * attached to the div element, it will also be triggered
 *
 * The bubbling continues to the next parent element, which is the section element. If there is a click
 * event listener attached to the section, it will be triggered as well
 *
 * Finally, the event reaches the top-most element, the body element, and if there is a click event
 * listener attached to it, it will also be triggered
 *
 * So, in event bubbling, the event propagates from the taret to its parent elements, one by one, until
 * it reaches the root element, triggering any event listeners along the way
 *
 * This bubbling behavior allows you to handle events at different levels of the document hierarchy.
 * It can be usful when you want to perform certain actions based on the event occurring on specific
 * elements or their ancestors
 *
 */

// rgb(255, 255, 255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

/**
 * min 2
 * max 10
 * 3 * (10 - 2 + 1) + 2
 * 3 * 9 + 2 = 29
 */

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// next, attach the event listener to the target element and to its parent element as well

// target element
document.querySelector('.nav__link').addEventListener('click', function (e) {
  //  this.style.backgroundColor = randomColor(0, 255);
});

// parent element of .nav__link
document.querySelector('.nav__links').addEventListener('click', function (e) {
  //  this.style.backgroundColor = randomColor(0, 255);
  //Expectation: onlu .nav__links background color should change but
  // we are clicking on .nav__link element but the color of parent element also changes on click that is because the event is bubbling up.
});

// parent element of .nav__links
document.querySelector('.nav').addEventListener('click', function (e) {
  //  this.style.backgroundColor = randomColor(0, 255);
});

// A simple way to understand event bubbling and propagation
/**
 * let's say your element is the living room.
 *
 * and its parent element is the whole house, okay?
 *
 * if you sit in the livingroom (your event),
 *
 * then you are sitting in your home, too. (again your event in the parent function).
 *
 * actually it is not so technical to guess.
 *
 * What I mean, when you do something in the child element, you have to do it in its parent element too
 * automatically. Because the parent contains the child. The child is just inside of it.
 */

// we can also stop the event propagation, which is not a good practice

/**
 * Implementing smooth scroll on navigation using event delegation
 */

// Event Delegation
// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

/**
 * DOM Traversing
 */

// DOM Traversing basically means walking through the DOM. We can select elements based on other any other element

// Going downwards - selecting child elements
// the first way of doing that is the query selector
// console.log(h1Ele.querySelectorAll('.highlight')); // will go as deep as necessary in the DOM tree to find all the element having the class of highlight if they are children of h1Ele

// Selecting direct children using - childNodes & children
// console.log(h1Ele.childNodes); // gives every child node (text, comment, span, div)
// console.log(h1Ele.children); // gives children only

// Selecting first and last children
// console.log(h1Ele.firstElementChild);
// console.log(h1Ele.lastElementChild);

// Going upwards - selecting parents

// direct parent
// console.log(h1Ele.parentNode);
// console.log(h1Ele.parentElement);

// Sometimes we have to find a parent element not direct parent of the elemenet regardless how for it is in the DOM tree
// .closest
// console.log(h1Ele.closest('.header'));

// closest method is similar to querySelector but in opposite ways. querySelector finds children now matter how deep in the DOM tree but closest find parent element no matter how deep in the DOM tree

// Going sideways - selecting siblings
// we can only access direct siblings
// console.log(h1Ele.previousElementSibling);
// console.log(h1Ele.nextElementSibling);

// console.log(h1Ele.parentElement.children);
// [...h1Ele.parentElement.children].forEach(el => {
//   if (el !== h1Ele) {
//     el.style.transform = 'scale(0.5)';
//   }
// });

/**
 * Creating a tabbed components
 */

const tabBtns = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const contentContainer = document.querySelector(
  '.operations-content-container'
);

// tabBtns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     console.log('TAB');
//   });
// }); // this is not a good practice, if we have more than 100 btns then we are creating 100 copies of same function on the page. The best practice is to use event delegation+

/**
 * HTML Structure
 * - operations__tab-container (Parent class)
 * - button.operations__tab | button.btn (common) - button.operations__tab--2 (unique) - button attribute data-tab
 * - div.operations__content (common) - div.operations__content--2 (unique)
 * - active button class: operations__tab--active
 * - active div class: operations__content--active
 */
tabsContainer.addEventListener('click', e => {
  if (e.target.classList.contains('operations__tab')) {
    const id = e.target.getAttribute('data-tab');
    const activebtn = tabsContainer.querySelector(`.operations__tab--${id}`);
    const activeDiv = contentContainer.querySelector(
      `.operations__content--${id}`
    );

    // remove active btn class from prev elements
    const prevActiveBtn = tabsContainer.querySelector(
      '.operations__tab--active'
    );
    const prevActiveContent = contentContainer.querySelector(
      '.operations__content--active'
    );
    prevActiveBtn.classList.remove('operations__tab--active');
    prevActiveContent.classList.remove('operations__content--active');

    // add active class to current active
    activebtn.classList.add('operations__tab--active');
    activeDiv.classList.add('operations__content--active');
  }
});

// Menu fade animation using event delegation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// --------------- Sticky Navigation ----------------
// const initialCords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function () {
//   if (this.window.scrollY > initialCords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// }); // this works but adding a class on window scroll will have a bad performance especially on mobile devices
// we have an alternative for this that is "intersection observer API"

// --------------- Intersection Observer API ----------------
// It helps us to observe changes to a way that a certain target element intersects with another element or with the viewport
const navHeight = nav.getBoundingClientRect();

const observerOptions = {
  root: null,
  threshold: 0,
  // 0 means that our observer callback will run when our section is completly out of view and also as soon as it enters the view
  // 0.2 means when the 20% of the section is visible the callback will run and when 20% of the section is the section is out of the viewport the callback will run

  rootMargin: `-${navHeight.height}px`, // it is a box of 90 pixels which will be applied outside our target element
};
const stickyNav = entries => {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, observerOptions);
headerObserver.observe(headerSection);

// Implementing revealing element on scroll
const sections = document.querySelectorAll('.section');

const revealOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight.height}px`,
};
const revealSection = entries => {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  if (entry.isIntersecting) entry.target.classList.remove('section--hidden');
};
const sectionObserver = new IntersectionObserver(revealSection, revealOptions);

sections.forEach(section => {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
});

// Lazy loading images
const imageTargets = document.querySelectorAll('img[data-src]');

const imgObserverOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight.height}px`,
};

const imgObserverCallback = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  // Replace source with data the source
  entry.target.src = entry.target.dataset.src;

  // wait for the placeholder image to loads first then remove the class
  entry.addEventListener('load', () => {
    entry.target.classList.remove('lazy-img');
  });

  // step the observer
  imgTargetObserver.unobserve(entry.target);
};

const imgTargetObserver = new IntersectionObserver(
  imgObserverCallback,
  imgObserverOptions
);

imageTargets.forEach(image => {
  imgTargetObserver.observe(image);
});
