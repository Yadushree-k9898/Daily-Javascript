class MathHelper{
    static add(a, b){
        return a + b
    }
}
console.log(MathHelper.add(3, 4));

class Counter{
    static count = 0
}
console.log(Counter.count);

class Counter1{
    static count = 0;
    static increment(){
        Counter1.count++
    }
}
Counter1.increment();
console.log(Counter1.count);

class Greetings{
    static hello(){
        return "Hello world"
    }
}
console.log(Greetings.hello());

class Test{
    static sayHi(){
        console.log("Hi");
    }
}
const obj = new Test();
Test.sayHi();

class Config{
    static API_URL="https://api.example.com"
}
console.log(Config.API_URL);

class Utils{
    static isEven(num){
        return num % 2 === 0;
    }
}
console.log(Utils.isEven(4));

class Counter2{
    static count = 10
}
console.log(Counter2.count);

class User{
    static totalUsers = 0;
    constructor(){
        User.totalUsers++
    }
}
new User();
new User();
console.log(User.totalUsers);

class Car{
    constructor(model){
        this.model = model
    }
    static createHonda(){
        return new Car("Honda")
    }
}
console.log(Car.createHonda());

class Parent{
    static greet(){
        console.log("Hello from Parent");
    }
}
class Child extends Parent{};
Child.greet();

class Parent1{
    static info(){
        return "Parent class"
    }
}
class Child1 extends Parent1{
    static info(){
        return "Child class"
    }
}
console.log(Child1.info());

class Parent2{
    static greet(){
        return "Hi from Parent"
    }
}
class Child2 extends Parent2{
    static greet(){
        return super.greet() + " and Child"
    }
}
console.log(Child2.greet());

class School{
    static totalStudents = 0;

}
class ClassRoom extends School {};
ClassRoom.totalStudents = 50;
console.log(School.totalStudents);

class Shape{
    constructor(name){
        this.name = name
    }
    static createCircle(){
        return new Shape("Circle")
    }
}
class Polygon extends Shape{}
console.log(Polygon.createCircle());


class IDGenerator{
    static lastID = 0;
    static next(){
        return ++this.lastID
    }
}
console.log(IDGenerator.next());
console.log(IDGenerator.next());

class Currency{
    static convertUSDToINR(usd){
        return usd * 3
    }
}
console.log(Currency.convertUSDToINR(5));

class Validator{
    static isEmail(str){
        return /\S+@\S+\.\S+/.test(str)
    }
}

console.log(Validator.isEmail("test@gmail.com"));

class Singleton{
    static instance;
    constructor(){
        if(Singleton.instance) return Singleton.instance;
        Singleton.instance = this
    }
}

const s1 = new Singleton();
const s2 = new Singleton();
console.log(s1 === s2);

class Person{
    static count = 0;
    constructor(name){
        this.name = name;
        Person.count++
    }
}
new Person("A");
new Person("B");
console.log(Person.count);


class Config1{
    static load(){
        console.log("Config loaded");
    }
}
Config1.load();

class Formatter{
    static capitalize(str){
        return str.charAt(0).toUpperCase()+ str.slice(1)
    }
}
console.log(Formatter.capitalize("yadushree"));

class Cache{
    static store = {};
    static add(key, value){
        this.store[key] = value;
    }
}
Cache.add("User", "Alice");
console.log(Cache.store);

class MyMath{
    static PI = 3.14159;
    static multiply(a, b){
        return a * b
    }
}
console.log(MyMath.multiply(2, 3));
