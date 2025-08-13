class User{
    #name = "Default";
    getName(){
        return this.#name
    }
}
const u = new User();
console.log(u.getName());

class User1{
    #name = "Secret";
}
const u1 = new User1();

class Bank{
    #calculateFee(amount){
        return amount * 0.02
    }
    process(amount){
        return amount - this.#calculateFee(amount)
    }
}
console.log(new Bank().process(100));

class User2{
    #name;
    constructor(name){
        this.#name = name;
    }
    getName(){
        return this.#name
    }
}
console.log(new User2("Alice").getName());

class Product{
    #price;
    constructor(price){
        this.#price = price
    }
    get price(){
        return this.#price
    }
    set price(value) {if (value > 0) this.#price = value; }
}

const p = new Product(100)
p.price = 150;
console.log(p.price);


class Vehicle{
    _speed = 0;
}
class Car extends Vehicle{
    increaseSpeed() { this._speed += 10;}
}
const c = new Car();
c.increaseSpeed();
console.log(c._speed);

class Account{
    #balance = 0;
    #owner;
    constructor(owner){ this.#owner = owner}
}

class Employee{
    #salary = 50000;
    name = "John";
    showInfo(){
        console.log(this.name, this.#salary);
    }
}
new Employee().showInfo();

class Settings{
    #theme = "light";
    getTheme(){ return this.#theme}
}
console.log(new Settings().getTheme());


class Score{
    #points = 0;
    addPoints(p){ this.#points += p;}
    getPoints(){ return this.#points}
}
const s = new Score();
s.addPoints(10);
console.log(s.getPoints());

class Counter{
    #count = 0;
    increment(times){
        for(let i = 0; i<times; i++) this.#count++
    }
    getCount(){return this.#count}
};

class Playlist{
    #songs = [];
    add(song) { this.#songs.push(song)};
    list(){ return [...this.#songs]}
}

class Config{
    #settings = {mode: "dev"};
    getSetting(key) { return this.#settings[key]}
}

class Example{
    #m1() { return 1;}
    #m2(){ return this.#m1() + 1};
    result() { return this.#m2()}
};

class Tracker{
    static #count = 0;
    static increase() { Tracker.#count++};
    static getCount(){ return Tracker.#count}
}
Tracker.increase();
console.log(Tracker.getCount());

class Parent{
    #secret = "hidden";
    reveal(){ return this.#secret}
}
class Child extends Parent{};
console.log(new Child().reveal());


class Parent1{
    _data = "shared";
}
class Child1 extends Parent1{
    printData() { console.log(this._data);
    }
}
new Child1().printData();

class ATM{
    #pin;
    constructor(pin) { this.#pin = pin;};
    verifyPin(pin) { return pin === this.#pin}
}

class Order{
    #quantity;
    setQuantity(q) { if (q > 0) this.#quantity = q}
}

class Shape{
    #width = 5;
    #height = 10;
    area() { return this.#width * this.#height}
}

class Store{
    #items = [];
    addItem(i) { this.#items.push(i)};
    getTotal(){ return this.#items.length}
}

class Button{
    #handleClick(){ console.log("Clicked")
    };
    click(){ this.#handleClick()}
}

class Logger{
    static #logs = [];
    static log(msg){ Logger.#logs.push(msg)};
    static getLogs(){return Logger.#logs}
}

class UserData{
    #password = "123";
    toJSON(){return {safe: true}}
}
console.log(JSON.stringify(new UserData()));


const privateKey = Symbol("private");
class Demo{
    constructor(){this[privateKey] = "hidden"}
}