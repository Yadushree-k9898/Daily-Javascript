class Animal{
    speak(){
        console.log("Animal makes a sound");
    }
}
class Dog extends Animal{};
new Dog().speak();

class Animal1{
    speak(){
        console.log("Animal sound");
    }
}
class Dog1 extends Animal1{
    bark(){
        console.log("Woof!");
    }
}
const d = new Dog1();
d.speak()
d.bark();

class Animal2{
    constructor(name){
        this.name = name
    }
}
class Dog2 extends Animal2{
    constructor(name, breed){
        super(name)
        this.bread = breed
    }
}
console.log(new Dog2("Max", "Labrador"));


class Animal3{
    speak(){
        console.log("Animal sound");
    }
}
class Dog3 extends Animal3{
    speak(){
        console.log("Bark");
    }
}
new Dog3().speak();

class Animal4{
    speak(){
        console.log("Animal sound");
    }
}
class Dog4 extends Animal4{
    speak(){
        super.speak();
        console.log("Bark!");
    }
}
new Dog4().speak();

class Vehicle{
    constructor(type){
        this.type = type
    }
}
class Car extends Vehicle{
    constructor(type, brand){
        super(type);
        this.brand = brand
    }
}
console.log(new Car("Car", "Toyota"));

class Person{
    constructor(name){
        this.name = name
    }
}
class Student extends Person{
    introduce(){
        console.log(`Hello, I am ${this.name}`)
    }
}
new Student("Alice").introduce();

class LivingThing{};
class Animal5 extends LivingThing{};
class Dog5 extends Animal5{};
console.log(new Dog5 instanceof LivingThing);


class LivingThing1{
    breathe(){
        console.log("Breathing...");
    }
}
class Animal6 extends LivingThing1{};
class Dog6 extends Animal6{};
new Dog6().breathe();

class Vehicle1{
    start(){
        console.log(`${this.name} is starting`);
    }
}
class Bike extends Vehicle1{
    constructor(name){
        super();
        this.name = name
    }
}
new Bike("Yamaha").start();

class Shape{
    area(){
        return 0
    }
}
class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius
    }
    area(){
        return Math.PI * this.radius * this.radius
    }
}

console.log(new Circle(3).area().toFixed(2));


class Greeter{
    greet(name){
        console.log(`Hello, ${name}`);
    }
}
class FriendlyGreeter extends Greeter{
    greet(name, mood){
        console.log(`Hello, ${name}. You seem ${mood}`);
    }
}
new FriendlyGreeter().greet("Bob", "Happy")

class Computer{
    powerOn(){
        console.log("Computer is on");
    }
}
class Laptop extends Computer{
    batteryStatus(){
        console.log("Battery at 80%");
    }
}

const lap = new Laptop();
lap.powerOn();
lap.batteryStatus();

class Myarray extends Array{
    sum(){
        return this.reduce((a, b) => a+b, 0)
    }
}
console.log(new Myarray(1, 2, 3).sum());

class MyDate extends Date{
    getFormatted(){
        return `${this.getDate()}-${this.getMonth()}-${this.getFullYear()}`
    }
}

console.log(new MyDate().getFormatted());


class Employee {
    constructor(name){
        this.name = name;
    }
}
class Manager extends Employee{
    approveLeave(){
        console.log(`${this.name} approved leave`);
        
    }
}
new Manager("John").approveLeave();

class Account{
    constructor(balance){
        this.balance = balance
    }
}
class SavingsAccount extends Account{
    addInterest(){
        this.balance *= 1.05
    }
}

const acc = new SavingsAccount(1000);
acc.addInterest();
console.log(acc.balance);


class Character {
    constructor(name){
        this.name = name;
    }
}

class Hero extends Character{
    attack(){
        console.log(`${this.name} attacks!`);
    }
}
new Hero("Knight").attack();

class Transport{
    move(){
        console.log("Moving...");
    }
}
class Airplane extends Transport{
    move(){
        console.log("Flying in the sky");
        
    }
}

new Airplane().move();

class Shape1{}
class Square extends Shape1{};
class Triangle extends Square{};
console.log(new Square() instanceof Shape1);


class Parent {
    greet(){
        console.log("Hello from parent");
        
    }
}
class Child extends Parent{
    greet(){
        super.greet();
        console.log("Hello from child");
    }
}
new Child().greet();


class Machine{
    powerOn(){
        console.log("Machine ON");
        return this;
    }
}
class Printer extends Machine{
    print(){
        console.log("printing...");
        return this
    }
}
new Printer().powerOn().print();

class Parent1{
    showName(){
        console.log(`Name: ${this.name}`);
    }
}

class Child1 extends Parent1{
    constructor(name){
        super();
        this.name = name
    }
}
new Child1("Alice").showName();

class Person1{
    constructor(name, age){
        this.name = name;
        this.age = age
    }
}
class Teacher extends Person1{
    constructor(name, age, subject){
        super(name, age);
        this.subject = subject
    }
}
console.log(new Teacher("Bob", 40, "Math"));

class Vehicle2{
    start(){
        console.log("Vehicle started");
    }
}
class Bus extends Vehicle2{};
class Train extends Vehicle2{};
new Bus().start();
new Train().start()