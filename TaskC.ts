// 100 Days Of Coding Challenge!

/** Question 36:
T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.*/

//-------------------------------------------------------------------------------------------------------------------------------

// Using a function make_shirt() that accepts a shirt's size and message
function make_shirt(size: string, message: string) {
  // Print a summary of the shirt size and message
  console.log(`Shirt size: ${size}`);
  console.log(`Message printed on the shirt: "${message}"`);
}

// Call the function with different sizes and messages
make_shirt("Small", "I love TypeScript!"); // Small size with a message
make_shirt("Medium", "Keep coding!"); // Medium size with a message
make_shirt("Large", "Stay curious!"); // Large size with a message
