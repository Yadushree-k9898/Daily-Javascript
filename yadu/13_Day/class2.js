class Person{
    constructor(name, age){
         this.name = name;
          this.age = age
        }
        greet(){ return `Hi, I'm ${this.name}`}
}

console.log(new Person("alice", 25).greet());

class Product{
    constructor(name="Unknown", price=0){
        this.name = name;
        this.price = price
    }
}
console.log(new Product("Laptop", 12000).name);


const C = class {
    hello(){ return "hello"}
}

console.log(new C().hello());


class Counter{
    count = 0;
    increment() { this.count++;  return this.count}
}

const c = new Counter();
console.log(c.increment());


class Timer {
    seconds = 0;
    tick = () =>{
        this.seconds++;
        return this.seconds
    }
}

const t = new Timer();
console.log(t.tick());


class Rectangle{
    constructor(w, h){
        this.w = w;
        this.h = h;
    }
    get area(){ return this.w * this.h}
    set area({w, h}) { this.w = w; this.h = h}
}

const r = new Rectangle(4, 5);
console.log(r.area);
r.size = {w:2, h: 3}
console.log(r.area);


class Builder{
    constructor() { this.parts = []}
    add(p) { this.parts.push(p); return this;}
    build() { return this.parts.join('-')}
}
console.log(new Builder().add('a').add('b').build());


class Animal {
    constructor(name){
        this.name = name
    }
    speak(){ return `${this.name} makes a sound`}
}

class Dog1 extends Animal{
    speak(){ return `${this.name} barks.`}
}

console.log(new Dog1("Rex").speak());


class Cat extends Animal{
    speak(){ return super.speak() + ' But also meows'}
}

console.log(new Cat('Misty').speak());

class A{ say() { return 'A'}}
class B extends A {say(){ return 'B -> ' + super.say()}}
class C1 extends B { say(){ return 'C -> ' + super.say()}}
console.log(new C1().say());


class Person1 {
    constructor(name){
         this.name = name
    }
}

class Employee extends Person1{
    constructor(name, id){
        super(name);
        this.id = id
    }
}

console.log(new Employee('Lee', 123));

class Base{
    static type = 'base';
    static who(){
         return 'base'
    }
}

class Sub extends Base{};
console.log(Sub.type, Sub.who());


class Shape {
    area(){ return 0}
}

class Square extends Shape{
    constructor(s){
        super();
        this.s = s
    }
    area(){ return this.s * this.s}
}
console.log(new Square(4).area());


const e = new Employee("sam", 55);
console.log(e instanceof Employee, e instanceof Person1, e instanceof Object);


class Util{
    static add(a, b){ return a+b}
}

console.log(Util.add(2, 3));


class CounterStatic{
    static count = 0;
    constructor(){ CounterStatic.count++}
}
new CounterStatic(); new CounterStatic()
console.log(CounterStatic.count);


const inst = new CounterStatic();
console.log(inst.count);


class Color{
    constructor(r, g, b){
        this.r = r;
        this.g =g;
        this.b = b
    }
    static fromHex(hex){
        const bigint = parseInt(hex.replace('#', ''), 16);
         return new Color((bigint>>16)&255, (bigint>>8)&255, bigint&255);
    }
}
console.log(Color.fromHex('#ff0000'));


class Parent {
    static greet(){
        return 'hi'
    }
}
class Child extends Parent{}
console.log(Child.greet);


class S {
    static #secret = 24;
    static reveal(){ return S.#secret}
}

console.log(S.reveal());


class Init{
    static value;
    static {Init.value = Math.random();}
}

console.log(Init.value);


class Secret{
    #data = 'shh';
    reveal(){ return this.#data}
}

const s = new Secret();
console.log(s.reveal());


class CounterPriv{
    #count = 0;
    #inc() {this.#count++}
    bump(){ this.#inc(); return this.#count}
}

const cp = new CounterPriv();
console.log(cp.bump());


class PrivStatic{
    static #secret = 'top';
    static getSecret(){ return PrivStatic.#secret}
}

console.log(PrivStatic.getSecret());

class Bank{
    #balance = 0;
    deposit(v) { if (v > 0) this.#balance += v}
    getBalance(){ return this.#balance}
}

const bank = new Bank();
bank.deposit(100);
console.log(bank.getBalance());


class Base1{
    _protected = 'ok';
}

class Sub1 extends Base1{
    show(){ return this._protected}
}
console.log(new Sub1().show());


const _secret = new WeakMap();
class WithWeak{
    constructor(secret){ _secret.set(this, secret)}
    getSecret(){return _secret.get(this)}
}

const w = new WithWeak('abc');
console.log(w.getSecret());


const internals = new WeakMap();
class A1{
    constructor(x){
        internals.set(this, {x})
    }
}

class B1 {
    read(aInstance) { return internals.get(aInstance).x}
}

const a = new A1(42);
console.log(new B1().read(a));
