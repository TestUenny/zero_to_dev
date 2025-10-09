const countDown = num => {
    // base case
    if(num <= 0){
        console.log("end")
        return;
    }
    console.log(num);
    // recursive step
    countDown(num - 1);
}

// countDown(10);

//5! = 5 * 4 * 3 * 2 * 1

const factorial = num => {
    // base case
    if(num === 1){
       return num; 
    }
    // recursive step
    return num * factorial(num - 1)
}

// console.log(factorial(5)); // 120

// [5,3,7] => 5+3+7
const sumArray = arrOfNum => {
    if(arrOfNum.length === 1){
        return arrOfNum[0];
    }
    const [num, ...rest] = arrOfNum;     // const [num1, num2, num3] = [5,3,7]
           //[5 | 3,7]        [3,7]     //[5,3,7]
    return num + sumArray([...rest])
}

// console.log(sumArray([3, 5, 7])); // 15

const flatten = arr => {
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


// console.log(flatten([1, [2, [3, 4], 5], 6]));
// [1, 2, 3, 4, 5, 6]

const printValues = input => {
    let result = [];
  
        if(typeof input === "object" && !Array.isArray(input)){
            result = result.concat(...printValues(Object.values(input)))
        }else if(Array.isArray(input)){
            result = result.concat(...input.map(el => printValues(el)));
        }else{
            result.push(input);
        }
 
    return result;
}

const data = {
  name: "Alice",
  address: { city: "Paris", zip: 75000 },
  hobbies: ["art", "cycling"]
};
// console.log(printValues(data))

// 0, 1, 1, 2, 3, 5,    8, 13,
const fib = length => {
    if(length === 0){
        return 0;
    }
    if(length === 1){
        return 1;
    }
    return fib(length - 1) + fib(length - 2) 
    // fib(5)                                   + fib(4)

    //  fib(4) +               fib(3)           fib(3) +          fib(2)
           // 2                 //1
    // fib(3) +    fib(2)   fib(2)+fib(1)     fib(2)+fib(1)   fib(1) + fib(0)
          // 1  
    //fib(2) + fib(1)   

 }

console.log(fib(6)); // 8
console.log(fib(15)); // 8