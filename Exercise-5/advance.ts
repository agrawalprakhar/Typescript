// Define a union type for string or array
type StringOrArray = string | any[];

// Define the getLength function
function getLength(value: StringOrArray): number {
    return value.length;
}

// Test with a string and an array
const strLength = getLength("Hello, TypeScript!");
console.log("String Length:", strLength);  // Output: 18

const arrayLength = getLength([1, 2, 3, 4, 5]);
console.log("Array Length:", arrayLength);  // Output: 5
