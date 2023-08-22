interface Person {
    firstName: string;
    // lastName: string; // Removed the lastName property
    age: number; // Changed the age property type to string
}

// Define the introduce function with bugs
function introduces(person: Person): void {
    console.log(`${person.firstName} ${person.lastName} is ${person.age} years old.`);
}
// Create a buggy Person object
const p : Person = {
    firstName: "John",
    lastName: "Doe", // Removed the lastName property
    age: 5// Changed the age property value to a string
};

introduces(p);