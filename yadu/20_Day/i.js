let arr = [];
console.log(arr);

arr.push(1, 2, 3, 4, 5);
console.log(arr);

arr.pop()
console.log(arr);

arr.unshift(0)
console.log(arr);

arr.shift()
console.log(arr);

console.log(arr.length);

arr[1] = 10
console.log(arr);

let arr2 = [6, 7, 8, 9];
console.log(arr.concat(arr2));

console.log([...arr, ...arr2]);

for(let i = 0; i < arr.length; i++) console.log(arr[i]);

arr.forEach(el => console.log(el))

console.log(arr.map(el => el* 2));

console.log(arr.filter(el => el % 2 === 0))

console.log(arr.reduce((sum, el) => sum+el), 0);

console.log(arr.find(el => el>10));

console.log(arr.some(el => el > 5));

console.log(arr.every(el => el > 0));


let reversed = [];
for(let i = arr.length-1; i>=0;i--) reversed.push(arr[i])
console.log(reversed);

console.log([...arr].sort((a,b) => a-b));

console.log([...arr].sort((a, b) => b-a));

let dupArr = [1,2, 2, 3, 3, 3];
console.log([...new Set(dupArr)]);

let nested = [1, [2, 3], 4];
console.log(nested.flat());

let matrix = [[1,2], [3, 4]]
console.log(matrix[1][1]);

console.log(arr.join(","));


let p1 = new Promise((resolve) => setTimeout(() => resolve("Hello"), 1000))
p1.then(console.log)

let p2 = new Promise((_, reject) =>setTimeout(() => reject("Error"), 1000))
p2.catch(console.log)

Promise.resolve(5)
.then(n => n*2)
.then(console.log)

async function asyncExample(){
    let result = await Promise.resolve(10)
    console.log(result);
    
}
asyncExample()

function wait(ms, value){
    return new Promise(resolve => setTimeout(() => resolve(value), ms))
}

async function testWait(){
    let val = await wait(1000, "Done");
    console.log(val);
    
}
testWait();

async function errorExample(){
    try{
        await Promise.reject("Failed")
    }catch(e){
        console.log("Catch: ", e)
    }
}
errorExample()

async function fetchExample(){
    try{
        let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        let data = await res.json();
        console.log(data)
    }catch(e){
        console.log(e)
    }
}

Promise.all([wait(500, 1), wait(1000, 2), wait(1500, 3)]).then(console.log);

Promise.race([wait(500, "first"), wait(1000, "second")]).then(console.log)

let randomPromise = new Promise((res, rej) =>{
    Math.random()>0.5 ? res("Win") : rej("Lose")
})
randomPromise.then(console.log).catch(console.log);

try{
    throw "Oops"
}catch(e){
    console.log("Catch:", e)
}

try{
    throw new Error("Something wrong")
}catch(e){
    console.log(e.message)
}

try{
    null.f()
}catch(e){
    console.log("TypeError:", e.message)
}

try{
    console.log(x)
}catch(e){
    console.log("Reference Error:", e.message)
}

let json = '{"a": 1}';
try{
    let obj = JSON.parse(obj);
    console.log(obj)
}catch(e){
    console.log("JSON error")
};

let invalidJson = '{"a":1';
try{
    JSON.parse(invalidJson)
}catch(e){
    console.log("Catch invalid JSON")
}

function divide(a, b){
    if(b===0) throw new Error("Divide by zero")
    return a/b
}
try{
    console.log(divide(5, 0))
}catch(e){
    console.log(e.message)
}

async function asyncTryCatch(){
    try{
        await Promise.reject("Failed async")
    }catch(e){
        console.log("Caught async arror:", e)
    }
}
asyncTryCatch();

try{
    throw "Error!"
}catch(e){
    console.log(e)
}finally{
    console.log("Finally always runs")
}

try{
    try{
        throw "Inner error"
    }catch(e){
        console.log("Inner catght:", e);
        throw "Outer error"
    }
}catch(e){
    console.log("Outer catch:", e)
}