let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[1]);
fruits[1] = "Blueberry";
console.log(fruits);
fruits.push("mango");
console.log(fruits);
fruits.pop()
console.log(fruits);
fruits.unshift("kiwi")
console.log(fruits);
fruits.shift();
console.log(fruits);
console.log(Array.isArray(fruits));
let emptyArr = [];
console.log(emptyArr.length);
let copyFruits = [...fruits];
console.log(copyFruits);
console.log(Array.from("HEllo"));
console.log(Array.of(1, 2, 3));
let nested = [[1, 2], [3, 4]];
console.log(nested[1][0]);

let arrWithHoles = [1, , 3];
console.log(arrWithHoles.length);

//JS Array Methods

let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.concat([6, 7]));
console.log(arr.join("-"));
console.log(arr.slice(1, 3));
arr.splice(2, 0, 90);
console.log(arr);
console.log(arr.indexOf(90));
arr.push(2)
console.log(arr.lastIndexOf(2));
console.log(arr.includes(90));
console.log(arr.reverse());

let multi = [1, [2, [3, 4]]];
console.log(multi.flat(2));
let nums = [1, 2, 3];
console.log(nums.flatMap(x => [x, x* 2]));

let fillArr = [0,0,0];
fillArr.fill(5);
console.log(fillArr);

console.log(arr.toString());
console.log(nums.every(x => x>0));
console.log(nums.some(x => x > 2));

//JS Array Search

let searchArr = [5, 10, 15, 20];
console.log(searchArr.indexOf(15));

searchArr.push(10);
console.log(searchArr.lastIndexOf(10));

console.log(searchArr.includes(20));
console.log(searchArr.findIndex(x => x > 12));
console.log(searchArr.findLast(x => x > 12));
console.log(searchArr.findLastIndex(x => x > 12));
console.log(searchArr.filter( x => x > 10));

let names = ["Alice", "Bob", "Charlie"];
console.log(names.find(name => name.startsWith("C")));
console.log(names.find(name => name.toLowerCase() === "bob"));
console.log(searchArr.filter(x => x % 5 === 0));
console.log(searchArr.filter(x => x % 2 !== 0));

function searchValue(arr, val){
    return arr.indexOf(val) !== -1;
}
console.log(searchValue(searchArr, 15));

console.log(searchArr.indexOf(999));

console.log(searchArr.some(x => x === 20));

//JS Array Sort

let sortArr = [3, 1, 4, 1, 5, 9];

console.log(sortArr.sort());
console.log(sortArr.sort((a, b) => a-b));
console.log(sortArr.sort((a, b) => b -a));

console.log(sortArr.reverse());

let strArr = ["banana", "apple", "cherry"];
console.log(strArr.sort());
console.log(strArr.sort((a, b) => a.length - b.length));

let mixCase = ["Banana", "apple", "Cherry"];
console.log(mixCase.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())));

console.log(sortArr.sort(() =>Math.random() - 0.5));

let objs = [{name: "Yadu", age: 23}, {name: "Jane", age:22}];
console.log(objs.sort((a, b) => a - b));

let boolArr = [true, false, true];
console.log(boolArr.sort((a, b) => a-b));


let undeArr = [3, undefined, 2];
console.log(undeArr.sort((a, b) => (a ?? Infinity) - (b ?? Infinity)));


let floats = [1.1, 1.01, 1.2];
console.log(floats.sort((a, b) => a-b));

let bigNums = [1000, 50, 500];
console.log(bigNums.sort((a, b) => a- b));


let arrOfArrs = [[1, 2, 3],[1], [1, 2]]
console.log(arrOfArrs.sort((a, b) => a.length - b.length));


//JS Array Iterations

let iterArr = [1, 2, 3, 4, 5];

for(let i = 0; i < iterArr.length; i++) console.log(iterArr[i]);

for(let num of iterArr) console.log(num);

iterArr.forEach(num => console.log(num * 2))

console.log(iterArr.map(num => num *2));

console.log(iterArr.filter(num => num % 2 === 0));

console.log(iterArr.reduce((sum, num) => sum + num, 0));

console.log(iterArr.reduceRight((sum, num) => sum + num ,0));

console.log(iterArr.every(num => num > 0));

console.log(iterArr.some(num => num > 4));

console.log(iterArr.find(num => num > 3));

for(let [index, value] of iterArr.entries()) console.log(index, value);

for(let key of iterArr.keys()) console.log(key);

for(let value of iterArr.values()) console.log(value);

console.log(iterArr.flatMap(num =>[num, num * 10]));


//JS Array Reference

let refArr = [10, 20, 30, 40, 50];
console.log(refArr[0]);
console.log(refArr.length);
refArr.push(60);
console.log(refArr);
refArr.pop();
console.log(refArr);
refArr.shift();
console.log(refArr);
refArr.unshift(5);
console.log(refArr);
refArr.splice(1, 2);
console.log(refArr);

console.log(refArr.slice(1, 3));
console.log(refArr.concat([70, 80]));
console.log(refArr.includes(30));

console.log(refArr.indexOf(40));
console.log(refArr.lastIndexOf(40));
console.log(refArr.join(", "));
console.log(refArr.reverse());
console.log(refArr.sort((a, b) => a-b));


//JS Array Const

const constArr = [1, 2,3 ];
console.log(constArr);

constArr[0] = 99;
console.log(constArr);

constArr.push(4);
console.log(constArr);

constArr.pop()
console.log(constArr);

constArr.splice(1, 1);
console.log(constArr);

constArr.splice(1, 0, 88);
console.log(constArr);

constArr.sort((a, b) => a- b);
console.log(constArr);

constArr.reverse();
console.log(constArr);

console.log(constArr.map(x => x * 2));

console.log(constArr.filter(x=> x > 50));
console.log(constArr.reduce((sum, x) => sum + x, 0));


constArr.fill(0);
console.log(constArr);

console.log(constArr.length);

const newConstArr = [...constArr, 100];
console.log(newConstArr);
