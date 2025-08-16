function Person(name){
    this.name = name 
}
Person.prototype.greet = function(){
    return `Hello , my name is ${this.name}`
}
let p1 = new Person("Alice");
console.log(p1.greet());

Person.prototype.sayBye = function(){
    return `${this.name} = says bye!`
}
console.log(p1.sayBye());

let p2 = new Person("Bob");
console.log(p2.greet());

p2.greet = function(){
    return `Hi, I'm ${this.name}`
}
console.log(p2.greet());

console.log(p1.__proto__ === Person.prototype);

console.log(p1.hasOwnProperty("name"));
console.log(p1.hasOwnProperty("greet"));

function Employee(name, role){
    Person.call(this, name);
    this.role = role
}
Employee.prototype = Object.create(Person.prototype)
Employee.prototype.constructor = Employee;
let e1 = new Employee("Charlie", "Developer")
console.log(e1.greet());

// Employee.prototype.work = function(){
//     return `${this.name} is working as ${thie.role}`
// }
// console.log(e1.work());

console.log(Object.getPrototypeOf(p1) === Person.prototype);

Array.prototype.first = function(){
    return this[0]
}
console.log([10, 20, 30].first());


//Object Methods

let obj = {a: 1, b:2};
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

let obj2 = {c: 3};
let merged = Object.assign({}, obj, obj2);
console.log(merged);

let frozen = Object.freeze({x: 10})
frozen.x = 20;
console.log(frozen);

let sealed = Object.seal({y: 30});
sealed.y = 40;
delete sealed.y;
console.log(sealed);

let proto = {greet() { return "Hello!"}}
let o1 = Object.create(proto)
console.log(o1.greet());

console.log(Object.hasOwn(obj, "a"));

console.log(Object.getOwnPropertyNames(obj));

let arr = [["name", "alice"], ["age", 22]];
let person = Object.fromEntries(arr)
console.log(person);


//Object Properties

let user = {name: "Alice", age: 22};
console.log(user.name);
console.log(user["age"]);

user.city = "Paris";
console.log(user);

user.age = 20;
console.log(user);

delete user.city
console.log(user);

console.log("name" in user);

Object.defineProperty(user, "country", {
    value: "India",
    writable: false
})
console.log(user.country);

console.log(Object.keys(user));

console.log(Object.getOwnPropertyDescriptor(user, "country"));

console.log(user.address?.street);

//Object Get/Set

let person1 ={
    firstName: "Alice",
    lastName: "Smith",
    get fullName(){
        return this.firstName + " " + this.lastName
    }
}
console.log(person1.fullName);

let person2 = {
    set age(value){
        this._age = value
    },
    get age(){
        return this._age
    }
}
person2.age = 30;
console.log(person2.age);

let rect = {
    width: 10,
    height: 20,
    get area(){
        return this.width * this.height
    }
}
console.log(rect.area);


let account = {
    set balance(amount){
        if(amount < 0) throw new Error("Invalid amount");
        this._balance = amount
    },
    get balance(){
        return this._balance
    }
}
account.balance = 1000;
console.log(account.balance);

let obj1 = {};
Object.defineProperty(obj, "prop", {
    get: function() { return "getter called"},
    set: function (v) { console.log("setter called with", v);
    }
})
obj1.prop = 123;
console.log(obj1.prop);


let circle = {
    radius: 5,
    get diameter(){ return this.radius * 3}
}
console.log(circle.diameter);

let key = "secret";
let vault = {
    [key] : 123,
    get reveal(){ return this[key]}
}
console.log(vault.reveal);

let user1 = {
    set password(p) { this._password = p.toUpperCase()},
    get password() { return this._password}
}
user1.password = "mypwd";
console.log(user1.password);

let safeObj = {
    _value: 10,
    set value(v) { if (v > 0) this._value = v},
    get value() { return this._value}
}
safeObj.value = -5;
console.log(safeObj.value);

let counter = {
    _count: 0,
    get count(){ return this._count},
    set count(v) {this._count = v}
}
counter.count = 10;
console.log(counter.count);

//Object Protection

let obj11 = Object.freeze({x: 10});
obj11.x = 20;
console.log(obj11);

let obj22 = Object.seal({y: 30});
obj22.y = 40;
delete obj22.y;
console.log(obj22);

let obj3 = {z: 50};
Object.preventExtensions(obj3)
obj3.z = 60;
obj3.newProp = 100;
console.log(obj3);

console.log(Object.isFrozen(obj11));
console.log(Object.isSealed(obj22));
console.log(Object.isExtensible(obj3));

let obj4 = {};
Object.defineProperty(obj4, "name", {value: "Alice", writable: false})
console.log(obj4);

Object.defineProperty(obj4, "name", {configurable: false})
delete obj4.name
console.log(obj4);

let deep = Object.freeze({inner: {a: 1}})
deep.inner.a = 2;
console.log(deep.inner);

function deepFreeze(obj){
    Object.freeze(obj);
    Object.keys(obj).forEach( k =>{
        if(typeof obj[k] === "object" && obj[k] !== null){
            deepFreeze(obj[k])
        }
    })
    return obj
}
let frozenObj = deepFreeze({inner: {a: 1}})
frozenObj.inner.a = 2;
console.log(frozenObj);

//Object Reference

let a = {value: 10};
let b = a;
b.value = 20;
console.log(a.value);

let c = {value: 10};
let d = {value: 10};
console.log(c === d);

function change(obj) {
    obj.num = 99
}
let e = {num: 1}
change(e)
console.log(e.num);

let f = {name: "Alice"};
let g = f;
f = null;
console.log(g);

let h = {n: 5};
let i = Object.assign({}, h)
i.n = 10;
console.log(h, i);


let j = {m: 7};
let k  = {...j};
k.m = 20;
console.log(j, k);

// let obj01 = {inner: {x: 1}};
// let obj02 = {...obj11};
// obj02.inner.x = 5;
// console.log(obj01.inner.x);

let obj33 = {inner: {y: 2}};
let obj44 = JSON.parse(JSON.stringify(obj33))
obj44.inner.y = 99;
console.log(obj33.inner.y);

let weak = new WeakMap();
let o = {};
weak.set(o, "secret")
console.log(weak.get(o));

let x = {}
let y = x;
console.log(x === y);
