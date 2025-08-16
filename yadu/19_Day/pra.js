const obj1 = {};
console.log(obj1);

const obj2 = {name: "Alice", age: 22};
console.log(obj2);

const obj3 = new Object({city: "Paris"});
console.log(obj3);

obj2.country = "France";
console.log(obj2);

const user ={
    name: "bob",
    address : {city: "London", zip:"12345"}
}
console.log(user.address.city);

const key = "score";
const obj4 = {[key]: 95};
console.log(obj4);

const age = 30, name = "Eve";
const obj5 = {name, age};
console.log(obj5);

const obj6 = Object.freeze({id:1})
console.log(obj6);

const obj7 = {
    greet(){
        return "Hello"
    }
}
console.log(obj7.greet());

const proto = { type: "Animal"};
const dog = Object.create(proto);
dog.name = "Rockey"
console.log(dog.type, dog.name);


function Person(name, age){
    this.name = name;
    this.age = age
}
const p1 = new Person("Alice", 25);
console.log(p1);

function Car(make, model){
    this.make = make;
    this.model = model;
    this.info = function(){
        return `${this.make} ${this.model}`
    }
}
console.log(new Car("Tesla", "Model 3").info());

class User{
    constructor(username){
        this.username = username
    }
}
console.log(new User("Charlie"));

function Book(title){
    this.title = title
}
Book.prototype.author = "Unknown";
const b = new Book("JS Guide");
console.log(b.author);


function Student(name){ this.name = name};
const s1 = new Student("Mike"), s2 = new Student("Lucy");
console.log(s1, s2);


function Product(name, price=0){
    this.name = name;
    this.price = price
}
console.log(new Product("Pen"));


function Laptop(brand){
    return { brand: brand, type: "Laptop"}
}
console.log(new Laptop("Delhi"));


function Employee(name, dept){
    this.name = name;
    this.department = {dept}
}
console.log(new Employee("Nina", "HR"));


function createUser(name, role){
    return { name, role} ;

}
console.log(createUser("Yadu", 'admin'));


function Animal(type) { this.type = type}
const cat = Object.create(Animal.prototype);
cat.type = "Cat";
console.log(cat.type);
