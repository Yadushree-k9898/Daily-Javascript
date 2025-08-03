//function declaration
function greet(){
    console.log("Hello from js function declaration");
}
greet();


function Hii(){
    console.log("Hii from js function decletartion")
}

Hii();

//function expression


const greets = function (){
    console.log("greetings from Function expression")
}

greets()

const sayHii = function (){
    console.log("Sayong hii from Function expresssions")
}

sayHii()

//arrow functions

const add = (a, b) => a+b;

console.log(add(2, 3))


const  multiply  = ( x, y) => x*y;

console.log(multiply(4, 5));


function multi(x, y){
    return x * y
}

console.log(multi(10, 2));


//defalut params

function greetUser(name = "guest"){
    return `Hello ${name}`
}

console.log(greetUser("Yadushree"));
console.log(greetUser());


function sumAll(...nums){
    return nums.reduce((acc, val) => acc+val, 0)
}

console.log(sumAll(1, 2, 3, 4, 5));



const nums = [1, 2, 3];
function showNums(a, b, c){
    console.log(a, b, c);
    
}
showNums(...nums);


(function (){
    console.log("IIFE executed")
})();


function fetchData(callback){
    setTimeout(()=>{
        callback("Data loaded")
    }, 1000)
}

fetchData(console.log);

function scopeTest(){
    let a = 10;
    console.log(a)
}

scopeTest();

{
    let blockVar = "inside block";
    console.log(blockVar)
}

const globalVar = "I am global";
function showGlobal(){
    console.log(globalVar)
}

showGlobal();


function outer(){
    const name = "lexical";
    function inner(){
        console.log("hello " + name)
    }
    inner()
}

outer();

function counter(){
    let count = 0;

    return function (){
        return count++
    }
}

const increment = counter();
console.log(increment());
console.log(increment());


function secretHolder(secret){
    return {
        getSecret: () =>secret
    }
}

const obj = secretHolder("12345");
console.log(obj.getSecret());


hoisted();
function hoisted(){
    console.log("I am hoisted");
    
}



console.log(x);
var x = 5;


console.log(this);


const person = {
    name: "yadu",
    greet(){
        console.log("hello, " + this.name);
        
    }
}

person.greet();


const arrowObj = {
    name1: "Bob",
    greet: () =>{
        console.log("hi, " + this.name1);
        
    }
}

arrowObj.greet()



function introduce(city){
    console.log(`Hi i'm ${this.name} from ${city}`);
    
}

const user1 = {name: "yadu"};
introduce.call(user1, "karnataka")

introduce.apply(user1, ['mumbai']);

const boundFunc = introduce.bind(user1, "bangalore");
boundFunc();

const createUser = (name, age) =>({name, age});
console.log(createUser("yadu", 23));



function factorial(n){
    if(n <= 1) return 1;
    return n *factorial(n-1)
}

console.log(factorial(6));
