//Object definitions

const user1 = {name: "Alice", age:25 };
console.log(user1);

const user2 = new Object();
user2.name = "Bob";
user2.age = 22;
console.log(user2);

const proto = { greet(){ console.log("Hello");}};
const user3 = Object.create(proto);
user3.name = "Charlie";
user3.greet();

const user4 = {
    name: "Disney",
    address: {city: "Paris", country:"France"}
}
console.log(user4.address.city);

const prop = "score";
const user5 = { [prop]: 95};
console.log(user5);

let name6 = "Eve", age6 = 23;
const user6 = {name6, age6}
console.log(user6);

const user7 = {
    name: "Frank",
    sayHi(){ console.log(`Hi, I'm ${this.name}`)}
}
user7.sayHi();

const user8 = {"fullname": "George Smith"};
console.log(user8["full name"]);

const user9 = {};
user9.id = 101;
user9.active = true;
console.log(user9);

function createUser(name, age){
    return {name, age}
}
console.log(createUser("Hannah", 29));

const part1 = {a: 1};
const part2 = {b: 2};
const combined = Object.assign({}, part1, part2);
console.log(combined);

const original = {lang: "JS", level: "Beginner"};
const clone = {...original};
console.log(clone);

const users = [{name: "Ivy"}, {name: "Jack"}];
console.log(users[1].name);

const id= Symbol("id");
const users14 = {[id]: 123, name:"KIM"};
console.log(users14[id]);

const frozenUser = Object.freeze({role: "Admin"});
frozenUser.role = "User";
console.log(frozenUser);

//JS Objects – Object Constructors

function User(name, age){
    this.name = name;
    this.age = age
}
const user11 = new User("Alice", 23);
console.log(user11);

function Person(name){
    this.name = name;
    this.sayHello = function(){
        console.log(`Hi, I'm ${this.name}`)
    }
}
const person1 = new Person("Bob");
person1.sayHello();

function Car(brand = "Toyota", year = 2020){
    this.brand = brand;
    this.year = year
}
console.log(new Car());

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages
}
console.log(new Book("1984", "Orwell", 328));

function Animal(type){
    this.type = type 
}
Animal.prototype.speak = function(){
    console.log(`${this.type} makes a sound`)
}
const dog = new Animal("Dog");
dog.speak();

function Student(name, grade){
    this.name = name;
    this.grade = grade
}
function CollegeStudent(name, grade, major){
    Student.call(this, name, grade);
    this.major = major
}
const cs = new CollegeStudent("Eve", "A", "CS");
console.log(cs);

function Product(name, price){
    if(price < 0) throw new Error("Price can not be negative");
    this.name = name;
    this.price = price
}
console.log(new Product("Laptop", 999));

console.log(user1 instanceof User);
console.log(dog instanceof Animal)

function SpecialUser(name){
    return {customName: name}
}
console.log(new SpecialUser("Frank"));


function BankAccount(balance){
    let _balance = balance;
    this.deposit = (amount) => _balance += amount;
    this.getDeposit = () => _balance
}
const acc = new BankAccount(100);
acc.deposit(50);
console.log(acc.getDeposit());

class Laptop{
    constructor(brand, model){
        this.brand = brand;
        this.model = model
    }
}
console.log(new Laptop("Dell", "XPS"));

class Phone{
    constructor(brand){
        this.brand = brand;
    }
    call(){
        console.log(`Calling from ${this.brand}`)
    }
}
new Phone("iphone").call();

class SmartPhone extends Phone{
    constructor(brand, os){
        super(brand)
        this.os = os
    }
}
console.log(new SmartPhone("Samsung", "Android"));

class MathUtils{
    static add(a, b){
        return a + b
    }
}
console.log(MathUtils.add(5, 3));


function Shape(type){
    this.type = type;
}
Shape.prototype.draw = function(){
    console.log(`Drawing ${this.type}`)
}
const circle = Object.create(Shape.prototype);
Shape.call(circle, "Circle");
circle.draw()