const { before } = require("node:test");

//JS Numbers Basics
let x = 42;
let y = 3.14;
console.log(x, y);
let sci = 5e3;
console.log(sci);
let tiny = 5e-3;
console.log(tiny);
console.log(1/0);
console.log(-1/0);
console.log(0/0);
console.log(typeof NaN);
console.log("100" - 10);
console.log("100" +10);
let hex = 0xff;
console.log(hex);
let binary = 0b1010;
let octal = 0o12;
console.log(binary, octal);

//Number Methods

let num = 255;
console.log(num.toString(2));
console.log(num.toString(16));
let pi = 3.14159;
console.log(pi.toFixed(2));
console.log(pi.toPrecision(3));
console.log(pi.toExponential(2));
let numObj = new Number(123);
console.log(numObj.valueOf());
console.log(Number("123"));
console.log(parseInt("101", 2));
console.log(parseFloat("3.14"));
console.log(isNaN("Hello"));
console.log(isFinite(100));
console.log(isFinite(Infinity));

//Number Properties

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);
console.log(Number.EPSILON);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.isSafeInteger(1234567890));
console.log(Number.isInteger(3.5));

//Math Object Basics

console.log(Math.PI);
console.log(Math.round(4.9));
console.log(Math.floor(4.6));
console.log(Math.ceil(4.1));
console.log(Math.trunc(4.9));
console.log(Math.sign(-5));
console.log(Math.abs(-7));
console.log(Math.sqrt(16));
console.log(Math.cbrt(27));
console.log(Math.pow(2, 3));

//Math Advanced

console.log(Math.min(5, 2, -9));
console.log(Math.max(5, 2, -9));
console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.log(1));
console.log(Math.log10(100));
console.log(Math.sin(Math.PI / 2));
console.log(Math.cos(0));
console.log(Math.tan(Math.pI / 4));

function degToRad(deg){
    return deg * (Math.PI / 180)
}
console.log(degToRad(180));

//Operator Practice

let a = 10, b = 3;
console.log(a+b, a-b, a *b, a/b, a%b, a ** b);
let value = 5;
value += 3
console.log(value);
console.log(5 > 3);
console.log(5 === "5");
console.log( true && false);
console.log(true || false);
let age = 20;
let type = age >= 18 ? "Adult" : "Minor";
console.log(type);
console.log(5 + 3 * 2);
let c = 5;
console.log(++c);
console.log(c--);
console.log(5 & 1);
console.log(5 | 1);
console.log(5 ^ 1);
let num1 = 255;
console.log(num1.toFixed(16));
let price = 9.876;
console.log(price.toFixed(2));
let pi1 = 3.14159;
console.log(pi1.toPrecision(4));
let big = 123456;
console.log(big.toExponential(3));
let numObj1 = new Number(123);
console.log(numObj1.valueOf());
console.log(Number("123"));
console.log(parseInt("101", 2));
console.log(parseFloat("3.14abc"));
console.log(isNaN("hello"));
console.log(isFinite(100));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);
console.log(Number.EPSILON);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.isSafeInteger(100));
console.log(Number.isInteger(3.5));
console.log(5 + 3);
console.log(5 - 3);
console.log(5 * 3);
console.log(5 / 3);
console.log(5 % 3);
console.log(2 ** 3);
let a1 =  10;
a1 += 5;
console.log(a1);
console.log(5 > 3);
console.log(5 === " 5");
console.log(5 == "5");
console.log(true && false);
console.log(true || false);
console.log(!true);
console.log(5 & 1);
console.log(5 | 1);
console.log(5 ^ 1);
console.log(~5);
console.log(5 << 1);
console.log(5 >> 1);
let age1 = 18;
let type1 = age1 >= 18 ? "Adult" : "Minor";
console.log(type1);
console.log(5 + 3 * 2);
console.log((5 + 3)*2);
let x1 = 5;
console.log(++x1);
console.log(x1++);
console.log(true || false && false);
let b1 = 2;
b1 *= 3 +2;
console.log(b1);

console.log(Math.abs(-1));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.8));
console.log(Math.round(4.5));
console.log(Math.trunc(4.9));
console.log(Math.sqrt(16));
console.log(Math.cbrt(27));
console.log(Math.pow(2, 4));
console.log(Math.min(3, 7, 1));
console.log(Math.max(3, 7, 1));
console.log(Math.random());
console.log(Math.sin(Math.PI/ 2));
console.log(Math.cos(0));
console.log(Math.cos(0));
console.log(Math.tan(Math.PI / 4)); 
console.log(Math.log(1)); 
console.log(Math.log10(100));
console.log(Math.exp(1)); 
console.log(Math.sign(-42)); 
console.log(Math.hypot(3, 4)); 
console.log(Math.clz32(1));