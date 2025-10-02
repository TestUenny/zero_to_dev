
// const foo = () => {
//     return 5;
// }

// const bar = x => {
//     return foo() + x;
// }

// const baz = (x,y) => {
//     return y * bar(x)
// }


// console.log("Call stack", baz(3,2));



const wait = (ms, callback) => {
    const now = new Date().getTime()


    while(new Date().getTime() < now + ms){
        // dummy loop that blocks the thread - until the loop is finished execution is not going to continue
    }
    callback();
}


console.log("Begin");
// wait(2000, ()=> console.log("Continue"))
// console.log(2);
console.log("End");


// Get currency exchange rates - success RAW
fetch("https://open.er-api.com/v6/latest/USD").then(data => {
    console.log("RAW Response", data)
}).catch(err => {
    console.log("FETCH FAILED", err)
})

// Get currency exchange rates - reject
fetch("https://thisdomaindoesnotexist.abc").then(data => {
    console.log("RAW Response", data)
}).catch(err => {
    console.log("FETCH FAILED", err)
})


// Callback hell
fetch("https://open.er-api.com/v6/latest/USD").then(data => {
    data.json().then(response => {
        console.log("RESPONSE", response)
    }).catch(err => console.log("2 Promise Err"))
}).catch(err => {
    console.log("FETCH FAILED", err)
})

console.log("THIS WILL BE EXECUTED AFTER PROMISES MADE");
// example of printing Promise
// console.log("result", fetch("https://open.er-api.com/v6/latest/USD"))

const dummyPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("✅ Done after 3 seconds!");
    }, 3000);
  });
}
const dummyFailedPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("We broke our promise!");
    }, 3000);
  });
}


// Old way of promise chaining
// dummyPromise().then(res => console.log(res)).catch(err => console.log("ERR", err))

  const printDummyPromiseResult = async () => { // We are forced to use async, because we have await inside the function
   let result;
    try {    
         result = await dummyPromise(); // this awaits for the Promise to resolve
         console.log(result)
    }catch(e){
         console.log(e)
    }finally{
        console.log("Finally")
    // This will run no matter what
    }
  }
  

    const printDummyPromiseReject = async () => { // We are forced to use async, because we have await inside the function
   let result;
    try {    
         result = await dummyFailedPromise(); // this awaits for the Promise to resolve
         console.log(result)
    }catch(e){
         console.log(e)
    }finally{
        console.log("Finally")
    // This will run no matter what
    }
  }

      const printDummyPromiseRejectNoCatch = async () => { // We are forced to use async, because we have await inside the function
        let result;

         result = await dummyFailedPromise(); // this awaits for the Promise to resolve
         console.log(result)
         console.log(e)
  }

  printDummyPromiseResult()
  printDummyPromiseReject()
  printDummyPromiseRejectNoCatch()