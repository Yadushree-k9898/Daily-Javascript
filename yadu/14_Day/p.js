console.log([1, 2, 3].map(num => num * 2));

console.log([1, 2, 3, 4].filter(num => num % 2 === 0));

console.log([1, 2, 3, 4].reduce((sum, num) => sum + num, 0));

console.log([1, 2, 3, 4, 5].find(num => num > 3));

console.log([1, -2, 3].some(num => num < 0));

console.log([1, 2, 3].every(num => num> 0));

console.log([1, 2, 3].every(num  => num > 0));

console.log(["hi", "bye"].flatMap(word => word.split("")));

console.log([1, 2, 3, 4].map(n => n * 2).filter(n => n > 4));

console.log(['a', 'b', 'c', 'd', 'e'].reduce((acc, val) =>{
    acc[val] = (acc[val] || 0) + 1
    return acc
}, {}));


const users = [{id: 1}, {id: 2}, {id: 5}];
console.log(users.find(user => user.id === 2));

//deep copy 

const obj1 = {a:1, b:{c:2}};
const copy1 = {...obj1}
copy1.b.c = 10;
console.log(obj1.b.c);


const obj2 = {a: 1, b: {c:2}};
const copy2 = JSON.parse(JSON.stringify(obj2));
copy2.b.c = 10;

console.log(obj2.b.c);


const copy3 = Object.assign({}, obj1);

const arr1 = [1, 2, [3, 4]];
const arrCopy1 = [...arr1];

const arrCopy2 = JSON.parse(JSON.stringify(arr1));

const obj3 = {a: 1, b: {c: 2}};
const copy4 = structuredClone(obj3)

console.log(copy4);

function deepCopy(obj){
    return JSON.parse(JSON.stringify(obj))
}

function deepClone(obj){
    if(obj === null  || typeof obj !== 'object') return obj;
    if(Array.isArray(obj)) return obj.map(deepClone);
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, deepClone(v)]))
}

const arrCopy3 = arr1.slice();

const keysCopy = Object.keys(obj1)


const {a =  10} = {};
console.log(a);

const { b = 5} = {b: 20};
console.log(b);

function greet({name = "Guest"}){
    console.log(`Hello, ${name}`);
    
}
greet({});
greet({name: "Alice"})

const {x = 1, y = 2} = {};

const {z = Math.random()} = {};

const {p: {q = 5} = {}}  = {}
console.log(q);

let fallback = 42;
const {m = fallback} = {};

const [ num1 = 100, num2 = 200] = [10];

function getConfig({port = 3000, debug = false} = {}){
    return {port, debug}
}
console.log(getConfig());

for(const { id = 0} of [{}, {id: 5}]){
    console.log(id);
    
};

const user = {name: "John", address: {city: "NY"}};
const {address: {city}} = user;

const arr = [1, [2, 3]];
const [first, [second, third]] = arr;

const data = {id: 1, items: [{name: "A"}, {name: "B"}]};
const {items: [{name: firstItem}]} = data;

const nested = {a: {b: {c: 10}}};
const {a: {b: {c}}} = nested;


const {foo: {bar = 42} = {}} ={};

function printCity({address: {city}}){
    console.log(city);
    
}

const obj = {arr: [1, 2, 3]};
const {arr: [one, two]} = obj;

const arr2 = [{id: 1, val: 100}];
const [{val}] = arr2;

const deep = {x: {y: {z: [1, 2, 3]}}};
const {x: {y :{ z: [, , last]}}} = deep ;

const [, [secondVal]] = [0, [10, 20]];

const nums = [1, 2, 3];
console.log(...nums);


const arr3 = [...[1, 2], ...[3, 4]];

const arr4 = [...arr3];

Math.max(...[1, 5, 2]);

const obj4 = {a: 1, b: 2};
const obj5 = {...obj4, c: 3};

const [firstName, ...restNums] = [1, 2, 3, 4];

const {a: aVal, ...others} = {a: 1, b:2, c: 3};

console.log([...'hello']);

function sum(...numbers){
    return numbers.reduce((a, b) => a+ b)
}

const merged = {...{x:1}, ...{y:2}}