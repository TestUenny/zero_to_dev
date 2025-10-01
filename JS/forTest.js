//  Arrays
// task 1

// ---solution 1

// let arr1 = [1, 2, 3, 5, 8, 9];

// function sumArray(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//         sum += arr[i] 
//     }
//     return sum
// }
// console.log(sumArray(arr1));

// ---solution 2

// let arr2 = [5, 6, 2, 7, 9];

// function sumArray2(arr2){
//     let sum2 = 0;
//     let i = 0;
//     while (i < arr2.length){
//         sum2 += arr2[i];
//         i ++;
//     }
//     return sum2
// }

// console.log(sumArray2(arr2));

// --- solution 3

// let arr3 = [5, 7, 3, 6, 1];

// function sumArray3(arr3){
//     let sum3 = arr3.reduce((a,b) => a + b, 0);
//     return sum3
// }

// console.log(sumArray3(arr3));

// task 2

// solution 1

// let arr = [5, 10, 3, 7, 15, 1];

// function maxMinValues(arr){
//     let max = arr[0];
//     let min = arr[0];
//     for (let i = 1; i < arr.length; i++){
//         if (arr[i] > max){
//             max = arr[i];
//         }
//         if (arr[i] < min){
//             min = arr[i];
//         }
//     }
//     return [max, min]
// }
// console.log(maxMinValues(arr));

// solution 2

// let arr2 = [6, 2, 54, 17, 3, 4, 19, 0, -1];

// function maxMinValues2(arr2){
//     let max = arr2[0];
//     let min = arr2[0];
//     let i = 1;
//     while (i < arr2.length){
//         if (max < arr2[i]){
//             max = arr2[i];
//         }
//         if (min > arr2[i]){
//             min = arr2[i];
//         }
//         i++;
//     }
//     return [max, min]
// }

// console.log(maxMinValues2(arr2));

// solution 3

// let arr3 = [52, 3, 71, -2, 5, 9, 87, 0];

// function maxMinValues3(arr3){
//     let copyArr3 = arr3.slice();
//     copyArr3.sort((a,b) => a - b);
//     return [copyArr3[copyArr3.length - 1], copyArr3[0]]
// }

// console.log(maxMinValues3(arr3));

// task 3

// solution1

// let animals = ["cat", "dog", "cat", "snake", "parrot", "cat"];

// function catCounter(arr){
//     let total = 0;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] === "cat"){
//             total++;
//         }
//     }
//     return total
// }
// console.log(catCounter(animals));

// solution 2 

// let animals2 = ["cat", "dog", "cat", "snake", "parrot", "cat", "cat", "fish"];

// function catCounter2(arr2){
//     let total = 0;
//     let i = 0;
//     while (i < arr2.length){
//         if (arr2[i] === "cat"){
//             total++;
//         }
//         i++;
//     }
//     return total
// }
// console.log(catCounter2(animals2));

// solution 3

// let animals3 = ["cat", "dog", "cat", "snake", "parrot", "cat", "cat", "fish"];

// function catCounter3(arr3){
//     let total = arr3.filter(x => x === "cat");
//     return total.length
// }
// console.log(catCounter3(animals3));

// task 4 

// solution 1

// let numbers = [5, 10, 3, 7, 15, 1];

// function mult(arr){
//     for (let i = 0; i < arr.length; i++){
//         arr[i] *= 2;
//     }
//     return arr
// }

// console.log(mult(numbers));

// solution 2

// let numbers2 = [5, 10, 3, 7, 15, 1];

// function mult2(arr){
//     let i = 0;
//     while (i < arr.length){
//         arr[i] *= 2;
//         i++;
//     }
//     return arr
// }

// console.log(mult2(numbers2));

// solution 3 

// let numbers3 = [5, 10, 3, 7, 15, 1];

// function mult3(arr){
//     let newArray = arr.map(x => x*2);
//     return newArray
// }

// console.log(mult3(numbers3));

//Just practice
//Task 1 Finding the smallest integer in the array

// let arr1 = [5, 1, 2, 0, -1, 10, -5, 0];

// const findSmalestInt = (arr) => {
//     let smalestInt = arr[0];
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (smalestInt > arr[i + 1]) {
//             smalestInt = arr[i + 1];
//         }
//     }
//     return smalestInt;
// }

// console.log(findSmalestInt(arr1));

//-------------------------------new solution with spread operator

// let arr1 = [5, 1, 2, 0, -1, 10, -5, 0];

// const findSmalestArr = (arr) => Math.min(...arr);

// console.log(findSmalestArr(arr1));

//do ... while loop

// let cupsOfSugarNeeded = 5;
// let cupsAdded = 0;

// do {
//   cupsAdded += 1;
//   console.log(cupsAdded);
// } while (cupsAdded < cupsOfSugarNeeded)

// console.log(cupsAdded);


//Task 2 Remove String Spaces
//https://www.codewars.com/kata/57eae20f5500ad98e50002c5

// let str = "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd', '88Bifk8hB8BB8BBBB888chl8BhBfd"
// const noSpase = (x) => {
//     return x.split(" ").join("");
// }

// console.log(noSpase(str));

//Task 3 Counting sheep...
// https://www.codewars.com/kata/54edbc7200b811e956000556

// let herd = [undefined,null,false,true,true,false,null,undefined]

// const countSheeps = (sheep) => {
//     let count = 0; 
//     for (let i = 0; i < sheep.length; i++) {
//         if (sheep[i] === true) {
//             count += 1;
//     }
//   }
//   return count;
// }

// console.log(countSheeps(herd));

// const countSheeps2 = (herd) => herd.filter(Boolean).length;

// console.log(countSheeps2(herd));

//Task 4 Convert a String to a Number!
// https://www.codewars.com/kata/544675c6f971f7399a000e79

// let str = "1356886"

// const stringToNumber = (str) => Number(str);

// console.log(typeof(stringToNumber(str)));
// console.log(stringToNumber(str));

//Task 5 Abbreviate a Two Word Name
// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

// let str = "aline Simnur";

// const converteToInitials = (str) => {
//     let initials = [];
//     let nameToArray = str.toUpperCase().split(" ");
//     // console.log(nameToArray);
//     initials.push(nameToArray[0][0]);
//     initials.push(nameToArray[1][0]);
//     return initials.join(".");
    
// }

// converteToInitials(str);
// console.log(converteToInitials(str));

//09/24/25 Objects

//task 1 create a simple Object

// let student = {};
// student.name = "Daniel";
// student.age = 20;
// student.isStudent = true;
// console.log(student);

// // task 2 Add a Property
// let car = {brand: "Toyota", year: 2020};
// car.color = "red";
// console.log(car);

// // task 3 Loop Through Object
// let user = { 
//     name: "Alice",
//     age: 25,
//     city: "New York"
// };

// const printValues = obj => {
//     const values = Object.values(obj);
//     return values
// }
// console.log(printValues(user));

// // task 4 Count Keys

// let book = {
//     title: "JS Basics",
//     pages: 200,
//     author: "John Doe"
// };
// const countKeys = obj => {
//     const totalKeys = Object.keys(obj);
//     return totalKeys.length;
// }

// console.log(countKeys(book));

// // task 5 Find a Specific Value

// let obj = {
//     a: 10,
//     b: 20,
//     c: 30
// }

// const hasValue = (obj, value) => {
//     const values = Object.values(obj);
//     return console.log(values.includes(value));
// }

// hasValue(obj, 20);
// hasValue(obj, 50);

// // task 6 Object from Array

// const arr = ["a", "b", "c"];

// const arrayToObject = arr => {
//     const obj = {};
//     for (let i = 0; i < arr.length; i++) {
//         obj[i] = arr[i];
//     }
//     return obj;
// }

// console.log(arrayToObject(arr));

// // task 7 Sum All Values
// let scores = {
//     math: 90,
//     english: 80,
//     history: 70
// }
// const sumValues = obj => {
//     let points = Object.values(obj);
//     return console.log(points.reduce((a,b) => a + b, 0));
// }

// sumValues(scores);

// // other problems, task 1 Object with Method

// let calculator = {};
// calculator.sum = ((a, b) => a + b);
// calculator.multiply = ((a, b) => a * b);
// calculator.a = 5;
// calculator.b = 10;

// console.log(calculator.sum(calculator.a, calculator.b));

// //  task 2 Array of Objects

// let students = [
//     {
//         name: "Alice",
//         age: 22
//     },
//     {
//         name: "Bob",
//         age: 20
//     },
//     {
//         name: "Charlie",
//         age: 23
//     }
// ];
// const getNames = arr => {
//     let names = [];
//     for (let i = 0; i < arr.length; i++) {
//         names.push(arr[i].name);
//     }
//     return names;
// }
// console.log(getNames(students));

// // task 3 Average Age

// const getAverageAge = arr => {
//     let ages = [];
//     for (let i = 0; i < arr.length; i++) {
//         ages.push(arr[i].age);
//     }
//     return Math.round(ages.reduce((a, b) => a + b, 0)/ages.length);
// }

// console.log(getAverageAge(students));

// // task 4 Nested Object

// let userObj = {
//     name: "Najia",
//     address: {
//         city: "Fremont",
//         zip: 94538
//     }
// }

// const getCity = obj => {
//     return obj.address.city;
// }

// console.log(getCity(userObj));

// // task 5 Deep Update

// const changeZip = (obj, newZip) => {
//     obj.address.zip = newZip;
//     return obj.address;
// }

// console.log(changeZip(userObj, 94540));

// // task 6 Find by Value in Array of Objects

// const findStudentByName = (arr, name) => {
//     let names = getNames(arr);
//     if (names.includes(name)) {
//         return arr[names.indexOf(name)];
//     } else {
//         return "Student not found";
//     }
// }

// console.log(findStudentByName(students, "Bob"));


// 29/09/25 Classes

// task 1 Class person

class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `Hi, my name is ${this.name}, and I am ${this.age} years old.`
    }
    
}

const me = new Person("Karl", 35);
console.log(me.introduce());

// task 2

class Rectangle {
    constructor (width, height) {
        this.width = width;
        this.heigth = height;
    }
    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return this.width * 2 + this.height * 2;
    }
}

const rectangle1 = new Rectangle(3, 2);
console.log(rectangle1.getArea());
console.log(rectangle1.getPerimeter());

// task 3 

class Animal {
    constructor (species) {
        this.species = species;
    }
    makeSound() {
        return "Some generic sound"; 
    }
}

const dog = new Animal("dog");
const cat = new Animal("cat");
console.log(dog.makeSound());
console.log(cat.makeSound());

// task 4

class Car {
    constructor (brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getInfo() {
        return `${this.brand} ${this.model} (${this.year})`;
    }
}

const car1 = new Car("Lexus", "UX", 2018);
console.log(car1.getInfo());

// task 5 

class Book {
    constructor (title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        return `"${this.title}" by ${this.author}, published in ${this.year}.`
    }
}

const lotr = new Book("Lord of the rings", "J. R. R. Tolkien", 1949);
console.log(lotr.getSummary());