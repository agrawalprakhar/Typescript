class Car {
    // Properties
    make: string;
    model: string;
    year: number;

    // Constructor
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Method to display car info
    displayCarInfo(): void {
        console.log(`${this.make} ${this.model} (${this.year})`);
    }
}

// Create a Car object
const myCar = new Car("Toyota", "Camry", 2022);

// Call the displayCarInfo method
myCar.displayCarInfo();
