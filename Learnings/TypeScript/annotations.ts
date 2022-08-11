//function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
logNumber(11);

// whento use anntation
// 1) function that returns the any type

const json = '{"x":1,"y":1,"z":1}';
const coordinates: { x: number; y: number } = JSON.parse(json);
// JSON.parse converts the value received inside th parse to a primitive type or object type

// 'false' ->> JSON.parse() ->> boolen
// JSON.parse returns any value
console.log(coordinates);

//delayed intialization

let words = ["green", "red", "blue"];
let foundWord: boolean;
foundWord = words.includes("blue");
console.log(foundWord);

//variables whose type cannot be inferred corectly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // bad coding example

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

const subtract = (a: number, b: number): number => a - b;

// subtract returns a number

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = (a: number, b: number): number => a * b;

// VOID and NEVER

const logger = (message: string) => console.log(message); // auto inference
// no need to do logger:(message:string)=>void = (message:string)=>console.log(message);

const throwError = (message: string): void => {
  if (!message) throw new Error(message);
};

const forecast = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

// ANNOTATIONS AROUND OBJECTS
const profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
console.log(lat);
console.log(lng);

/// ARRAYS in typescript

const arr: (string | number)[] = ["str", 1];
const arr2 = [];

//tuples
const pepsi: [string, boolean, number] = ["brown", true, 40];

// long type annotations

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
};

const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}) => {
  console.log(vehicle.name);
  console.log(vehicle.year);
  console.log(vehicle.broken);
};

//Fixing long annotations wit  interface

//FUNCTIONS IN INTERFACE

interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string; // returns a string , with no arguments
}

const newCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return "This is new civic vehicle";
  },
};
const printvehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.name);
  console.log(vehicle.year);
  console.log(vehicle.broken);
};
printvehicle(newCivic);

interface Reportable {
  summary(): string;
}
// code reuse with interface

const drink = {
  color: "brown",
  carbonate: true,
  sugar: 40,
  summary(): string {
    return "This is a drink ";
  },
};

const printSummary = (obj: Reportable) => {
  console.log(obj.summary());
};
console.log(printSummary(drink));
console.log(printSummary(newCivic));

///BUILDING FUNCTIONALITY USING CLASSES
// classes in typescript are different thatn es5 classes  , we have modifiers in case of typescript

class VehicleClass {
  public drive(): void {
    console.log("chugga chugga");
  }
  honk(): void {
    console.log("beep");
  }
}
const vehicle = new VehicleClass();
vehicle.drive();
vehicle.honk();
// Car is overriding drive() function
class Car extends VehicleClass {
  drive(): void {
    console.log("beep");
  }
  honk(): void {
    console.log("beep beep");
  }
}
const v = new Car();
v.honk();
v.drive();

//fields in classes

class Vehicle1 {
  constructor(public color: string) {
    console.log("INSIDE VEHICLE1");
    console.log(color);
  }

  protected honk(): void { // protected can be used by only child component
    console.log("honk");
  }
}
class Car1 extends Vehicle1 {
  constructor(public wheels: number,  color: string) {
    // note if you write public color:string it creates a new color field for the car1 
    // in this case color is the field of the vehicle1 class without the public keyword
    
    super('green');
   
  }
  private drive(): void { //can be accesssed only by the Car1 Class
    console.log("vroom");
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();//function of parent component
  }
}

const c = new Car1(4,'red');
c.startDrivingProcess();
console.log(c.color);
