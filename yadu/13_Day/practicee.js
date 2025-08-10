const user = {
    name: "Yadu",
    greet(){
        console.log(`Hi, I'm ${this.name}`);        
    }
}
user.greet();

function sayHi(){
    console.log(this.name);
}
const obj1 = {name: "Bob", sayHi};
obj1.sayHi();

const hi = obj1.sayHi;
hi()

const team = {
    name: "Warriors",
    coach:{
        name: "steave",
        introduce(){
            console.log(this.name);   
        }
    }
}

team.coach.introduce();

const arrowObj = {
    name: "Charlie",
    say:() => {
        console.log(this.name);
    }
}

arrowObj.say()

const fixedObj = {
    name: "Charlie",
    say(){
        console.log(this.name);
        
    }
}
fixedObj.say()

function greet(){
    console.log(`Hello, ${this.name}`);
}

const person1 = {name: "Dan"};
const boundGreet = greet.bind(person1);
boundGreet();

greet.call({name: "Eleven"});

greet.apply({name: "Frank"});

const nestedExample = {
    name: "Nested",
    outer(){
        function inner(){
            console.log(this.name); 
        }
        inner()
    }
}

nestedExample.outer();

function Personn(name){
    this.name = name
}

const p1 = new Personn("Alice");
console.log(p1.name);

function Cars(make, model){
    this.make = make;
    this.model = model;
    this.describe = function(){
        console.log(`${this.make} ${this.model}`);
    }
}

const car1 = new Cars("Toyota", "Camry");
car1.describe();

const c2 = new Cars("Honda", "Civic");
c2.describe();

function User(name = "Guest"){
    this.name = name
}

console.log(new User().name);


function Counter(){
    this.count = 0;
    this.increment = function(){
        this.count++
    }
}

const c1 = new Counter();
const c3 = new Counter();
c1.increment();
console.log(c1.count);
console.log(c3.count);

function Animal(type){
    this.type = type 
}
Animal.prototype.speak = function(){
    console.log(`${this.type} makes a sound`);
    
}
const dog = new Animal("Dog");
dog.speak();

function Test(){
    this.value = 42;
    return {msg: "Overridden"}
}

console.log(new Test());


function Bad(name){
    this.name = name
}

const b = Bad("Opps");
console.log(b);


const now = new Date();
console.log(now.getFullYear());


const regex = new RegExp("\\d+");
console.log(regex.test("123"));


const user1 = {};

console.log(user1.address?.city);


const user2 = {
    profile: {name: "Alice"}
}

console.log(user2.profile?.name);
console.log(user2.profil?.age);

const obj2 = {
    greet(){return "Hii"}
}

console.log(obj2.greet?.());
console.log(user1.sayHi?.());

const arr = [1, 2, 3];
console.log(arr?.[1]);
console.log(null?.[0]);


let func = null;
console.log(func?.());


const settings = null;
console.log((settings?.theme || "default"));

const config = {timeout: null};
console.log(config?.timeout ?? 3000);

const apiResponse = {user: {details: {email: "a@b.com"}}}
console.log(apiResponse.user?.details?.email);


try{
    console.log(apiResponse.user.profil.email);
}catch(err){
    console.log("Error: ", err.message);
}