function outer1(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
        
    }
}

const counterA = outer1();
counterA()
counterA()

function greet(name){
    console.log("Hello, " + name);
    
}
greet("yadu");

function makeCounter(start){
    let count = start;
    return function(){
        count++;
        console.log(count);
    }
}

const c1 = makeCounter(0);
const c2 = makeCounter(1000);
c1();
c2();

function multiplier(factor){
    return function (n){
        return n * factor
    }
}
const double = multiplier(2);
console.log(double(5));

function secretBox(){
    let secret = "Shhh!";
    return {
        getSecret: function () { return secret},
        setSecret: function (newSecret) { secret = newSecret}
    }
}

const box = secretBox();
console.log(box.getSecret());
box.setSecret("New secret");
console.log(box.getSecret());

for(var i = 0; i < 3; i++){
    setTimeout(() => console.log("var loop: ", i), 100
    )
}

for(var i = 0; i < 3; i++){
    (function(j){
        setTimeout(() => console.log("IIFE LOOP: ", j), 100        )
    })(i)
};

function person(name){
    let age = 0;
    return {
        grow: () => {age++},
        getInfo: () => console.log(`${name} is ${age} years old`)
        
    }
}

person("John");

function counter(start = 0){
    let value = start;
    return () => ++value
}

console.log(counter(5));

function outerMost(){
    let outerVar = "Outer";
    function outer(){
        let innerVar = "Inner";
        return function innerMost(){
            console.log(outerVar, innerVar );
            
        }
    }
    return outer()
}
outerMost()();

function runTwice(fn){
    fn();
    fn()
}

runTwice(()=> console.log("Closure in action")
);

function memoizedAdd(){
    let cache = {};
    return function(n){
        if(n in cache){
            console.log("From cache: ", cache[n]);
            return cache[n]
        }

        console.log("calculating...");
        cache[n] = n + 10;
        return cache[n]
    }
}

const add = memoizedAdd();
console.log(add(5));
console.log(add(5));


function createCounter(){
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => count--,
        get: () => count
    }
}

const myCounter = createCounter();
myCounter.increment();
console.log(myCounter.get());


// function setUpButton(){
//     let clicks = 0;
//     document.getElementsByName("btn").addEventListener("click", function(){
//         clicks++;
//         console.log("Clicked", clicks, "times");
        
//     })
// }


function adder(x){
    return function(y){
        return x + y
    }
}

const add10 = adder(10);
console.log(add10(5));

const Module = (function (){
    let privateVar = "secret";
    return {
        getVar: () => privateVar
    }
})();

console.log(Module.getVar());


// function timer(){
//     let time = 0;
//     setInterval(() =>{
//         time++;
//         console.log(time);
        
//     }, 1000)
// }

// timer();



function once(fn){
    let called = false;
    return function (...args){
        if(!called){
            called = true;
            return fn(...args)
        }
    }
}

const sayHi = once(() => console.log('Hi'));
sayHi();
sayHi();

function idGenerator(){
    let id = 0;
    return () => ++id
}

const getId = idGenerator();
console.log(getId());
console.log(getId());
console.log(getId());


function curryAdd(a){
    return function(b){
        return function(c){
            return a + b +c
        }
    }
}

console.log(curryAdd(1)(2)(3));


function delayedMessage(msg, delay){
    setTimeout(() =>{
        console.log(msg);
        
    }, delay)
}

delayedMessage("Hello after 1s", 1000);

function asyncCounter(){
    let count = 0;
    return () =>{
        setTimeout(() =>{
            count++;
            console.log(count);
            
        }, 500)
    }
}

const acc = asyncCounter()
acc()
acc();

function makeRecursion(){
    let calls = 0;
    function recurse(n){
        if(n <= 0) return;
        calls++;
        recurse(n - 1)
    }
    return {
        run: (n) => recurse(n),
        getCalls: () => calls
    }
} 

const r = makeRecursion();
r.run(5);
console.log("Calls:", r.getCalls());


function compose(f, g){
    return function(x){
        return f(g(x))
    }
}

const add2 = (n) => n + 2;
const square = (n) => n * n ;
const add2ThenSquare = compose(square, add2);
console.log(add2ThenSquare(3));
