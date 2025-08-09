const numbers = new Set([1, 2, 3, 3, 4, 5, 5,2]);
console.log(numbers);


const fruits = new Set();
fruits.add('Apple');
fruits.add('Mango');
fruits.add('Apple')
console.log(fruits);

const user = new Set([
    ["name", "Alice"],
    ["age", 23]
]);

console.log(user);


const capitals = new Map();
capitals.set("India", "New Delhi");
capitals.set("France", "Paris");
console.log(capitals);

console.log(capitals.get("India"));


const mySet = new Set();
mySet.add(10);
console.log(mySet);

mySet.delete(10);
console.log(mySet);

const letters = new Set(["a", "b"]);
console.log(letters.has("a"));
console.log(letters.has("r"));

letters.clear();
console.log(letters);

const nums = new Set([1, 2, 3]);
console.log(nums.size);

const setA = new Set([1, 2]);
const setB = new Set([2, 3]);
const union = new Set([...setA, ...setB]);
console.log(union);

const intersection = new Set([...setA].filter(x => setB.has(x)))
console.log(intersection);


const differece = new Set([...setA].filter(x => !setB.has(x)));
console.log(differece);

const isSubSet = [...setA].every(x => setB.has(x));
console.log(isSubSet);

const isSuperSet = [...setB].every(x => setA.has(x));
console.log(isSuperSet);


const emptySet = new Set();
console.log(emptySet);

const setFromArray = new Set([1, 2, 3]);
console.log(setFromArray);

setFromArray.add(4)
console.log(setFromArray.has(2));


for(let value of setFromArray){
    console.log(value);
    
}

const myMap = new Map();
myMap.set("name", "John");

console.log(myMap.get("name"));

console.log(myMap.has("name"));


myMap.delete("name");
console.log(myMap);


myMap.clear()

const newMap = new Map();

const cityMap = new Map([
    ["India", "New DElhi"],
    ["USA", "WashingtOn"]
])

console.log(cityMap);


for(let key of cityMap.keys()){
    console.log(key);
    
}

for(let value of cityMap.values()){
    console.log(value);
    
}

for(let [key, value] of cityMap.entries()){
    console.log(`${key} : ${value}`);
    
}