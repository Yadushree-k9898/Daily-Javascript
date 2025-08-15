const person = {name: "Alice"};
console.log(person.name);

const person1 = {name: "Alice"};
console.log(person1["name"]);

const key  = "age";
const person2 = {age: 25};
console.log(person2[key]);

const car = {};
car.brand = "Toyota";
console.log(car);

const user = {score: 10};
user.score = 20;
console.log(user.score);

const obj = {a: 1, b: 2};
delete obj.b;
console.log(obj);

const user1 = {name: "Bob", age: 30};
console.log(Object.keys(user1));

const user2 = {name: "Bob", age: 30};
console.log(Object.values(user2));

const user3 = {name: "Bob", age: 30};
console.log(Object.entries(user3));

const obj1 = {a: 1};
console.log("a" in obj1);
console.log(obj1.hasOwnProperty("b"));

const settings = {};
console.log(settings.theme || "light");

const user4 = {name: "Alice", age: 30};
const {name, age} = user4;
console.log(name, age);

const person3 = {address: {city: "Paris"}};
console.log(person3.address.city);

const person4 = {address: null};
console.log(person4.address?.city);

const obj2 = {};
Object.defineProperty(obj, "name", {
    value: "John",
    writable: false
});
console.log(obj.name);
obj2.name = "Mike";
console.log(obj2.name);

