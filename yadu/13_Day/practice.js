// let user = new Object(); // object constructor

let user = {
    name: 'john',
    age:30
}
let user2 = {}

let user3 ={
    name: 'john',
    age:30
}

console.log(user3.name);
console.log(user3.age);
delete user3.age
console.log(user3);

user["likes birds"] = true

console.log(user["likes birds"]);

delete user["likes birds"] 

console.log(user);

let key = "likes birds"
user[key] = true
console.log(user);

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}

console.log(menu.width);

menu = {
    width: 400,
    height: 500,
    title: "My menu"
}

console.log(menu.width);
console.log(menu.title);


let salaries = {
    john: 100,
    Ahn: 200,
    pete: 500
}

console.log(salaries["pete"]);


let schedule ={};
function isEmpty(){
    console.log("This is empty");
    
}
schedule["8:30"] = "get up"
console.log(isEmpty(schedule));


let codes = {
    "+49":"Germany",
    "+41":"Switzerland",
    "+91":"India",
    "+1": "USA"
}

for(let code in codes){
    console.log(+code);
    
}

//referencing and coping

let message = "Hello";
let phrase = message

let useri = {
    name: "Alise"
}

let users = {name: "Bob"};
let admin = users
admin.name = "Pete";
console.log(users.name);


let a = {};
let b = a 

console.log(a == b);
console.log(a === b);

let a1 = {};
let b1 = {}
console.log(a1 == b1);
console.log(a1 === b);

let clone = {};

for(let key in user){
    clone[key] = user[key]
}

clone.name = "Petre"
console.log(user.name);


const person = {
    name: "Alice",
    age: 25,
    isStudent: true
}

console.log(person.name);
console.log(person.age);
console.log(person.isStudent);

//Object References and Copying

const obj1 = {a: 1};
const obj2 = obj1

obj2.a = 2;
console.log(obj1.a);

const copy = {...obj1};
copy.a = 3;
console.log(obj1.a);
console.log(copy.a);

//garbage collection

let obj = {name: "Temp"};
obj = null

const userr = {
    name: "Bob",
    greet(){
        console.log(`Hello ${this.name}`);
        
    }
}

userr.greet();


function Person(name, age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log(`Hi I'm ${this.name}`);
        
    }
}

const p1 = new Person("Eve", 30);
p1.greet()

const user1 = {
    name: "John",
    address: {city: "NY"}
}

console.log(user1.address?.city);
console.log(user1.contact?.phone);


//symbol type

const sym = Symbol("id");
const objs = {
    [sym]:123,
    name: "Alice"
}

console.log(objs[sym]);


const us = {
    name: "Alex",
    toString(){
        return this.name
    }
}

console.log(us + "");


const objj = {};
Object.defineProperty(objj, "prop", {
    value: 42,
    writable:false,
    enumerable: true,
    configurable: false
});

objj.prop = 100;
console.log(objj.prop);


const user0 = {
    firstName: "John",
    lastName:"Doe",
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){
        [this.firstName, this.lastName] = value.split(" ")
    }
}

console.log(user0.fullName);
user0.fullName = "Jane smith"
console.log(user0.firstName);


const car = {
    make: "Toyota",
    model:"Camry",
    year: 2020
}
console.log(car.make);

console.log(car["model"]);

car.color = "red";
console.log(car.color);

delete car.year
console.log(car.year);

const user01 ={
    "firstName": "Alice",
    "last-name": "Smith"
}
console.log(user01["firstName"]);

const key1 = "age";
const person1 = {
    [key1]: 30
}
console.log(person1.age);

const data = {
    num: 100,
    bool: false,
    arr: [1, 2, 3],
    nested: {a: 1}
}

console.log(data.arr[1]);
console.log(data.nested.a);

const useer = [
    {name: "Peach"},
    {name: "patrick"}
];

console.log(useer[1].name);


const objjs =  {};
objjs.prop1 = "value1";
console.log(objjs.prop1);

// console.log(Object.keys(car));


const a0 = {val : 1};
const b0 = a0;
b0.val = 2;
console.log(a0.val);

const original = {x: 1, y: 2};
const copy1 = Object.assign({}, original);
copy1.x = 10;

console.log(original.x);

const copy2 = {...original};
copy2.y = 20;
console.log(original.y);


const nested = {inner: {value: 5}};
const shallowCopy = {...nested};
shallowCopy.inner.value = 10;
console.log(nested.inner.value);


const deepObj = {a: 1, b: {c:2}};
const deepCopy = JSON.parse(JSON.stringify(deepObj));
deepCopy.b.c = 20;
console.log(deepCopy.b.c);


const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2.push(4);
console.log(arr1. length);


const arr3 = arr1.slice();
arr3.push(5);
console.log(arr1.length);


// console.log({} === {});

const objA = {func: () => "hello"};
const objB = objA;
console.log(objA.func());

let u = {name: 'sam'};
u = null;

function foo(){
    const temp = {data: 123};
}
foo()

let a3 = {};
let b3 = {}
a3.b3 = b3;
a3 = null
b3 = null

function outer(){
    let obj = {val: 5};

    return function inner(){
        console.log(obj.val);
        
    }
}
const closureFunc = outer()
closureFunc()

// const element = document.getElementById("btn");
// function onClick(){
//     console.log('clicked');
    
// }
// element.addEventListener('click', onClick)


let wm = new WeakMap();
let keyObj = {};
wm.set(keyObj, "value");
keyObj = null

