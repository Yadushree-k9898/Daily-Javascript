let string = 'Javascript';
let firstLetter = string[0]
let secondLetter = string[1]
let thirdLetter = string[2]
let fourthLetter = string[3]
console.log(firstLetter);
console.log(secondLetter);
console.log(thirdLetter);
console.log(fourthLetter);

let lastLetter = string[9]
console.log(lastLetter);

let lastIndex = string.length - 1;
console.log(string[lastIndex]);
console.log(lastIndex);


// string.charAt(index);

let string2 = '30 days of javascript';
console.log(string2.charAt(0));
console.log(string2.charAt(6));
console.log(string.charAt(3));
console.log(string2.charAt(5));

let lastIndex2 = string2.length-1
console.log(string2.charAt(lastIndex));

// string.charCodeAt(index);

let string3 = '30 days of javascript';
console.log(string3.charCodeAt(3));
console.log(string3.charCodeAt(5));
console.log(string3.charCodeAt(6));
console.log(string3.charCodeAt(9));


let lastIndex3 = string3.length - 1
console.log(lastIndex3);

console.log(string3.charCodeAt(lastIndex3));


//concat

let string0 = '30';

console.log(string0.concat("Days", "of", "javascript"));
let country = 'IND'
console.log(country.concat('IA'));
let name = 'yadu'
console.log(name.concat('shree-k'));





let sentence = 'I love to learn javascript';
console.log(sentence.endsWith('javascript'));
console.log(sentence.endsWith('io'));
console.log(sentence.endsWith('learn javascript'));

let country1 = 'India';
console.log(country1.endsWith('ia'));
console.log(country1.endsWith('dia'));
console.log(country1.endsWith('land'));

















