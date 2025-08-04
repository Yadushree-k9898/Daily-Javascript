function init(){
    var name = "Mozilla";

    function displayName(){
        console.log(name)
    }
    displayName()
}

init();


if(Math.random() > 0.3){
    var x = 1;
}else{
    var x = 2;
}

console.log(x);


if(Math.random() > 0.5){
    const x = 1
}else{
    const x = 2
}

console.log(x);



function makeFunc(){
    const name = "Mozilla";
    function displayName(){
        console.log(name)
    }
    return displayName
}

const myFunc = makeFunc()
myFunc()


function makeAdder(x){ //factory function 
    return function(y){
        return x +y
    }
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);
console.log(add5(2))
console.log(add10(2));



const counter = (function (){
    let privateCounter = 0;
    function changeBy(val){
        privateCounter += val
    }

    return {
        increment(){
            changeBy(1)
        },
        decrement(){
            changeBy(-1)
        },
        value(){
            return privateCounter
        }
    }
})();

console.log(counter.value());

counter.increment();
counter.increment();
console.log(counter.value());


counter.decrement();
console.log(counter.value());



//clousure scope chaining

const e = 10;

function sum(a){
    return function (b){
        return function (c){
            return function(d){
                return a +b + c+d+e
            }
        }
    }
}

console.log(sum(1)(2)(3)(4));

const e1 = 10;
function summ(a){
    return function sum2(b){
        return function sum3(c){
            return function sum4(d){
                return a +b+c+d+e
            }
        }
    }
}


const sum2 = summ(1);
const sum3 = sum2(2);
const sum4 = sum3(3)
const result = sum4(4);
console.log(result);



function outer(){
    let getY;
    {
        const y = 6;
        getY = () => y;

    }
    console.log(typeof y);
    console.log(getY());
    
    
}

outer()


let x1 = 5;

export const getX = () => x1;
export const setX = (val) =>{
    x1 = val
}



function createCounter(){
    let count = 0;
    return function (){
        count++;
        return count
    }
   
   
}



const counter1 = createCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());


function secretHolder(secret){
    return {
        getSecret: () => secret,
        changeSecret: (newSecret) => {secret = newSecret;}
    };
}


const holder = secretHolder("top secret");
console.log(holder.getSecret());
holder.changeSecret("new secret");
console.log(holder.getSecret());


function multiplier(factor){
    return function (number){
        return number * factor
    }
}

const double = multiplier(2)
const triple = multiplier(3);

console.log(double(5));
console.log(triple(5));



function outerr(){
    const message = "Hello from outer!";
    function inner(){
        console.log(message);
        
    }
    return inner
}

const greet = outerr()
greet();


function once(fn){
    let called = false;
    let result;
    return function (...args){
        if(!called){
            result = fn(...args);
            called = true;
        }
        return result
    }
}

const initt = once(() => console.log("initialized")
)
initt()
initt()


for(var i = 1; i <= 3; i++){
    setTimeout(function(){
        console.log("var i:", i);
        
    }, i * 1000)
}

for(let i = 1; i <= 3; i++){
    setTimeout(function(){
        console.log("let i:", i);
        
    }, i * 1000)
};


function add1(a){
    return function (b){
        return a + b;
    }
}

console.log(add1(5)(3));
const add11 = add1(11) 
console.log(add11(2));



function createLogger(prefix){
    return function(message){
        console.log(`[${prefix}]: ${message}`);
        
    }
}

const errorLogger = createLogger("Error");
const infoLogger = createLogger("INFO");

errorLogger("Something went wrong");
infoLogger("App started")


function createCounter1(){
    let count = 0;

    return{
        increment: () => ++ count,
        decrement: () =>--count,
        reset: () =>{
            count = 0;
            return count
        },
        getValue: () => count
    }
}


const counter11 = createCounter1() 
const counter22 = createCounter1();

console.log(counter11.increment());
console.log(counter11.increment());
console.log(counter11.increment());
console.log(counter11.decrement());
console.log(counter11.decrement());
console.log(counter11.decrement());

console.log(counter11.reset());

console.log(counter22.increment());


function secretHolder1(secret, limit = 3){
    let changeCount = 0;

    return {
        getSecret: () => secret,
        changeSecret: (newSecret) =>{
            if(changeCount < limit){
                secret = newSecret;
                changeCount++;
                return true
            } else{
                return false
            }
        },
        resetSecret : () =>{
            secret = null;
            changeCount  = 0;

        }
    }
}


const sh = secretHolder1("initial");
console.log(sh.getSecret());
sh.changeSecret("secret1");
sh.changeSecret("secret2");
sh.changeSecret("secret3");
console.log(sh.changeSecret("nope"));
sh.resetSecret();
console.log(sh.getSecret());



function adder(base){
    return function (num){
        return base + num
    }
}


const adds5 = adder(5);
console.log(adds5(10));



function power(base){
    return function (exp){
        return base ** exp
    }
}

const powerOf2 = power(2)
console.log(powerOf2(3));


//curried functions

function greets(name){
    return function(message){
        return `Hi ${name}, ${message}`
    }
}

const greetYadu = greets("Yadu");
console.log(greetYadu("Hope you are doing well!"));


function discount(percent){
    return function (price){
        return price - (price * (percent / 100))
    }
}

const tenOff = discount(10);
console.log(tenOff(100));



function createLoggers(level = "INFO"){
    const levels = ["DEBUG", "INFO", "WARN", "ERROR"];

    return function log(message, msgLevel = "INFO"){
        if(levels.indexOf(msgLevel) >=levels.indexOf(level)){
            const timestamp = new Date().toISOString();
            console.log(`[${timestamp}] [${msgLevel}] ${message}`);
            
        }
    }
}

const logger = createLoggers("INFO");

logger("This is info");
logger("THis is debug", 'DEBUG');
logger("This is important", "ERROR")