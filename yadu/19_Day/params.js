function greet(name){
    console.log("Hello " + name);
}
greet("Alice");

function add(a, b){
    return a + b
}
console.log(add(4, 4));

function multiply(a, b = 2){
    return a * b
}
console.log(multiply(5));

function intro(name = "Guest", age= 18){
    return `${name}, ${age}`
}
console.log(intro());

function sumAll(...nums){
    return nums.reduce((a, b) => a + b, 0)
}
console.log(sumAll(1, 2, 3, 4, 5, 6));


function oldStyleSum(){
    let total = 0;
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i]
    }
    return total
}
console.log(oldStyleSum(10, 20, 30));

function displayUser({name, age}){
    console.log(`${name} is ${age} years old`);
    
}
displayUser({name:"Yadu", age:25});

function logCoords([x, y]){
    console.log(`X: ${x}, Y: ${y}`);
    
}
logCoords([10, 20]);

function mix(a, b = 5, ...rest){
    return [a, b, rest]
}
console.log(mix(1, 2, 3, 4,5, 6));

function divide(a, b){
    if(b === 0 ) return "Cannot divide by zero";
    return a / b
}
console.log(divide(10, 0));


function greet2(name){
    if(name === undefined) return "Hello Guest";
    return "Hello " + name
}
console.log(greet2());


function processUser(name, callback){
    callback(name)
}
processUser("Alice", n => console.log("User:", n)
);

function runOperation(a,b, operation){
    return operation(a, b)
}
console.log(runOperation(5, 3, (x, y) => x * y));

function toggle(flag){
    return flag ? "ON" : "OFF"
}
console.log(toggle(true));

function config(settings = {dark: false}){
    return settings.dark ? "Dark Mode" : "Light Mode"
}
console.log(config());

function showLocation({city, coords: {lat, lon}}){
    console.log(`${city}: ${lat}, ${lon}`);
}
showLocation({city: "Paris", coords: {lat: 48.8, lon: 2.3}})

function listItems(items = []){
    return items.length
}
console.log(listItems());

function runTask(task = () => "No task"){
    return task()
}
console.log(runTask());

function printName(name, alias = name){
    return `${name} aka ${alias}`
}
console.log(printName("Alice", "Wonder"));

function concatAll(...words){
    return words.join(" ")
}
console.log(concatAll("JS", "is", "fun"));

function maxNum(a, b, c){
    return Math.max(a, b ,c)
}
console.log(maxNum(...[3, 7, 1]));

function greetUser({name = "Guest", age = 0} = {}){
    return `${name} is ${age} years old`
}
console.log(greetUser());

function say(message = "Default"){
    return message
}
console.log(say(null));

console.log(say(undefined));


function takeTwo(a, b){
    return [a, b]
}
console.log(takeTwo(1, 2, 3, 4, 5));
