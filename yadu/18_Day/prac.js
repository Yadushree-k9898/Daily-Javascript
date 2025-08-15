const user1 = {name: "Alice", age: 24};
console.log(Object.keys(user1));

console.log(Object.values(user1));
console.log(Object.entries(user1));

for(const [key, value] of Object.entries(user1)){
    console.log(`${key}: ${value}`);
    
}

const objA = {a: 1};
const objB = {b: 2};
const merged = Object.assign({}, objA, objB);
console.log(merged);

const clone = Object.assign({}, user1);
console.log(clone);

const speardClone = {...user1};
console.log(speardClone);

const frozen = Object.freeze({role: "Admin"});
frozen.role = "User";
console.log(frozen);

const sealed = Object.seal({status: "Active"});
sealed.status = "Inactive";
sealed.newProp = "test";
console.log(sealed);

const limited = Object.preventExtensions({x: 1});
limited.y = 2;
console.log(limited);

console.log(Object.hasOwn(user1, "name"));

console.log(user1.hasOwnProperty("age"));

console.log(Object.getOwnPropertyNames(user1));

const desc = Object.getOwnPropertyDescriptor(user1, "name");
console.log(desc);

const obj2 = {};
Object.defineProperty(obj2, "id", {
    value: 101,
    writable: false,
    enumerable:true
})
console.log(obj2.id);
obj2.id = 200;
console.log(obj2.id);


const user11 = {};
user11.name = "Alice";
console.log(user11);

user11.name = "Alicia";
console.log(user11);

delete user11.name
console.log(user11);

const objA1 = { age: 25 };
console.log("age" in objA1);
console.log("name" in objA1);

const objB1 = {};
Object.defineProperty(objB1, "id", {
    value: 101, 
    writable: true,
    enumerable: true,
    configurable: true
})
console.log(objB1);

Object.defineProperty(objB1, "readonly", {
    value: "Cannot change",
    writable: false
})
objB1.readonly = "Try change";
console.log(objB1.readonly);

Object.defineProperty(objB1, "hidden", {
    value: "secret",
    enumerable: false
})
console.log(Object.keys(objB1));

Object.defineProperty(objB1, "permanent", {
    value: "fixed",
    configurable: false
})
delete objB1.permanent;
console.log(objB1.permanent);

const objC = {x: 1, y: 2};
for(let key in objC){
    console.log(key, objC[key]);
    
}
console.log(Object.getOwnPropertyNames(objC));

const sym = Symbol("id");
const objD = {[sym]: 123};
console.log(Object.getOwnPropertySymbols(objD));

console.log(Object.getOwnPropertyDescriptor(objB1, "id"));

const propName = "dynamicKey";
const objE = {[propName]: "value"};
console.log(objE.dynamicKey);

const objF = {a: 1};
const objG = {b: 2};
Object.assign(objE, objG) 
console.log(objF);
