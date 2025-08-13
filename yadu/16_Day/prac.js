const nums = [1, 2, 3];
nums.forEach(num => console.log(num * 2)
);
const doubled = nums.map(num => num* 2);
console.log(doubled);

const evens = nums.filter(num => num % 2 === 0);
console.log(evens);

const sum = nums.reduce((total, num) => total+num, 0);
console.log(sum);

console.log(nums.some(num => num % 2 === 0));

console.log(nums.every(num => num % 2 === 0));
console.log(Array.isArray(nums));
console.log(Array.isArray("hello"));

console.log(nums.find(num => num > 3));

console.log(nums.findIndex(num => num > 2));

console.log(nums.includes(1));
console.log(nums.includes(3));

const arr = [1, [2, [3]]];
console.log(arr.flat(2));


const numbers = [1, 2, 3, 4 , 5];
console.log(numbers.flatMap(num => [num, num * 2]));

const obj = {a: 1, b: 2};
console.log(Object.keys(obj));

console.log(Object.values(obj));

console.log(Object.entries(obj));

const entries = [['a', 1], ['b', 2]];
console.log(Object.fromEntries(entries));

const obj1 = {a: 1};
Object.freeze(obj1);
obj1.a = 5;
console.log(obj1.a);

const obj2 = {a: 1};
Object.seal(obj2);
obj2.a = 5;
console.log(obj2.a);

const nums1 = [1, 2];
const copy = [...nums];
console.log(copy);


const obj0 = {a: 1};
const newObj = {...obj, b: 2};
console.log(newObj);

function sum1(...nums){
    return nums.reduce((a, b) => a + b)
}
console.log(sum1(1, 2, 3));


function greet(name = "guest"){
    console.log(`Hello ${name}`);
    
}
greet();
const [a, b] = [1, 2];
console.log(b);

const {name, age} = {name: "JOhn", age: 25};
console.log(name, age);

const user = {name: "Alice", address: {city: "Paris"}}
const {address: {city}} = user;
console.log(city);
