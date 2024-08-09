"use strict";
// 100 Days Of Coding Challenge!
/** Question 35:
Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to print out the name of each animal.

* Modify your program to print a statement about each animal, such as A dog would make a great pet.
* Add a line at the end of your program stating what these animals have in common.
* You could print a sentence such as Any of these animals would make a great pet!*/
//---------------------------------------------------------------------------------------------------------
// An array of pet animals
let animals = ["goat", "cow", "camel"];
// Print the names of each animal
console.log("Name of the animals", animals);
// Print statements about each animal
animals.forEach((animal) => {
    console.log(`A ${animal} would make a great pet.`);
});
// Common characteristic of these animals
console.log("They all produce milk and Any of these animals would make a great pet!");
