function greet(){
    console.log("Hello!");
}
greet()

function add(a, b){
    return a + b
}
console.log(add(2, 3));

const sayHi = function(){
    return "Hi"
}
console.log(sayHi());

const square = x => x * x;
console.log(square(4));

(function (){
    console.log("IIFE Executed");
    
})()

// (() => console.log("Arrow IIFE exexcuted"))()

const obj = {
    name: "JS",
    showName: function(){
        console.log(this.name);
        
    }
}
obj.showName();

const obj2 = {
    name: "JS",
    arrow : () => console.log(this.name)
    
};
obj2.arrow()

for(let i = 0; i < 3; i++){
    (function(n){
        console.log("Loop:", n);
        
    })(i)
};

function countDown(n){
    if(n === 1) return;
    console.log(n);
    countDown(n -1)
}
countDown(3);

function runTask(cb){
    cb()
}
runTask(() => console.log("Task done")
);

// document.addEventListener('click', () => console.log("Clicked")
// )

const funcs = [
    () => "A",
    () => "B",

]
console.log(funcs[1]());

function outer(){
    function inner(){
        return "Innner called"
    }
    return inner
}
console.log(outer());

setTimeout(() => console.log("Timout function"), 500
);

let c = 0;
const id = setInterval(() =>{
    console.log("Interval", ++c);
    if(c === 2) clearInterval(id)
}, 300);

function Car(make){
    this.make = make
}
const car1 = new Car("Tesla");
console.log(car1.make);

class Person{
    constructor(name){
        this.name = name
    }
}
const p = new Person("Alice");
console.log(p.name);

function introduce(city, country){
    console.log(`${this.name} from ${city}, ${country}`);
    
}
introduce.apply({name: "Bob"}, ["Paris", "France"])

introduce.call({name: "Charlie"}, "london", "UK")

const boundIntro = introduce.bind({name: "Diana"}, "Berlin", "Germany");
boundIntro();

const nums = [];
const doubled = nums.map(n => n * 2);
console.log(doubled);

const sum = nums.reduce((a, b) => a + b, 0)
console.log(sum);

new Promise(resolve => resolve("Done")).then(res => console.log(res)
);

function risky(){
    throw new Error("Oops")
}
try{
    risky();
}catch(e){
    console.log("Catch:", e.message);
    
}