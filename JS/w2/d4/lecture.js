




// let arr = ['a','e','i','a', 'o','u', 'z','y'];

// let vowels = 'aeiou'
// const result = arr.reduce((obj, letter) => {

//   if(vowels.includes(letter)) {
//   if (obj[letter]) {
//     obj[letter]++;
//   } else {
//     obj[letter] = 1;
//   }
// }
//   return obj;
// },{});


// console.log(result);
// let obj2 = {};
// obj2[1] = 1;
// console.log(obj2);
// obj2[1]++
// console.log(obj2);
const makeCounter = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  }
}

// Shows how a function “remembers” variables from its outer scope.
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

function greeter(name) {
  return function(message) {
    console.log(`${name}, ${message}`);
  };
}

const greetAlice = greeter("Alice");
const greetBob = greeter("Bob");
// Good to show how closures can “lock in” arguments for later use.

greetAlice("welcome back!"); // Alice, welcome back!
greetAlice("welcome back again!"); // Alice, welcome back!
greetBob("how are you?");   // Bob, how are you?
greetBob("how was your day?");   // Bob, how are you?


function createBankAccount(owner) {
  let balance = 0;

  return {
    deposit(amount) {
      balance += amount;
      console.log(`${owner}'s balance: $${balance}`);
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        console.log(`${owner} withdrew $${amount}`);
      } else {
        console.log("Insufficient funds!");
      }
    }
  };
}

//Shows how closures simulate private data in JS.

const johnsAccount = createBankAccount("John");
johnsAccount.deposit(100); // John's balance: $100
johnsAccount.withdraw(30); // John withdrew $30

// Make a function that makes requests to different servers.
// the ending of APIs are the same, i.e. http://wal-mart.com/user/update, http://samsclub.com/user/update
//  http://wal-mart.com/item/update,

const constructRequest = domain => {
  return portion => {
    return (
      {
        update: `http://${domain}/${portion}/update`,
        create: `http://${domain}/${portion}/create`,
        delete: `http://${domain}/${portion}/delete`
      }
    )
}
}

// const walmartItem = constructRequest("walmart.com")("item");
// console.log("Wlmt Item", walmartItem)
// const samsclubUser = constructRequest("samsclub.com")("user");
// console.log("sams user", samsclubUser)


function once(fn) {
  let called = false;
  let result;
  return function(...args) {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}

// Demonstrates control flow with closures.

const startEngine = once(() => "Engine started!");
console.log(startEngine()); // Engine started!
console.log(startEngine()); // Engine started! (but function not re-run)
console.log(startEngine()); // Engine started! (but function not re-run)
console.log(startEngine()); // Engine started! (but function not re-run)
console.log(startEngine()); // Engine started! (but function not re-run)
console.log(startEngine()); // Engine started! (but function not re-run)


for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log("var i:", i), 1000);
}
// var i: 4 (three times)

for (let j = 1; j <= 3; j++) {
  setTimeout(() => console.log("let j:", j), 1000);
}
// let j: 1, 2, 3

//Helps explain why closures capture variables, and why let fixes the bug.


function makeClickHandler(buttonName) {
  let count = 0;
  return function() {
    count++;
    console.log(`${buttonName} clicked ${count} times`);
  };
}

const saveHandler = makeClickHandler("Save");
const cancelHandler = makeClickHandler("Cancel");
// Great for connecting closures to the DOM world.
saveHandler(); // Save clicked 1 times
cancelHandler(); // Cancel clicked 1 times
saveHandler(); // Save clicked 2 times