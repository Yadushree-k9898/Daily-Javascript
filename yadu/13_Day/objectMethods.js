let user ={
    name: "John"
}

let id = Symbol("id");
user[id] = 1
console.log(user[id]);

let id1 = Symbol("id");
user[id1] = "Their id value"
console.log(user[id1]);

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");


console.log(Symbol.keyFor(globalSymbol));
console.log(Symbol.keyFor(localSymbol));
console.log(localSymbol.description);

const id2 = Symbol();
console.log(typeof id2);
 
const userId = Symbol("userId");
console.log(typeof userId);


const s1 = Symbol("test");
const s2 = Symbol("test");

console.log(s1 === s2);

const user1 = {
    name: "Alice",
    [userId] : 123
}
console.log(user1[userId]);

for(let key in user1){
    console.log(key);  
}

console.log(Object.keys(user1));

console.log(Object.getOwnPropertySymbols(user1));

const globalSym1 = Symbol.for("shared");
const globalSym2 = Symbol.for("shared");

console.log(globalSym1 === globalSym2);

console.log(Symbol.keyFor(globalSym1));


const toStringSymbol = Symbol("toString");
const obj = {
    [toStringSymbol](){
        return "Custom toString"
    }
}

console.log(obj[toStringSymbol]());

//Object to Primitive Conversion

const obj1 = {
    toString(){
        return "Hello"
    }
}
console.log(String(obj1));


const obj2 = {
    valueOf(){
        return 42
    }
}

console.log(Number(obj2));


const obj3 = {
    toString() { return 'Hi'},
    valueOf() { return 100}
}

console.log(String(obj3));
console.log(Number(obj3));

console.log(+obj3);

console.log(`${obj3}`);

const obj4 = {
    [Symbol.toPrimitive](hint){
        if(hint === "string") return "StringValue";
        if(hint === "number") return 999
        return "default"
    }
}

console.log(String(obj4));
console.log(Number(obj4));
console.log(obj4 + "");


console.log(obj2 + 8);

console.log({} + "");

const product = {
    name: "Phone",
    price: 1000,
    toString(){
        return `${this.name} - $${this.price}`
    }
}

console.log(String(product));


console.log(obj2 == 42);


// Property Flags & Descriptors
const obj5 = {a: 1};
console.log(Object.getOwnPropertyDescriptor(obj5, "a"));


Object.defineProperty(obj5, "a", {writable: false})
obj5.a = 100
console.log(obj5.a);

Object.defineProperty(obj5, "hidden", {value: 123, enumerable: false})
console.log(obj5.a);

const person2 = {}
Object.defineProperty(person2, "name", {value: "Alice", writable: true})
console.log(person2.name);

Object.preventExtensions(person2);
person2.age = 30;
console.log(person2.age);

const sealed = {x: 1};
Object.seal(sealed);
sealed.x = 10;
console.log(sealed.x);

const frozen = {y: 10};
Object.freeze(frozen);
frozen.y = 99;
console.log(frozen.y);


const desc = Object.getOwnPropertyDescriptor(obj5, "a");
console.log(desc.enumerable, desc.configurable);


Object.defineProperties(obj5, {
    prop1:{value:1, writable:true},
    prop2: {value: 2, writable: false}
})

console.log(obj5.prop1, obj5.prop2);


//getters setters

const person3 = {
    firstName: "John",
    lastName: "Doe",
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(person3.fullName);

person3.fullName = "Jane smith"

console.log(person3.fullName);

const person4 = {
    firstName: "John",
    lastName: "Doe",
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){
        [this.firstName, this.lastName] = value.split(" ")
    }
} 

person4.fullName = "Jane Smith"
console.log(person4.firstName);

const rectangle = {
    width: 10, 
    height: 5,
    get area(){
        return this.width * this.height
    }
}
console.log(rectangle.area);


const account = {
    balance: 0,
    set deposit(amount){
        if(amount > 0) this.balance += amount;
        else console.log("Invalid deposit");
        
    }
}

account.deposit = 100;
console.log(account.balance);


const obj6 = {}
Object.defineProperty(obj6, "greeting", {
    get(){
         return "Hello world"
        }
})
console.log(obj6.greeting);


Object.defineProperty(obj6, "value", {
    set(v){
        console.log("Value set to", v);
        
    }
})

obj6.value = 42;

const chain = {
    a: 1, 
    get double(){
        return this.a*2
    }
}
console.log(chain.double);


const user3 = {
    name: "",
    set setName(n){
        this.name = n.trim();
    }
}
user3.setName = "   Alice   ";
console.log(user3.name);


function createCounter(){
    let count = 0;
    return {
        get value() { return count;},
        increment() { count++ }
    }
}

const counter = createCounter();
counter.increment();
console.log(counter.value);


let id3 = Symbol.for("id");
let idAgain = Symbol.for("id")

console.log(id3 === idAgain);
