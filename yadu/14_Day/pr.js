//Currying is breaking down a function that takes multiple arguments into a sequence of functions that each take one argument.

const add = a => b =>  a + b
console.log(add(2)(3));

const multiply = a => b => a * b;
console.log(multiply(2)(9));

const greet = (geeting) => name => `${greeting}, ${name}`
// console.log(greet("hello")("john"));

const volume = l => w => h => l * w* h;
console.log(volume(2)(3)(4));

const power = exp => num => Math.pow(num, exp);
console.log(power(3)(2));

const formatCurrency = symbol => amount => `${symbol}${amount}`
console.log(formatCurrency("$")(100));

const isGreater = a => b => b > a;
console.log(isGreater(10)(15));

const filterBy = key => value => arr => arr.filter(obj => obj[key] === value);
const users = [{name: "A", role:"ADMIN"}, {name: "B", role:"user"}];
console.log(filterBy("role")("admin")(users));

const addTax = rate => price => price + (price * rate);
console.log(addTax(0.1)(100));

const chain = a => b => c => `${a}-${b}-${c}`;
console.log(chain("A")("B")("C"));

//Partial application fixes some arguments of a function, returning another function.

const multiply1 = (a, b) => a * b;
const doulble1 = multiply1.bind(null, 2);
console.log(doulble1(6));


const greet1 = (greeting, name) => `${greeting}, ${name}`;
const sayHello1 = greet1.bind(null, "Hello");
console.log(sayHello1("John"));

const discount = (rate, price) => price - (price * rate);
const tenPercentOff = discount.bind(null, 0.1);
console.log(tenPercentOff(200));

const formatCurrency1  = (symbol, amount) => `${symbol}${amount}`;
const formatUSD = formatCurrency1.bind(null, "$");
console.log(formatUSD(50));


const volume1 = (l, w, h) => l * w* h;
const base10Volumea = volume1.bind(null, 10);
console.log(base10Volumea(2, 3));


const log = (level, message) => `[${level}] ${message}`;
const errorLog = log.bind(null, "ERROR");
console.log(errorLog("Something went wrong"));

const bindUrl = (protocol, domain, path) => `${protocol}://${domain}/${path}`;
const buildHttps = bindUrl.bind(null, "https");
console.log(buildHttps("example.com", "about"));


const pow = (base, exponent) => Math.pow(base, exponent);
const square = pow.bind(null, undefined, 2);
console.log(pow(3, 2));


const tax = (rate, amount) => amount + (amount * rate);
const gst = tax.bind(null, 0.18);
console.log(gst(100));

const appendExt = (ext, filename) => `${filename}.${ext}`;
const appendJS = appendExt.bind(null, "js");
console.log(appendJS("script"));


function greet2(name){
    return function(message){
        return `${message} , ${name}`
    }
}
console.log(greet2("Yadu")("Hello"));


const nums = [1, 2, 3];
console.log(nums.map(n => n * 2));

console.log(nums.filter(n => n > 1));

console.log(nums.reduce((sum, n ) => sum + n, 0));

console.log(nums.sort((a, b) => b - a));

function repeat(fn, times){
    return () => {for(let i = 0; i < times; i++) fn();}
}
repeat(() => console.log("Hello"),3
)();

function withDay(fn, delay){
    return (...args) => setTimeout(() => fn(...args), delay)
}
withDay(msg => console.log(msg), 1000
)("Hi after 1s");

function logger(fn){
    return (...args) => {
        console.log("Arguments:", args);
        return fn(...args)
    }
}
const sum = logger((a, b) => a+b);
console.log(sum(2, 4));

function once(fn){
    let called = false;
    return (...args) => {
        if(!called){
            called = true;
            return fn(...args)
        }
    }
}
const runOnce = once(() => console.log("Run only once")
)
runOnce();
runOnce();

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const double = x => x * 2;
const increment = x => x + 1;
console.log(pipe(double, increment)(3));


//Memoization caches results for better performance.

function memoize(fn){
    const cache = {};
    return (...args) =>{
        const key  = JSON.stringify(args);
        if(cache[key]) return cache[key];
        cache[key] = fn(...args);
        return cache[key]
    }
};

const slowSquare = n =>{
    console.log("Calculating...");
    return n * n
}

const memoSquare = memoize(slowSquare);
console.log(memoize(5));
console.log(memoize(10));

const factorial = memoize( n => (n <= 1? 1: n * factorial(n -1)));
console.log(factorial(5));

const fibbonacci = memoize(n => (n <= 1 ? n: fibbonacci(n- 1) + fibbonacci(n-2)));
console.log(fibbonacci(10));


const isPrime = memoize(num => {
    if(num < 2) return false;
    for(let i = 2; i <=Math.sqrt(num); i++) if(num % i === 0) return false;
    return true
});

console.log(isPrime(97));


const randomSeed = memoize(seed => seed * 42);
console.log(randomSeed(10));

const fakeFetch = memoize(url => `Fetched: ${url}`);
console.log(fakeFetch("api/data"));
console.log(fakeFetch("api/data"));


const reversed = memoize(str => str.split("").reverse().join(""));
console.log(reversed("hello"));


const pow1 = memoize((a, b) => Math.pow(a, b));
console.log(pow1(2, 10));

const sortArr = memoize(arr => [...arr].sort((a, b) => a -b))
console.log(sortArr([3, 1, 2]));


const getUser = memoize(id => `User ${id}`);
console.log(getUser(5));
