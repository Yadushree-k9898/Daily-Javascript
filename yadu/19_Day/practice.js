function greet(){
    console.log("Hello")
}
greet();

function add(a, b){
    return a + b
}
console.log(add(2, 3));

function multiply(a, b){
    return a *b
}
console.log(multiply(2, 3));

function isEven(num) {
    if(num % 2 === 0) return true;
    return false
}
console.log(isEven(6));

const square = function (x){
    return x * x
}
console.log(square(4));

const factorial = function fact(n){
    return n === 0 ? 1: n * fact(n-1)
}
console.log(factorial(5));

const obj = {
    sayHi: function(){
        return "Hi"
    }
}
console.log(obj.sayHi())

function person(name, age){
    return {name, age}
}
console.log(person("Alice", 22));

function outer(){
    return function inner(){
        return "Inner Function"
    }
}
console.log(outer()());

(function (){
    console.log("IIFE called!")
})();

function sumAll(...nums){
    return nums.reduce((a, b) => a+b, 0)
}
console.log(sumAll(1,2,3,4,5,6));

function oldSum(){
    let total = 0;
    for(let i =0; i <arguments.length; i++){
        total += arguments[i]
    }
    return total
}
console.log(oldSum(1,2,3));

function countDown(n){
    if(n === 0) return;
    console.log(n);
    countDown(n - 1)
}
countDown(5);

function dowork(cb){
    cb();
}
dowork(() => console.log("Work done!")
);

const funcs = [
    function(){
        return 1
    },
    function(){
        return 2
    }
]
console.log(funcs[0]());

function operate(a, b, fn){
    return(a, b)
}
console.log(operate(4, 3, (x, y) => x + y));

function testScope(){
    let x = 10;
    console.log(x)
}
testScope();

hoisted();
function hoisted(){
    console.log("This works because hoisting")
}

try{
    notHoisted()
}catch(e){
    console.log("Error:", e.message)
}
const notHoisted = function(){
    console.log("Not hoisted")
}

setTimeout(function (){
    console.log("Hello after 1s")
}, 1000)

function area({width, height}){
    return width * height
}
console.log(area({width:5, height: 10}));

function mix(a=1, ...others){
    return a+ others.length
}
console.log(mix(10, 20, 30));


function getCoords(){
    return [10, 20]
}
const [x, y] = getCoords();
console.log(x, y);

function Car(make, model){
    this.make = make;
    this.model = model
}
const car1 = new Car("Tesla", "Model 3") ;
console.log(car1);

for(let i = 0; i < 3; i++){
    (function(n){
        console.log("Number:", n)
    })(i)
}