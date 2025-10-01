class Human {
    constructor(name){
        this.name = name
    }

    sayHi(){
        console.log(`Hi, my name is ${this.name}`)
    }
}

class SuperHuman extends Human {
    constructor(name, age){
        super(name);
        this.age = age;
    }

    fly(){
        console.log("I am flying!")
    }
}

class Amphibia extends SuperHuman {
    constructor(name, age, limbsCount){
        super(name, age);
        this.limbsCount = limbsCount;
    }
    swim(){
        console.log("I am swimming!!!")
    }
}

// function Human(name){
    
// }

const human1 = new Human("Alex");
const human2 = new SuperHuman("Igor")
const froggy = new Amphibia("Froggy", 1, 4)
froggy.sayHi();
froggy.fly();
froggy.swim();
// console.log(human1.name)