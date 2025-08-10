class Person{
    constructor(name, age){
        this.name = name,
        this.age = age
    }


greet(){
    console.log(`Hi, I'm ${this.name} and 'I'm ${this.age} years old `);
}
}

let user = new Person("Alice", 20);
user.greet();

class Car{
    constructor(brand){
        this.brand = brand
    }
    showBrand(){
        console.log(`Brand: ${this.brand}`);
    }
}

new Car("Telsa").showBrand();

class Dog{
    constructor(name){
        this.name = name
    }
    bark(){
        console.log(`${this.name} says woof`);
    }
    eat(food){
        console.log(`${this.name} eats ${food}`);
    }
}

let d = new Dog("Max")
d.bark();
d.eat("Bones")

class Laptop{
    constructor(brand = "Generic"){
        this.brand = brand
    }
}

console.log(new Laptop().brand);


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


class Phone{
    constructor(model){
        this.model = model
    }
}

let p = new Phone("iphone 14");
p.color = "Black"
console.log(p);


let Animal = class{
    speak(){
        console.log("Animal speaks");
    }
}

new Animal().speak()