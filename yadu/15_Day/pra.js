//Function Definitions
function greet(){
    console.log("Hello world");    
}
greet();
function add(a, b){
    console.log(a+b);   
}
add(2, 3);

function multiply(a, b){
    return a * b
}
console.log(multiply(8,9));

function greetUser(user = "Guest"){
    console.log(`Hello, ${user}`);
}
greetUser();
greetUser("Alice");

const sayHi = function(){
    console.log("Hi there");
    
}
sayHi();

const factorial = function fact(n){
    return n <= 1 ? 1: n*fact(n-1)
}
console.log(factorial(5));

function outer(){
    function inner(){
        console.log("Inner Function");
        
    }
    inner()
}
outer()

function makeMultiplier(factor){
    return function(num){
        return num * factor
    }
}

const double = makeMultiplier(2);
console.log(double(8));


function operate(a, b, operation){
    return operation(a, b)
}
console.log(operate(5, 3, multiply));

(function(){
    console.log("IIFE runs immediatly");
    
})();

function countDown(n){
    if(n <= 0) return;
    console.log(n);
    countDown(n - 1)
}
countDown(5)

function sumAll(...numbers){
    return numbers.reduce((acc, val) => acc+val, 0)
}
console.log(sumAll(1, 2, 3, 4 ,5));


function printUser({name, age}){
    console.log(`${name} is ${age} years old`);
    
}
printUser({name: "Bob", age: 30})

function sumArray(arr){
    return arr.reduce((a, b) => a+b, 0)
}
console.log(sumArray([1, 2, 3]));


function greetMultiply(message = "Hi", ...names){
    names.forEach(name => console.log(`${message}, ${name}`)
    )
}


//Function Arrows

const sayHello = () => console.log("Hello");
sayHello();

const addNums = (a, b) => a +b;
console.log(addNums(3, 4));

const square = x => x * x;
console.log(square(5));

const sumThree = (a, b, c) =>{
    const sum = a+b+c
    return sum
}
console.log(sumThree(1, 2, 3));


const makeUser = (name, age) => ({name, age});
console.log(makeUser("Alice", 25));

const greet1 = (name = "Guest") => console.log(`Hello, ${name}`);
greet1();
greet1("Bob");

const nums = [1, 2, 3];
const doubled  = nums.map(n => n* 2);
console.log(doubled);

const evens = nums.filter(n => n % 2 === 0);
console.log(evens);

const sum = nums.reduce((acc, n) =>acc + n, 0);
console.log(sum);

const multiplier = factor => num => num * factor;
console.log(multiplier(3)(4));

nums.forEach(n => console.log(n)
);

const joinWords = (...words) => words.join(" ");
console.log(joinWords("Hello", "world"));

const isPositive = n => n > 0 ? "Positive" : "Negative";
console.log(isPositive(-5));

const obj = {
    name: "Test",
    arrow: () => console.log(this.name),
    normal(){console.log(this.name)
    }
    
}
obj.arrow()
obj.normal()