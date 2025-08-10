class Car{
    constructor(name, year, model, color){
        this.name = name;
        this.year = year;
        this.model = model;
        this.color = color
    }
}
const myCar1 = new Car('BMW', 2019, 'M5 CS', 'Black')
console.log(myCar1.name);

class Car1{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age(x){
        return x - this.year
    }
}
const myCar = new Car1("Ford", 2014);
// console.log("My car is", myCar.age(year) , " years old");

class Carr {
    constructor(brand){
        this.carname = brand
    }
    present(){
        return 'I have a ' + this.carname
    }
}

class Model extends Carr{
    constructor(brand, mod){
        super(brand);
        this.model = mod;
    }
    show(){
        return this.present() + ', it is a ' + this.model;
    }
}

let myCarr = new Model("Ford", "Mustang");
console.log(myCarr.show());

class Cars{
    constructor(brand){
    this.carname = brand
    }
    get cnam(){
        return this.carname
    }
    set cnam(x){
        this.carname = x
    }
}

const myCarrs = new Cars('Ford');
console.log(myCarrs.cnam);

class Car2 {
    constructor(brand){
        this._carname = brand;
    }
    get carname(){
        return this._carname
    }
    set carname(x){
       this._carname = x
    }
}

const myCar2 = new Car2("bently");
console.log(myCar2.carname);

class Car3{
    constructor(brand){
        this._carname = brand;
    }
    get carname(){
        return this._carname
    }
    set carname(x){
        this._carname = x
    }
}

const myCar3 = new Car3("Ford")
myCar3.carname = "Volvo";
console.log(myCar3.carname);


class Car4{
    constructor(name){
        this.name = name
    }
    static hello(){
        return 'hello!!'
    }
}

const myCar4 = new Car4("Ford");
console.log(Car4.hello());


class Car5{
    constructor(name){
        this.name = name
    }
    static hello(x){
        return 'hello ' + x.name  
    }
}

const myCar5 = new Car5("Ford");
console.log(Car5.hello(myCar5));


class Animal {
    constructor(name, sound){
        this.name = name;
        this.sound = sound
    }
    speak(){
        console.log(`${this.name} says ${this.sound}`);
        
    }
}

const dog = new Animal("Dog", "woof");
dog.speak()

//Class with Parameterized Method

class Rectangle{
    constructor(width, height){
        this.width= width
        this.height= height
    }
    area(){
        return this.width * this.height
    }
    scale(factor){
        this.width *= factor;
        this.height *= factor
    }
}

const rect = new Rectangle(4, 5);
console.log(rect.area());
rect.scale(2)
console.log(rect.area());

class Person{
    constructor(name){
        this.name = name;
    }
    greet(){
        return `Hi, I'm ${this.name}`
    }
}


class Student extends Person{
    constructor(name, grade){
        super(name);
        this.grade = grade
    }
    greet(){
        return `${super.greet()} and I'm in grade ${this.grade}`
    }
}

const s1 = new Student("Alice", 10);
console.log(s1.greet());


//Getters & Setters

class BankAccount{
    constructor(owner, balance){
        this._owner = owner;
        this._balance = balance;
    }
    get balance(){
        return this._balance
    }

    set balance(amount){
        if(amount < 0){
            console.log("Balance can not be negative");
            
        }else{
            this._balance = amount
        }
    }
}

const acc = new BankAccount("John", 500)
console.log(acc.balance);
acc.balance = 1500
console.log(acc.balance);
acc.balance = -20
console.log(acc.balance);


class MathUtils{
    static add(a, b){
        return a + b;
    }
    static multiply(a, b){
        return a * b
    }
}

console.log(MathUtils.add(2, 3));
console.log(MathUtils.multiply(4, 5));


class ShoppingCart{
    constructor(){
        this.items = [];

    }
    addItem(item){
        this.items.push(item);
    }
    totalItems(){
        return this.items.length
    }
}

const cart = new ShoppingCart();
cart.addItem("Apple");
cart.addItem("laptop")
console.log(cart.totalItems());


class Vehicle{
    constructor(type, speed){
        this.type = type;
        this.speed = speed;
    }
    move(){
        console.log(`${this.type} moves at ${this.speed} km/h`);
        
    }
}

class Bike extends Vehicle{
    constructor(speed, gear){
        super("Bike", speed);
        this.gear = gear
    }
    showDetails(){
        console.log(`Bike with speed ${this.speed} and gear ${this.year}`);
        
    }
}

const bike = new Bike(40, 6);
bike.move();
bike.showDetails();



class TodoList{
    constructor(){
        this.tasks = [];
    }
    addTask(task){
        this.tasks.push({task, done:false})
    }
    completeTask(index){
        if(this.tasks[index]){
            this.tasks[index].done = true
        }
    }
    listTasks(){
        this.tasks.forEach((t, i) =>{
            console.log(`${i + 1}. ${t.task} - ${t.done ? "Done" : "Pending"}`);
            
        })
    }
}

const todo = new TodoList();
todo.addTask("Learn JS Classses")
todo.addTask("Build a project");
todo.completeTask(0);
todo.listTasks()


class Temperature{
    constructor(celcius){
        this.celcius = celcius
    }
    toFahrenheit(){
        return (this.celcius * 9) / 5 + 32
    }
    static fromFahrenheit(f){
        return new Temperature(((f - 32) * 5)/ 9)
    }
}

const temp = new Temperature(25);
console.log(temp.toFahrenheit());
const fromF = Temperature.fromFahrenheit(98.6)
console.log(fromF.celcius);


class Counter{
    constructor(){
        this.count = 0
    }
    increment(){
        this.count++
        return this
    }
    decrement(){
        this.count--
        return this
    }
    show(){
        console.log(`Count : ${this.count}`);
        return this
    }
}

const counter = new Counter();
counter.increment().increment().decrement().show();

class Animal2{
    constructor(name){
        this.name = name
    }
}
console.log(new Animal("Dog"));

class Carss{
    constructor(brand, year){
        this.brand = brand;
        this.year = year
    }

}
console.log(new Carss("Honda", 2020));

class Laptop{
    constructor(model){
        this.model = model;
    }
}
console.log(new Laptop("Macbook Air"));


class User{
    constructor(username, email){
        this.username = username;
        this.email = email
    }
}
console.log(new User("john_doe", "john@example.com"));

class Book{
    constructor(title, author){
        this.title = title;
        this.author = author
    }
}
console.log(new Book("1984", "George Orwell"));


class Product{
    constructor(name, price){
        this.name = name;
        this.price = price
    }
}
console.log(new Product("Pen", 10));


class Point{
    constructor(x, y){
        this.x = x;
        this.y = y
    }
}
console.log(new Point(5, 10));


class Person1{
    constructor(name){
        this.name = name
    }
    greet(){
        return `Hello, I'm ${this.name}`
    }
}
console.log(new Person1("Alice"). greet());


class Rectangle1{
    constructor(w, h){
        this.w = w;
        this.h = h;
    }
    area(){
        return this.w * this.h
    }
}

console.log(new Rectangle1(4, 5).area());


class BMI{
    constructor(weight, height){
        this.weight = weight;
        this.height = height
    }
    calculate(){
        return (this.weight / (this.height ** 2)).toFixed(2)
    }
}
console.log(new BMI(65, 1.7).calculate());


class Temp{
    constructor(celcius){
        this.celcius = celcius
    }
    toF(){
        return(this.celcius * 9) / 5+ 32
    }
}

console.log(new Temp(30).toF());


class StringTool{
    constructor(text){
        this.text = text
    }
    reverse(){
        return this.text.split("").reverse().join("")
    }
}
console.log(new StringTool("hello").reverse());


class Product1{
    constructor(price){
        this.price = price
    }
    discount(percent){
        return this.price - (this.price * percent) / 100
    }
}
console.log(new Product1(100).discount(20));


class Care{
    constructor(distance, time){
        this.distance = distance;
        this.time = time
    }
    speed(){
        return this.distance / this.time
    }
}

console.log(new Care(100, 2).speed());


class Vehicle1{
    move(){return "Moving"}
}
class Car6 extends Vehicle1{}
console.log(new Car6().move);
    

class Person2{
    greet(){ return "Hello"}
}
class Student1 extends Person2 {
    study() { return "Studying"}
}

// console.log(new Student1().greet(), new Student1.study());

class Shape{
    area(){return 0;}
}
class Circle extends Shape{
    constructor(r) {super(); this.r = r}
    area() {return Math.PI* this.r ** 2}
}
console.log(new Circle(5).area());

class Animal3{
    sound(){return "some sound"}
}
class Dog extends Animal3{
    sound(){return "Woof"}
}
console.log(new Dog().sound());


class Account{
    constructor(balance) {this.balance = balance}
}

class SavingsAccount extends Account{
    addInterest(rate){
        this.balance += this.balance * rate;
        return this.balance
    }
}

console.log(new SavingsAccount(1000).addInterest(0.05));

class Device{
    turnOn() {return "Device is On"}
}
class Phone extends Device{
    call() { return "Calling..."}
}

console.log(new Phone().turnOn(), new Phone().call());


class Employee{
    constructor(name){ this.name = name}
}
class Manager extends Employee{
    assignTask(){ return `${this.name} assigned a task`}
}

console.log(new Manager("Alice").assignTask())


class Bank {
    constructor(balance){
        this._balance = balance;
    }
    get balance(){ return this._balance};
    set balance(val){if(val>=0) this._balance = val}
}

const b = new Bank(500);
b.balance = 1000;
console.log(b.balance);


class Temp1{
    constructor(celcius){
        this._c = celcius;
    }
    get f(){return (this._c * 9/5) + 32};
    set f(val){ this._c = (val - 32) * 5/ 9}
}

const t = new Temp1(0);
t.f = 212;
console.log(t._c);


class User2{
    constructor(username){ this._username = username};
    get username(){return this._username}
    set username(val){ if(val.length >= 3) this._username = val}
}

const u = new User("Bob");
u.username = 'Al';
console.log(u.username);


class Rect{
    constructor(w, h){
        this._w = w;
        this._h = h
    }
    get area(){return this._w * this._h}
}

console.log(new Rect(4, 5).area);


class Cari{
    constructor(distance, time){
        this._distance = distance;
        this._time = time
    }
    get speed(){
        return this.distance / this._time
    }
}
console.log(new Cari(100, 2).speed);


class Product2{
    constructor(fname, lname){this._fname = fname; this._lname = lname}
    get fullname(){
        return `${this._fname} ${this._lname}`
    }
}

console.log(new Product2("John", "Doe").fullname);


class Person3{
    constructor(price){ this._price = price}
    get price(){ return `${this._price}`}
}
console.log(new Person3(99).price);


class MathUtils1{
    static add(a, b){ return a+ b;}
    static sub(a, b) {return a - b}
}

console.log(MathUtils1.add(2, 3));


class Converter{
    static toUpper(str){ return str.toUpperCase()}
}

console.log(Converter.toUpper("hello"));


class DateHelper{
    static today(){ return new Date().toDateString()}
}

console.log(DateHelper.today());


class Counter1{
    static count = 0;
    static increment(){ return ++this.count}
}
console.log(Counter1.increment());


class StringTools{
    static reverse(str){ return str.split('').reverse().join('')}
}
console.log(StringTools.reverse("abc"));

class Geometry{
    static circleArea(r){
        return Math.PI *r ** 2;
    }
}
console.log(Geometry.circleArea(5));



class NumberCheck{
    static isEven(num){ return num % 2 === 0}
}

console.log(NumberCheck.isEven(4));
