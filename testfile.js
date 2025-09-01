// // this file is for testing purpose


// The Questions
// <!-- First Question  -->
// # 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

// Answer : 
// # Element Selectors: getElementById vs. getElementsByClassName vs. querySelector. 
// These are all methods for selecting DOM elements, but they differ in what they select, what they return, and how they perform.

// #document.getElementById('id')

// Selects: A single element that has the specified unique ID.

// Returns: A single DOM element object. It's the fastest and most direct way to get one specific element.

// Example: const coinCounterElement = document.getElementById('coin-counter');



// # document.getElementsByClassName('class')

// Selects: All elements that contain the specified class name.

// Returns: A live HTMLCollection  of all matching elements, an array-like object. "Live" means it automatically updates if I add or remove elements with that class.

// Example: const serviceCards = document.getElementsByClassName('service-cards');





// # document.querySelector('selector')

// Selects: The first element that matches the specified CSS selector (like #id, .class, div > p).

// Returns: A single DOM element object. It's incredibly flexible, because I can select any element whether id, class or tag.

// Example: const firstCard = document.querySelector('.service-cards');



// # document.querySelectorAll('selector')

// Selects: All elements that match the specified CSS selector.

// Returns: A static NodeList (an array-like object). "Static" means it's a snapshot and does not automatically update if I add or remove matching elements later.

// Example: const favoriteButtons = document.querySelectorAll('.favorite-icon');















