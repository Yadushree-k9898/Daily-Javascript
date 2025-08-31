function reverseString(str){
    return str.split('').reverse().join('')
}
console.log(reverseString("hello"));

function isPalindrome(str){
    str = str.toLowerCase();
    return str === str.split('').reverse().join('')
}
console.log(isPalindrome("madam"))

function largest(arr){
    return Math.max(...arr);
}
console.log(largest([1, 5, 8, 2]))

for(let i = 1; i <=20; i++){
    let out = "";
    if(i % 3 === 0) out += "Fizz";
    if(i % 5 === 0) out += "Buzz";
    console.log(out || i)
}


function removeDuplicates(arr){
    return [...new Set(arr)];
}
console.log(removeDuplicates([1,2,2,3,4,4,5]))

function isAnagram(a, b){
    const format = str => str.toLowerCase().split('').sort().join("");
    return format(a) === format(b)
}

console.log(isAnagram("listen", "silent"))


function flatten(arr){
    return arr.flat(Infinity);
}
console.log(flatten([1, [2, [3, 4]], 5]));

function missing(arr){
    let n = arr.length + 1;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = arr.reduce((a, b) => a+b, 0)
    return expectedSum - actualSum
}

console.log(missing([1, 2, 4, 5]));


function firstNonRepeatingChar(str){
    for(let char of str){
        if(str.indexOf(char) === str.lastIndexOf(char)) return char;
    }
    return null
}
console.log(firstNonRepeatingChar("swiss"));

function debounce(fn, delay){
    let timer;
    return function(...args){
        clearInterval(timer);
        timer = setTimeout(() => fn.apply(this, args), delay)
    }
}

const log = debounce(() => console.log("Hello"), 1000)
log()
log()
log()