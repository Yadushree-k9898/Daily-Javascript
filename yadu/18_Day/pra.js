const obj1 = {};
console.log(Object.getPrototypeOf(obj1));

function Person(name){
    this.name = name
}
Person.prototype.sayHello = function(){
    console.log(`Hello, I'm ${this.name}`)
}
const p1 = new Person("Alice");
p1.sayHello();

console.log(p1.toString());

const animal = { eat() { console.log("Eating")}};
const dog = { bark() { console.log("Barking");
}}
Object.setPrototypeOf(dog, animal);
dog.eat()
dog.bark();

const proto = { greet() { console.log("Hi, there")}};
const user = Object.create(proto);
user.greet();

function Car(brand){
    this.brand = brand
}
Car.prototype.drive = function (){
    console.log(`${this.brand} is driving`)
}
const c1 = new Car("Tesla");
const c2 = new Car("BMW");
c1.drive();
c1.drive();

c1.drive = function(){
    console.log(`${this.brand} zooms fast!`)
}
c1.drive();
c2.drive();

console.log("drive" in c2);
console.log(c2.hasOwnProperty("drive"));

function Book(title){
    this.title = title;
}
const b1 = new Book("1984");
console.log(b1.hasOwnProperty("title"));

function Animal(type){
    this.type = type
}
Animal.prototype.speak = function(){
    console.log(`${this.type} makes a sound`)
}
function Dog(breed){
    Animal.call(this, "Dog")
    this.breed = breed
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
const d1 = new Dog("Labrador");
d1.speak();

Dog.prototype.fetch = function(){
    console.log(`${this.breed} is fetching`)
};
d1.fetch();

class Laptop{
    constructor(brand){
        this.brand = brand
    }
    start(){
        console.log(`${this.brand} is starting`)
    }
}
const l1 = new Laptop("Dell");
l1.start();

const arr1 = [1, 2, 3];
console.log(arr1.__proto__ === Array.prototype);

Array.prototype.last = function(){
    return this[this.length - 1]
}
console.log([10, 20, 30].last());

console.log(Object.getPrototypeOf(d1));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(d1)));

