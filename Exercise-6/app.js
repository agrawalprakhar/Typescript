function addNumbers(a, b) {
    return a - b; // Intentional bug: subtract instead of adding
}
var result = addNumbers(5, 10);
console.log("Result:", result);
