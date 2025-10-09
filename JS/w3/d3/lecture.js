class Animal {
    constructor(type){
       this.type = type
    }

    walk(){
        console.log("I am walking")
    }
}

class Cat extends Animal {
    constructor(type, name){
       super(type)
       this.name = name
    }

}
            
const cat1 = new Cat("Murka");
const cat2 = new Cat("Tom");

let cat3 = {
  purr: function() {
    console.log("meow");
  },
  purrMore: function() {
    for (let i = 0; i < 10; i++) {
      this.purr();
    }
  },
  toString: function(){
    return `I am a Cat`
  }
};

// cat.purr();
// cat.purrMore();
// console.log(cat.toString());

function foo(){
    console.log(this);
}

// foo();
function times(num, fun) {
    //this = glogal object
//const this = globalObject;
  for (let i = 0; i < num; i++) {
    fun(); // call is made "function-style"
    
    // () => fn.apply(context);
 }
}

// The apply() method of Function instances calls this function with a given this value, and arguments provided as an array (or an array-like object).

const cat = {
  age: 5,

  ageOneYear: function() {
    this.age += 1;
  }
};

cat.ageOneYear(); // works
console.log("1", cat)

//closure
const myBind = (fn, context) => { // context = cat = this
  return (...args) => fn.apply(context, ...args);
}

times(10, cat.ageOneYear); // ReferenceError; this.age is not defined
times(10, cat.ageOneYear.bind(cat));

times(10, myBind(cat.ageOneYear, cat));

console.log("2", cat)

const dog = {
  age: 1
}

const crazyMethod = cat.ageOneYear.bind(dog);
crazyMethod();
console.log("3", dog)