let arr = new Array();
let arrr = []

let fruits = ['apple', 'grape', 'banana'];

console.log(fruits[0]);
console.log(fruits[2]);
fruits[2] = 'pear';
console.log(fruits);

fruits[3] = 'lemon';

console.log(fruits);
console.log(fruits.length);

let arrs = ['Apple', {name: 'John'}, true, function(){
    console.log('Hello');
    
}]

console.log(arrs);


console.log(arrs[1].name);
console.log(arrs[3]()
);


let fruitss = [
    "apple",
    "banana",
    "grape",
    "plum"
]

console.log(fruitss.at(-1));
console.log(fruits.length - 1);
console.log(fruitss.pop());
console.log(fruitss);

console.log(fruitss.push("pear"));

console.log(fruitss.shift());
console.log(fruitss);

console.log(fruitss.unshift());
console.log(fruitss);


let arri = ["apple", "banana", "cherry", "plum"];
for(let fruit of arri){
    console.log(fruit);
    
}


let a = ["a", "b"];
a.push(function (){
    console.log(this);
    
})

a[2]();

let a1 = ["i", "go", "home"];

delete a1[1]

console.log(a1);


console.log(a1.length);
