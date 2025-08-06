function sumUpTo(n){
    let sum = 0;
    for(let i = 0; i <=n ; i++){
        sum += i
    }
    console.log(sum);
    
    
}

console.log(sumUpTo(10));



function printAll(str){
    for(let char of str){
        console.log(char);
        
    }
}

console.log(printAll('yadushree'));


function printEven(n){
    let i = 1;
    while(i <=n){
        if(i % 2=== 0){
            console.log(i);
            
        }
        i++
    }
}

console.log(printEven(10));


const nums = [1, 2, 3, 4, 5];

nums.forEach(num =>{
   console.log( num * 2);
   
})


function reverseString(str){
    let reversed = "";
    for(let i = str.length -1; i >= 0; i--){
        reversed += str[i];
    }
    console.log(reversed);
    
}

console.log(reverseString('yadushree'));



function greet(name){
    return "Hello, " + name + "!"
}


console.log(greet('yadu'));


const square = (num) => num * num;
console.log(square(4));



function processData(data, callback){
    console.log("Processing: ", data);
    callback(data)
}

console.log("Task", function(item){
    console.log("Call back is done:", item);
    
});




(function hello(){
    console.log("Hello there");
    
})();


for(let i = 1; i <= 5; i++){
   console.log(i);
   
}


function factorial(n){
    let result = 1;
    for(let i = 1; i <=n ; i++){
        result *= i
    }
    return result
}


console.log(factorial(10));


let sumEven = 0;
for(let i = 1; i <= 10; i++){
    if(i % 2=== 0){
        sumEven += i
    }
    
}

console.log(sumEven);



const colors = ["red", "blue", "yellow"];
for(let i = 0 -1; i < colors.length ; i++){
    console.log(colors[i]);
    
}


for(let i = 1; i <= 10; i++){
    console.log(`7 X ${i} = ${7 * i}`);
    
}


let i = 1;
while(i <=5){
    console.log(i);
    i++
}

let count = 10;
while(count > 0){
    console.log(count);
    count--
}

let num = 12345, sum = 0;
while(num >0){
    sum += num % 10;
    num = Math.floor(num / 10)
}

console.log(sum);


const inputs = ["hello", 'test', 'exit'];
let j = 0;
while(inputs[j] !== 'exit'){
    console.log("User typed:", inputs[j]);
    j++
}

let val = 2;

while(val <=100){
    console.log(val);
    val*=2
}



const fruits = ['apple', 'banana', 'orange'];
for(const fruit of fruits){
    console.log(fruit);
    
}

const numms = [10, 20, 30];

let total = 0;
for(const numm of numms){
    total += numm
}
console.log(total);


for(const char of "hello"){
    console.log(char);
    
}

const names = ['john', 'jane'];
for(let name of names){
    console.log(name.toUpperCase());
    
}


for(let fruit of fruits){
    if(fruit === 'banana'){
        console.log("Found banana");
        
    }
}


[1, 2, 3].forEach(num => console.log(num*num)
)

const cities = ['delhi', 'mumbai'];
cities.forEach(city => console.log(city.toUpperCase())
)

let eventCount = 0;
[1, 2, 3, 4, 5, 6].forEach(n =>{
    if(n % 2 ===0) eventCount++
})

console.log(eventCount);


[5, 10, 15].forEach(n => console.log(n + 10))


function add(a, b){
    return a +b
}

console.log(add(10, 20));


function isEven(n){
    return n % 2 === 0
}
console.log(isEven(12));


function isReverse(str){
    return str.split('').reverse().join('')
}

console.log(isReverse('yadusree'));


function max(a, b){
    return a > b ? a:b
}

console.log(max(12, 32));


function greet(name){
    console.log("Hello" + name);
    
}

console.log(greet('yadushree'));


const squares = n => n* n 
console.log(squares(100));

const multiply = (a, b) => a*b 

console.log(multiply(2, 5));


const isPositive = num => num > 0

console.log(isPositive(-20));


const firstChar = str => str[0];
console.log(firstChar('yadu'));


const sayHi = name => console.log(`Hi  ${name}`);
console.log(sayHi('yadu'));



function shaowMessage(msg, cb){
    console.log(msg);
    cb()
}
shaowMessage("hello", ()=>console.log("Cb called")
)

function caluculate(a, b, cb){
    const result = a+b;
    cb(result)
}
caluculate(2, 9, res => console.log("Sum is:", res)
)

function filterEven(arr, cb){
    return arr.filter(cb)
}
console.log(filterEven([1, 2, 3, 4, 5], n => n % 2 === 0));


function customMap(arr, cb){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(cb(arr[i]))
    }
    return result
}

console.log(customMap([1, 2, 3],  n=> n* 3));


// function repeatTwice(cb){
//     cb();
//     cb();
// }
// repeatTwice(() => console.log('Called')
// )


(function (){
    console.log("IIFE runs");
    
})()


(function (a, b){
    console.log("Sum:", a+b);
    
})(4, 5)


const result = (function (x){
    return x * x
})(6)

let counts =  10;
(function (){
    let count = 5;
    console.log("IIFE count inside", count);
    
})()
console.log("Glount count", counts);



(()=>{
    console.log("Arrow function called");
    
})()