// Working with Maps: A map is used to store key-value pairs where keys can be any type
const studentGrades = new Map();
studentGrades.set("John", 85);
studentGrades.set("Jane", 92);
studentGrades.set("Sam", 78);

// Accessing values in a Map
console.log(studentGrades.get("John")); // Output: 85

// Modifying a value in a Map
studentGrades.set("John", 88);
console.log(studentGrades.get("John")); // Output: 88

// Checking if a key exists in a Map
console.log(studentGrades.has("Sam")); // Output: true

// Getting the number of entries in a Map
console.log(studentGrades.size); // Output: 3

// Deleting and Clearing
// Logging the value of "Sam" before deleting
console.log(`Sam's grade before deletion: ${studentGrades.get("Sam")}`); // Output: Sam's grade before deletion: 78

// Deleting an entry
studentGrades.delete("Sam");
console.log(`Sam's grade after deletion: ${studentGrades.get("Sam")}`); // undefined

// Clearing the Map
console.log(`Student Grades before  clear: ${studentGrades.size}`); // Output: 2
studentGrades.clear();
console.log(`Student Grades after clear: ${studentGrades.size}`); // Output: 0


// Creating a Map with car models and their colors
const carColors = new Map();
carColors.set("Toyota Corolla", "Blue");
carColors.set("Honda Civic", "Red");
carColors.set("Ford Mustang", "Black");

// Iterating over the new Map with forEach
carColors.forEach((color, car) => {
  console.log(`${car}: ${color}`);
});

// Working with Sets: Declare the set before using it
const uniqueNames = new Set();

// Create a Set and adding a value to a Set
console.log(uniqueNames); 
// Now add a Value
uniqueNames.add("David");
console.log(uniqueNames); 

// Converting between Sets and Arrays
const animalsArray = ["dog", "cat", "dog", "bird", "cat"];
const uniqueAnimals = Array.from(new Set(animalsArray));

// Logging the original and unique arrays
console.log(`Animals Array: ${animalsArray}`); // Outputs the full array 
console.log(`UniqueAnimals Array from Set: ${uniqueAnimals}`); // Output: ['dog', 'cat', 'bird']


