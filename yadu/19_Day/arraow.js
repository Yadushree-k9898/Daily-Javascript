const greet = () => console.log("Hello");
greet();

const square = x => x * x 
console.log(square(5));

const add = (a, b) => a + b
console.log(add(3, 7))

const sayHi = () => "Hi there";
console.log(sayHi());

const person = (name, age) => ({name, age});
console.log(person("Alice", 22));

setTimeout(() => console.log("Timeout is done!"), 1000
)
const nums = [1, 2, 3];
const squares = nums.map(n => n * n);
console.log(squares);

const evens = nums.filter(n => n % 2 === 0);
console.log(evens);

const sum = nums.reduce((acc, n) => acc+ n, 0);
console.log(sum);

const double = n => n * 2;
console.log(double(3));

const triple = n => { return n * 3};
console.log(triple(3));

nums.forEach(n => console.log(n)
)
// document.body.addEventListener('click', ()=> console.log("Body clicked")
// )

const outer = () => () => "Inner from arrow";
console.log(outer()());

const callFn = (fn = () => "Default") => fn();
console.log(callFn());

const obj = {
    show:() => "Arrow in object"
}
console.log(obj.show());

class Car{
    constructor(make){
        this.make = make
    }
    getMake = () => this.make
}
const c = new Car("Tesla");
console.log(c.getMake());


const obj2 = {
    name: "JS",
    normal: function(){
        console.log("Normal:", this.name)
    },
    arrow: () => {
        console.log("Arrow:", this.name)
    }
}
obj2.normal();
obj2.arrow();

const sumAll = (...nums) => nums.reduce((a, b) => a+b, 0);
console.log(sumAll(1, 2, 3, 4, 5));
 
const fullName = ({first, last}) => `${first} ${last}`;
console.log(fullName({first: "Ada", last: "Loveable"}));

const makeArray = () => [1, 2, 3];
console.log(makeArray());

// let counter = 0;
// const id = setInterval(() =>{
//     console.log("Count:", ++counter);
//     if(counter === 3) clearInterval(id)
// }, id)

const mix = (a=1, ...rest) => a + rest.length;
console.log(mix(5, 6, 7));

const fetchData = () => new Promise(resolve =>{
    setTimeout(() => resolve("Data received"), 500)
})
fetchData().then(res => console.log(res)
);

(() => console.log("Arrow IIFE executee")
)