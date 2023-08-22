var Car = /** @class */ (function () {
    // Constructor
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Method to display car info
    Car.prototype.displayCarInfo = function () {
        console.log("".concat(this.make, " ").concat(this.model, " (").concat(this.year, ")"));
    };
    return Car;
}());
// Create a Car object
var myCar = new Car("Toyota", "Camry", 2022);
// Call the displayCarInfo method
myCar.displayCarInfo();
