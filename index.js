// Working with Maps: A map is used to store key-value pairs where keys can be any type
const studentGrades = new Map();
studentGrades.set("John", 85);
studentGrades.set("Jane", 92);
studentGrades.set("Sam", 78);

// Accessing values in a Map
console.log(studentGrades.get("Jane")); // Output: 92

// Modifying a value in a Map
studentGrades.set("John", 88);
console.log(studentGrades.get("John")); // Output: 88

// Checking if a key exists in a Map
console.log(studentGrades.has("Sam")); // Output: true

// Getting the number of entries in a Map
console.log(studentGrades.size); // Output: 3

// Iterating over a Map with forEach
studentGrades.forEach((grade, student) => {
  console.log(`${student}: ${grade}`);
});
// Expected Output:
// John: 88
// Jane: 92
// Sam: 78

// Using for...of to iterate over a Map
for (const [student, grade] of studentGrades.entries()) {
  console.log(`${student}: ${grade}`);
}
// Expected Output:
// John: 88
// Jane: 92
// Sam: 78

// Deleting an entry from a Map
studentGrades.delete("Sam");
console.log(studentGrades.size); // Output: 2

// Clearing all entries from a Map
studentGrades.clear();
console.log(studentGrades.size); // Output: 0

// Working with Sets: A set is used to store unique values
const uniqueNames = new Set(["Alice", "Bob", "Charlie", "Bob"]);
console.log(uniqueNames); // Output: Set { 'Alice', 'Bob', 'Charlie' }

// Adding a value to a Set
uniqueNames.add("David");
console.log(uniqueNames.has("David")); // Output: true

// Removing a value from a Set
uniqueNames.delete("Bob");
console.log(uniqueNames); // Output: Set { 'Alice', 'Charlie', 'David' }

// Getting the number of items in a Set
console.log(uniqueNames.size); // Output: 3

// Iterating over a Set using forEach
uniqueNames.forEach((name) => {
  console.log(name);
});
// Expected Output:
// Alice
// Charlie
// David

// Using for...of to iterate over a Set
for (const name of uniqueNames) {
  console.log(name);
}
// Expected Output:
// Alice
// Charlie
// David

// Clearing all values from a Set
uniqueNames.clear();
console.log(uniqueNames.size); // Output: 0

// Converting between Sets and Arrays
const animalsArray = ["dog", "cat", "dog", "bird", "cat"];
const uniqueAnimals = Array.from(new Set(animalsArray));
console.log(uniqueAnimals); // Output: ['dog', 'cat', 'bird']

// Converting a Set to an Array
const setToArray = [...uniqueAnimals];
console.log(setToArray); // Output: ['dog', 'cat', 'bird']

// Converting between Objects and Maps
const book = { title: "The Great Gatsby", author: "F. Scott Fitzgerald" };
const bookMap = new Map(Object.entries(book));
console.log(bookMap); // Output: Map { 'title' => 'The Great Gatsby', 'author' => 'F. Scott Fitzgerald' }

const bookObj = Object.fromEntries(bookMap);
console.log(bookObj); // Output: { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
