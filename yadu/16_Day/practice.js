class Car{}
const car1 = new Car();
console.log(car1);

class Car1 {
    contructor(){
        console.log("A new car object created");
        
    }
}
new Car1();

class Car2{
    constructor(brand){
        this.brand = brand;
    }
}
const myCar = new Car2("Toyota");
console.log(myCar.brand);


class Car3{
    constructor(brand, model){
        this.brand = brand;
        this.model = model
    }
}
const car2 = new Car3("Telsa", "Model S");
console.log(car2);

class Car4 {
    constructor(brand){
        this.brand = brand;
    }
    start(){
        console.log(`${this.brand} is starting....`);
        
    }
}

new Car4("BMW").start();

class Car5{
    constructor(brand, speed){
        this.brand = brand;
        this.speed = speed
    }
    accelerate(){
        this.speed += 10;
        console.log(`${this.brand} is now at ${this.speed} km/h`);
        
    }
    break(){
        this.speed -= 5;
        console.log(`${this.brand} slowed down to ${this.speed} km/h`);
        
    }
}

const bmw = new Car5("BMW", 50);
bmw.accelerate();
bmw.break();

class Car6{
    constructor(brand){
        this.brand = brand;
    }
    getBrand(){
        return this.brand
    }
}
console.log(new Car6("Audi").getBrand());

class Car7{
    constructor(brand){
        this.brand = brand;
    }
    showInfo(){
        console.log(`This is a ${this.brand}`);   
    }
}
new Car7("Honda").showInfo()

class Car8{
    contructor(brand){
        this.brand = brand
    }
    changeBrand(newBrand){
        this.brand = newBrand
    }
}
const c = new Car8("Ford");
c.changeBrand("Nissan");
console.log(c.brand);


class Car9{
    constructor(brand = "Unknown"){
        this.brand = brand
    }
}
console.log(new Car9().brand);

class Car10{
    constructor(brand, color){
        this.brand = brand;
        this.color = color;
    }
    describe(){
        return `${this.color} ${this.brand}`
    }
}

console.log(new Car10("Tesla", "Red").describe());

class Calculator{
    add(a, b){
        return a + b;
    }
}
console.log(new Calculator().add(5, 7));

class User{
    constructor(name){
        this.name = name;
    }
    greet(){
        return `Hello ${this.name}`
    }
    introduce(){
        console.log(this.greet());
        
    }
}

new User("Alice").introduce();

class BankAccount{
    constructor(owner, balance){
        this.owner = owner;
        this.balance = balance
    }
    deposit(amount){
        this.balance += amount
    }
}

const account = new BankAccount("Bob", 1000);
account.deposit(500);
console.log(account.balance);

class Counter{
    constructor(count = 0){
        this.count = count
    }
    increment(){
        this.count++
        return this
    }
}
const counter = new Counter;
counter.increment().increment();
console.log(counter.count);


class Todo{
    constructor(task){
        this.task = task;
        this.completed = false
    }
    complete(){
        this.completed = true
    }
}

const t = new Todo("Learn JS");
t.complete();
console.log(t);


class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height
    }
    area(){
        return this.width * this.height
    }
}
console.log(new Rectangle(5, 10).area());

class Circle {
    constructor(radius){
        this.radius = radius
    }
    circumference(){
        return 2 * Math.PI * this.radius
    }
}

console.log(new Circle(3).circumference().toFixed(2));


class Temperature{
    constructor(celcius){
        this.celcius = celcius
    }
    toFahrenheit(){
        return (this.celcius * 9) / 5 + 32
    }
}

console.log(new Temperature(30).toFahrenheit());

class StopWatch{
    constructor(){
        this.time = 0;
    }
    tick(){
        this.time++
    }
}
const s = new StopWatch();
s.tick();
console.log(s.time);

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age
    }
    introduce(){
        console.log(`Hi, I'm ${this.name}, ${this.age} years old`);
    }
}
new Person("John", 25).introduce();

class Cart{
    constructor(){
        this.items = [];
    }
    addItem(item){
        this.items.push(item)
    }
}
const cart = new Cart();
cart.addItem("Apple");
console.log(cart.items);

class BankAccount1{
    constructor(balance){
        this.balance = balance
    }
    withdraw(amount){
        if(amount <= this.balance){
            this.balance -= amount
        }else{
            console.log("Insufficient funds");
        }
    }
}

const acc = new BankAccount1(500);
acc.withdraw(100);
console.log(acc.balance);


class Counter1{
    constructor(){
        this.count = 0;
    }
    reset(){
        this.count = 0
    }
}
const ctr = new Counter1();
ctr.reset();
console.log(ctr.count);


class Game{
    constructor(){
        this.score = 0
    }
    addScore(points){
        this.score += points
    }
}
const g = new Game();
g.addScore(10);
console.log(g.score);
