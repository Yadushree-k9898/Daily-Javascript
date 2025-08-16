console.log(this);

function testStrict(){
    console.log(this);
    
}
testStrict();

const obj1 = {
    sayName: function(){
        console.log(this.name)
    }
}
obj1.sayName();

const obj2 = {
    name: "Bob",
    sayName: () =>{
        console.log(this.name)
    }
}
obj2.sayName();

const person = {
    name: "Charlie",
    say(){
        console.log(this.name)
    }
}
const another = {name: "David"};
another.say = person.say;
another.say();

function Car(make){
    this.make = make
}
const c1 = new Car("Tesla");
console.log(c1.make);

class Dog{
    constructor(name){
        this.name = name
    }
    bark(){
        console.log(this.name + " says Woof!")
    }
}
new Dog("Rocky").bark();

// document.body.addEventListener("click", function(){
//     console.log(this)
// })
// document.body.addEventListener("click", ()=>{
//     console.log(this)
// })

function greet(){
    console.log("Hello " + this.name)
}
greet.call({name: "Eva"});

greet.apply({name: "Frank"});

const bound = greet.bind({name: "Grace"});
bound()

setTimeout(function (){
    console.log("setTimeout arrow:", this);
    
}, 500);

const obj3 = {
    name: "Helen",
    outer: function(){
        function inner(){
            console.log(this)
        }
        inner()
    }
}
obj3.outer();

const obj4 = {
    name: "Ian",
    outer: function(){
        const inner = () => {
            console.log(this.name);
            
        }
        inner()
    }
}
obj4.outer();

[1,2, 3].forEach(function (n){
    console.log(this);
    
});

[1, 2, 3].forEach(function (n){
    console.log(this.label, n);
    
}, { label: "item"});

class Counter{
    constructor(){
        this.count = 0;
        setInterval(() =>{
            this.count++
            console.log(this.count);
            
        }, 3000)
    }
}
new Counter();

const obj5 = {
    name: "JS",
    say(){
        console.log(this.name);
        
    }
}
const ref = obj5.say;
ref();
const fixed = obj5.say.bind(obj5)
fixed();

const obj6 = {
    a: 10,
    get value(){
        return this.a
    }
}
console.log(obj6.value);


const obj7 = {
    a: 0,
    set value(v){
        this.a = v
    }
}
obj7.value = 42;
console.log(obj7.a);


const obj8 = {
    val: 100,
    method: function(){
        const arrow = () => console.log(this.val);
        arrow()
    }
}
obj8.method()

class MathUtil{
    static showThis(){
        console.log(this);
        
    }
}
MathUtil.showThis()