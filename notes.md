## Type of Nodes 
- Every node item in the nodelist is a type of Node, which is represented by an object
- This object gets access to special methods such as .textContent, .childNodes, .parentNode
- To differenciate between nodes we have different node types
    1. Element Node (any html element)
    2. Text Node (any text inside html element)
    3. Comment Node (any html comment)
    4. Document Node (document node)     

- Each node type has its own methods that can be used to manipulate the DOM
- Ex: Element node have .append(), .remove(), .insertAdjecentHTML(), closest()

## What makes DOM work?
- The answer is inheritance. What this means is that all the child types will get access to the methods and properties of their parent types.

## What is Document node type?
- It is just another type of node. It contains important methods such as query selector, create element and more

## Listening to Events
We listen to elements using addEventListener

# Selecting, Creating and Removing Elements

## Selecting Elements

console.log(document.documentElement)
console.log(document.head)
console.log(document.body)

document.querySelector('.header')
document.querySelectorAll('.section') // returns a node list

const allBtns = document.getElementsByTagName('button')
console.log(allBtns)

- The above code returns an HTMLCollection which is different from nodelist. It is a so-called live collection which means if the dom changes then this collection is immediatly updated automatically.

## Creating and inserting elements
we have used insertAdjacentHTML to add elements but, sometimes we have to manually create elements in our application

- createElement()
This is a methods that will create an element on the page

const div = document.createElement('div') // creates a div
