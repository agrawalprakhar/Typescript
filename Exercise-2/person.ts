// Define the Person interface
interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

// Define the introduce function
function introduce(person: Person): void {
    console.log(`${person.firstName} ${person.lastName} is ${person.age} years old.`);
}

// Create a Person object
const person: Person = {
    firstName: "Prakhar",
    lastName: "Agrawal",
    age: 23
};

// Call the introduce function with the Person object
introduce(person);
