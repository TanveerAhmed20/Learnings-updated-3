// program to demonstrate object creation using new operator
// in JS.

function Person(name,scholarid){
    this.name = scholarid,
    this.scholarid = scholarid,
    this.getname = function(){
        console.log("name: " +this.name);
    }
}

const person1 = new Person("tanveer", "1815010");

person1.getname();

console.log(Object.values(person1));