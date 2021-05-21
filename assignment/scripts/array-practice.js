/*

NOTES

let arrayName = ['coke', 'pepsi', 'sprite'] - coke[0], pepsi[1], sprite[2]
arrayName.length = 4 - highest index is always 1 less than length
arrayName.indexOf('x') - checks if variable is in array, -1 means not in array.
arrayName.push('x') - adds something to END of array
arrayName.pop() - removes something from END of array
arrayName.unshift('x') - adds something to BEGINNING of array
arrayName.shift() - removes something from BEGINNING of array

LOOPS - repeated actions, block of code, depends on conditional being true
while loop - will continue to run repeated action while condition is true
for loop - 'for a number of times/items', example.) Use a for loop for each item in an array

while (hungry) { // (hungry) - conditional, if (hungry) is true run {keep eating}
  keep eating
} // Will repeat as long as (hungry) is true

*/
console.log('****** Array Practice *******')
// 1. Creating arrays
console.log('--- 1. Practice creating arrays ---');

// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);

// 1.a. TODO: Make an array with some favorite foods
let favFoods = ['pizza', 'tacos', 'bacon', 'chicken', 'steak']

// 1.b. TODO: Log your array of foods to the console with a message, similar to the example above
console.log('Some favorite foods in favFoods array: ', favFoods);

// 2. Array.length - tells you how many items are in the array
console.log('--- 2. Length of an array ---');

// Example: How many animals are in the array?
console.log('Number of animals:', animalArray.length);

// 2.a. TODO: Log to the console the number of foods in your array
console.log('Number of favorite foods in favFoods array:', favFoods.length);

// 3. Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
console.log('First animal is:', animalArray[0]);

// 3.a. TODO: Log the second animal in the array
console.log('Second animal is:', animalArray[1]);

// 3.b. TODO: Log the last animal in the array using it's array index
console.log('Last animal is:', animalArray[3]);

// 3.c. (STRETCH) TODO: Log the last animal by using the array length,
//      instead of the exact index number of the last item
console.log('Last animal is:', animalArray[animalArray.length - 1]);

// 4. Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
animalArray.push('penguin');
console.log('Added an animal to end,', animalArray);

// 4.a. TODO: Add a new food at the end of your array & log the array
favFoods.push('pasta');
console.log('Added new food to end of favFoods array', favFoods);

// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.b. TODO: Remove the food at the end of your array &
//      log both the food removed and the updated array
let removedFood = favFoods.pop();

console.log('Removed last item in favFoods array:', removedFood);
console.log('Foods currently in favFoods array:', favFoods);

// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array
favFoods.unshift('pie')
console.log('Added food to beginning of favFoods array:', favFoods);
console.log(`Added food to beginning of favFoods array: ${favFoods}`);
// QUESTION: I have a keyboard plugged into my mac and when I try to use the 'tilde' key
// it types '§' instead of ``. Will look for a fix later

// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal:', removedAnimal);
console.log('The animals are now:', animalArray);

// 4.d TODO: Remove the food at the beginning of your array &
//     log both the food removed and the updated array
removedFood = favFoods.shift();
console.log('Removed food at beginning of favFoods array:', removedFood);
console.log(`Foods currently in favFoods array: ${favFoods}`);
console.log('Foods currently in favFoods array:', favFoods);
// QUESTION: When is the appropiate time to use these different methods of console.logging
