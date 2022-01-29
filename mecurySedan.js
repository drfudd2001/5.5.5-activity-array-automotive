//this includes the vehicle class as a module
import Vehicle from "./vehicleBaseClass.js";

//this shows how to call from this module...
// let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
// console.log(v.make)

// Let's create the new class "Car" using the existing vehicleBaseClass ...but with some changes and additions that are specific to this class:
class Car extends Vehicle{
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 6;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 200;
        this.fuel = 100;
        this.scheduleService = false;
    }

    // How about we get some people in the Car?..
        loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;               
            } else {
                console.log(this.model + " " + this.make + " does not have enough space to take all passengers. Tell someone to go for a walk...");
        }
     }else {
         console.log(this.model + " " + this.make + " is at capacity. If someone else get's on; Chef Ramsey will scream: Shut it down!")
     }
   }

   // Now let's go for a drive!
   start() {
        if (this.fuel > 0) {
            console.log("Let's go!");
        } else {
            console.log("Feed me driver. Feed me! Fuel's go what engines crave!");
            return this.started = false;
        }
    }

   scheduleService(mileage) {
    if (this.mileage > 30000) {            
        this.scheduleService == true
        return this.scheduleService;                       
     }
    }
}