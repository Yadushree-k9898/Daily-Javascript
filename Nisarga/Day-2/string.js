
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

// match() -- it searches a string for a match against a regular expression, and returns the matches, as an Array object.
let u = 'The quick brown fox jumps over the lazy dog';
let regex = /the/gi; // 'g' for global search, 'i' for case-insensitive search
console.log(u.match(regex)); // Output: [ 'The', 'the' ]


// repeat()-- it returns a new string which contains the specified number of copies of the original string.
let v = 'Hello';
console.log(v.repeat(3)); // Output: HelloHelloHello


// replace() -- it replaces a specified string with another string in a string.
let w = 'I love JavaScript';
console.log(w.replace('JavaScript', 'Python')); // Output: I love Python


// replace() -- it replaces all occurrences of a specified string with another string in a string.
let x = 'I love JavaScript. JavaScript is great.';
console.log(x.replace(/JavaScript/g, 'Python')); // Output: I love Python. Python is great.


// search() -- it searches a string for a specified value and returns the position of the match. If not found, it returns -1.
let y = 'Hello World';
console.log(y.search('World')); // Output: 6


// split() -- it splits a string into an array of substrings based on a specified separator.
let z = '30 days of JavaScript';
console.log(z.split(' ')); // Output: [ '30', 'days', 'of', 'JavaScript' ]


// substr() -- it extracts a substring from a string, starting at a specified index and extending for a specified number of characters.
let a = 'Hello World';
console.log(a.substr(0, 5)); // Output: Hello

// substring() -- it extracts a substring from a string between two specified indices.
let b = 'Hello World';
console.log(b.substring(0, 5)); // Output: Hello


// toLowerCase() -- it converts a string to lowercase.
let c = 'HELLO WORLD';
console.log(c.toLowerCase()); // Output: hello world


// toUpperCase() -- it converts a string to uppercase.
let d = 'hello world';
console.log(d.toUpperCase()); // Output: HELLO WORLD

// trim() -- it removes whitespace from both ends of a string.
let e = '   Hello World   '; 
console.log(e.trim()); // Output: Hello World   
