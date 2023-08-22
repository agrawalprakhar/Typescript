// Define the introduce function
function introduce(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName, " is ").concat(person.age, " years old."));
}
// Create a Person object
var person = {
    firstName: "Prakhar",
    lastName: "Agrawal",
    age: 23
};
// Call the introduce function with the Person object
introduce(person);
