async function greet(){
    return "Hello world"
}
greet().then(console.log);

async function getNumber(){
    let num = await Promise.resolve(10);
    console.log(num);
}
getNumber();
async function fetchData(){
    let user = await Promise.resolve("User Data");
    let posts = await Promise.resolve("Posts Data");
    console.log(user, posts)
}
fetchData();

async function loopExample(){
    for(let i = 1; i <= 3; i++){
        let val = await Promise.resolve(i * 2);
        console.log(val)
    }
}
loopExample();

async function errorHandling(){
    try{
        let res = await Promise.reject("Something went wrong");
        console.log(res)
    }catch(err){
        console.error(err)
    }
}
errorHandling();

// async function getAPIData(){
//     let data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then(res => res.json());
//     console.log(data)
// }
// getAPIData();

async function one() { return 42;}
async function two() {
    let result = await one();
    console.log(result)
}
two()

function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}
async function delayMessage(){
    await delay(1000);
    console.log("Waited 1 second")
}
delayMessage();

async function parallelExample(){
    let [a, b] = await Promise.all([
        Promise.resolve("A"), Promise.resolve("B")
    ]);
    console.log(a, b)
}
parallelExample();

async function sequential(){
    console.log("Sequential");
    await delay(1000);
    await delay(1000);
    console.log("Sequential")
}
async function parallel() {
    console.time("Parallel");
    await Promise.all([delay(1000), delay(1000)]);
    console.timeEnd("Parallel")
}
sequential();
parallel();

async function mapAwait(){
    let arr = [1, 2, 3];
    let doubled = await Promise.all(arr.map(async num => num * 2));
    console.log(doubled);
    
}

mapAwait();

async function conditionalAwait(flag){
    let data = flag
    ? await Promise.resolve("Flag if true")
    : await Promise.resolve("Flag is false")
    console.log(data)
}
conditionalAwait(true);

async function sumNumbers(){
    let nums = [1, 2, 3, 4, 5];
    let sum = await nums.reduce(async (acc, val) =>{
        return (await acc) + val
    }, Promise.resolve(0) );
    console.log(sum)
}
sumNumbers();

let funcs = [
    async()=> "First",
    async() => "second"
]
async function runFuncs(){
    for(let fn of funcs){
        console.log(await fn())
    }
}
runFuncs();

(async function(){
    console.log(await Promise.resolve("Hello from IIFE"))
})();

async function raceExample(){
    let fastest = await Promise.race([
        delay(500).then(() => "500ms"),
        delay(300).then(() => "300ms")
    ])
    console.log(fastest)
}
raceExample();

async function outer(){
    async function inner(){
        return "Inner result"
    }
    console.log(await inner())
}
outer();

async function outer(){
    async function inner(){
        return "Inner result"
    }
    console.log(await inner())
}
outer();

async function badExample(){
    await Promise.reject("Oops")
}
badExample().catch(console.error);

async function step1() { return "Step 1"}
async function step2(){ return "Step 2"}
async function runSteps(){
    console.log(await step1())
    console.log(await step2())
}
runSteps();

async function parseJSON(){
    let jsonString = '{"name": "John"}';
    let obj = await JSON.parse(jsonString);
    console.log(obj.name)
}
parseJSON();

async function promiseAllError(){
    try{
        await Promise.all([
            Promise.resolve("OK"),
            Promise.reject("Error!")
        ])
    }catch(e){
        console.error(e)
    }
}
promiseAllError();

async function apiChain(){
    let user = await fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(r => r.json());
    let posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
    .then(r => r.json())
    console.log(user.name, posts.length)
}
apiChain();

async function forOfExample(){
    let arr = [1, 2, 3];
    for(let num of arr){
        console.log(await Promise.resolve(num * 10))
    }
}
forOfExample();

class MyClass{
    async getValue(){
        return 99
    }
}
let obj = new MyClass();
obj.getValue().then(console.log);

async function countDown(n){
    if(n <= 0) return;
    console.log(n);
    await delay(500);
    await countDown(n -1)
}
countDown(3)