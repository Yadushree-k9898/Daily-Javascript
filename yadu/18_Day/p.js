//this Keyword
const user1 = {
    name: "Alice",
    greet: function(){
        console.log(`Hi, I'm ${this.name}`)
    }
}
user1.greet();
console.log(this);
"use strict"
function showThisStrict(){
    console.log(this)
}
showThisStrict()

function showThis(){
    console.log(this)
}
showThis();

const arrowExample = {
    name: "Bob",
    arrow: () =>  console.log(this.name)  
}
arrowExample.arrow();

const arrpwInsideMethod ={
    name:"Carol",
    method:function(){
        const arrow = () => console.log(this.name);
        arrow()
    }
}
arrpwInsideMethod.method();

function greetBind(){
    console.log(`Hello, ${this.name}`)
}
const personA = {name: "David"};
const boundGreet = greetBind.bind(personA);
boundGreet();

function greetCall(age){
    console.log(`Hello, ${this.name}, age ${age}`)
}
greetCall.call({name: "Eve"}, 28)

greetCall.apply({name: "Frank"}, [40]);

function User(name){
    this.name = name
}
const u1 = new User("Grace");
console.log(u1.name);

class Car{
    constructor(brand){
        this.brand = brand
    }
    showBrand(){
        console.log(this.brand)
    }
}
new Car("Tesla").showBrand();

const obj = {
    name: "Henry",
    sayName(){ console.log(this.name)}
}
const extracted = obj.sayName;
extracted()

const fixed = obj.sayName.bind(obj);
fixed();
setTimeout(function (){
    console.log(this)
}, 100);

setTimeout(() =>{
    console.log(this);
    
}, 100);

