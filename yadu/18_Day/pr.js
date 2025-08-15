const user1 = {name: "Alice", age: 25};
const {name, age } = user1;
console.log(name, age);

const user2 = {name: "Bob", age: 30};
const {name: fullName, age: years} = user2;
console.log(fullName, years);

const user3 = {name: "Carol"};
const {name: n, age: a = 19} = user3;
console.log(n, a);

const user4 = {name: "Dave", address: {city: "Paris", country: "France"}}
const {address: {city, country}} = user4;
console.log(city. country);

function greet({name, age}){
    console.log(`Hello ${name}, age ${age}`);
    
}
greet({name: "Eve", age:22})

const user5 = {id: 1, name: "Frank", role: "Admin"}
const {id, ...rest} = user5;
console.log(id, rest);

const user6 = {username: "Grace"};
const {username: userName = "Guest"} = user6;
console.log(userName);

const user7 = {first: "Hank", last: "smith", age: 40};
const {first} = user7;
console.log(first);

function getUser(){
    return { name: "Ivy", age: 35}
}
const {name: nm, age: ag} = getUser();
console.log(nm, ag);

const prop = "title";
const book = {title: "1984", author:"Orwell"};
const {[prop]: bookTitle} = book;
console.log(bookTitle);

const company = {name: "TechCorp", details: {location: "NY"}};
const {details: {location, funded = 2000}} = company;
console.log(location, funded);

// const users = [{id:1, name: "Jack"}, {id: 2, name: "KETE"}] 
// for(const {id, name} of users){
//     console.log(id, name);
    
// };

// const colors = {primary : "red", secondary: "blue", tertiary: "green"};
// const { primary: p,  tertiary: t} = colors
// console.log(p, t);

const obj = {items: ["pen", "pencil", "eraser"]};
const {items: [firstItem, secondItem]} = obj;
console.log(firstItem, secondItem);
