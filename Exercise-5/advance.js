// Define the getLength function
function getLength(value) {
    return value.length;
}
// Test with a string and an array
var strLength = getLength("Hello, TypeScript!");
console.log("String Length:", strLength); // Output: 18
var arrayLength = getLength([1, 2, 3, 4, 5]);
console.log("Array Length:", arrayLength); // Output: 5
