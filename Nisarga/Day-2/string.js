
// Accessing the Characters of a String ['JavaScript']

let string = 'JavaScript'
let firstLetter = string[0];
console.log(firstLetter); // Output: J

let secondLetter =string[1];
console.log(secondLetter); // Output: a

let thirdLetter = string[2];
console.log(thirdLetter); // Output: v

let lastLetter = string[9];
console.log(lastLetter); // Output: t


let lastIndex = string.length-1;
console.log(lastIndex); // Output: 9
console.log(string[lastIndex]); // Output: t

//  charAt 
string.charAt(index)
let string1 = '30 days of javascript'
console.log(string1.charAt(0))  // Output: 3

let lastIndex1 = string1.length-1;
console.log(string1.charAt(lastIndex1)); //output : t



//  charCodeAt
string.charCodeAt(index)
let string2 = '30 Days of javascript'
console.log(string2.charCodeAt(3)) // Output: 68 (ASCII code for 'D')
let lastIndex2 = string2.length-1;
console.log(string2.charCodeAt(lastIndex2)); // Output: 116 (ASCII code for 't') 


//concat
//  concat() -- two or more strings and join them together
let n = '30';
console.log(n.concat('days of javascript study')); // Output: 30days of javascript study


//endsWith() --  it checks if a string ends with a specified string. and return value true or false
 let  m = 'Do not Give up';
 console.log(m.endsWith('up')); // Output: true
 console.log(m.endsWith('Do')); // Output: false


// startsWith() -- it checks if a string starts with a specified string. and return value true or false
let p = 'Do not give up';
console.log(p.startsWith('Do')); // Output: true
console.log(p.startsWith('give')); // Output: false


// includes() -- it checks specified string is present in a string or not . and return value true or false
let q = 'Motivate yourself';
console.log(q.includes('yourself')); // Output: true
console.log(q.includes('your')); // Output: true


// indexOf -- it returns the index of the first occurrence of a specified string in a string. If the specified string is not found, it returns -1.
let r = 'Hello there!! 77'
console.log(r.indexOf('there')); // Output: 6
console.log(r.indexOf('hello')); // Output: -1
console.log(r.indexOf(77)); // Output: 12

//  lastIndexOf() -- it returns the index of the last occurrence of a specified string in a string. If the specified string is not found, it returns -1.
let s = ' hello there!! 77 hello';
console.log(s.lastIndexOf('hello')); // Output: 19
console.log(s.lastIndexOf('7')); // Output: 20

// length() -- it returns the length of a string.
let t = 'Hello World';
console.log(t.length); // Output: 11 includes spaces



// match 
// repeat 
// match 
// replace
// search
// split

// substr 
// substring 
// toLowerCase
// toUpperCase
// trim
