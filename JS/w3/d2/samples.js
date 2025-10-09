function countdown(n) {
  if (n <= 0) {
    console.log("Done!");
    return;
  }
  console.log(n);
  countdown(n - 1);
}

countdown(5);
// 5
// 4
// 3
// 2
// 1
// Done!
//🔍 Shows the basic recursive pattern: base case + recursive step.

//🔢 2. Factorial

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
//Demonstrates how recursion can replace a loop that multiplies numbers down to 1.

//🧮 3. Sum of an array

function sumArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([3, 5, 7])); // 15
//Introduces recursion on arrays by slicing smaller and smaller parts.

//🔁 4. Flatten nested arrays

function flatten(arr) {
  let result = [];
  for (const el of arr) {
    if (Array.isArray(el)) {
      result = result.concat(flatten(el));
    } else {
      result.push(el);
    }
  }
  return result;
}

console.log(flatten([1, [2, [3, 4], 5]]));
// [1, 2, 3, 4, 5]
//Shows recursion + iteration together — a common real-world pattern.

//🌳 5. Print all values in a nested object

function printValues(obj) {
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === "object" && value !== null) {
      printValues(value);
    } else {
      console.log(value);
    }
  }
}

const data = {
  name: "Alice",
  address: { city: "Paris", zip: 75000 },
  hobbies: ["art", "cycling"]
};

printValues(data);
// Alice
// Paris
// 75000
// art
// cycling
//Great example for recursion on objects / trees — helps students see how data traversal works.

//🧠 6. Fibonacci sequence (inefficient version)

function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(6)); // 8
//Perfect for showing why recursion can be expensive and how overlapping calls explode.