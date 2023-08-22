function addNumbers(a: number, b: number): number {
    return a - b; // Intentional bug: subtract instead of adding
}

const result = addNumbers(5, 10);
console.log("Result:", result);
