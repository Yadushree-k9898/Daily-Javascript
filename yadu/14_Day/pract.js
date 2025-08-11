setTimeout(() =>{
    console.log("Runs after 1 seconds");
    
}, 1000)

let count = 0;
const internal = setInterval(() =>{
    count++;
    console.log("Count: ", count);
    if(count === 3) clearInterval(internal)
, 500})

function fetchData(callback){
    setTimeout(() =>{
        callback("Data fethed")
    }, 1000)
}
fetchData((data) => console.log(data));

setTimeout(() => {
    console.log("Step 1");
    setTimeout(() =>{
        console.log("Step 2");
        setTimeout(() =>{
            console.log("Step 3");
            
        }, 1000)
    }, 1000)
}, 1000);

const promise1 = new Promise((resolve) =>{
    setTimeout(() => resolve("Resolved!"), 1000)
})
promise1.then(console.log
);

const promise2 = new Promise((_, reject) =>{
    setTimeout(() => reject("Something went wrong"), 4000)
});

promise2.catch(console.log);

Promise.resolve(1)
.then((num) => num +1)
.then((num) => num + 1)
.then(console.log()
);

Promise.all([
    Promise.resolve("A"),
    Promise.resolve("B"),
    Promise.resolve("C")
]).then(console.log)


Promise.race([
    new Promise((res) => setTimeout(() => res("First"), 500)),
    new Promise((res) => setTimeout(() => res("Second"), 1000))
]).then(console.log)

Promise.allSettled([
    Promise.resolve("Success"),
    Promise.reject("Fail")
]).then(console.log
);

async function exampleAsync(){
return "Hello async"
}
exampleAsync().then(console.log
);

async function getData(){
    let result = await new Promise((res) => setTimeout(() => res("Data here"), 1000));
    console.log(result);
    
}
getData();

async function safeGet(){
    try{
        let  data = await Promise.reject("Error occured");
        console.log(data);
        
    } catch(err){
        console.log("Caugut: ", err);
        
    }
}

safeGet();

console.log("Start");
setTimeout(() => console.log("Timeout"), 0
)
Promise.resolve().then(() => console.log("Promise resolved"))
console.log("End");

const fs = require("fs");
fs.readFile(__filename, "utf8", (err, data) =>{
    if(err) throw err ;
    console.log("File read async :", data.length);
    
});

async function asyncNumbers(){
    const nums = [1, 2, 3];
    for(let num of nums){
        await new Promise((res) => setTimeout(res, 500));
        console.log(num);
        
    }
}
asyncNumbers();

async function sequential(){
    await new Promise((res) => setTimeout(res, 500));
    console.log("First done");
    await new Promise((res) => setTimeout(res, 500));
    console.log("Second done");   
};
sequential();

async function parallel(){
    const p1 = new Promise((res) => setTimeout(() => res("One"), 1000));
    const p2 = new Promise((res) => setTimeout(() => res("Two"), 500));
    const results = await Promise.all([p1, p2]);
    console.log(results);
    
}
parallel();


Promise.resolve("Done")
.then(console.log
).finally(() => console.log("Cleanup complete")
);


async function retryExample(fn, retries = 3){
    for(let i = 0; i < retries; i++){
        try{
            return await fn();

        }catch(err){
            if(i == retries - 1) throw err
        }
    }
}
retryExample(() => Promise.reject("Fail")).catch(console.error
);

async function mix(){
    console.log("Sync first");
    await new Promise((res) => setTimeout(res, 500));
    console.log("Then async");
    
}
mix();

async function delayedLog(msg, delay){
    await new Promise((res) => setTimeout(res, delay));
    console.log(msg);
    
}

delayedLog("Printed after 1s", 1500);

setTimeout(() => console.log("Macrotask"), 0
)

Promise.resolve().then(() => console.log("Microtask")
)