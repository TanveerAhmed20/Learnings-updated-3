class Vehicle {
constructor(Vname,company){

    this.Vname = Vname;
    this.company = company;
}

}

class Bike extends Vehicle{
    constructor(Vname,company)
    {
        super(Vname,company);
        this.type = "Bike";
    }
}


class Car extends Vehicle{
    constructor(Vname,Company)
    {
        super(Vname,Company);
        this.type = "Car";
    }

}

let v1  = new Car("alto","maruti");
let v2 = new Bike("Ninja 300","kawasaki");

console.log(`v1 is a ${v1.type} company : ${v1.company}  name ${v1.Vname}:`)
console.log(`v2 is a ${v2.type} company : ${v2.company}  name ${v2.Vname}:`)

