// Define the introduce function with bugs
function introduces(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName, " is ").concat(person.age, " years old."));
}
// Create a buggy Person object
var p = {
    firstName: "John",
    // lastName: "Doe", // Removed the lastName property
    age: "30" // Changed the age property value to a string
};
introduces(p);
