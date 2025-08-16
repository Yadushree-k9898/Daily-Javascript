const obj = {
    name: "Alice",
    greet() { console.log(this.name);
    }
}
obj.greet();

const obj2 = {
    name: "Bob",
    greet: () => console.log(this.name)
    
}
obj2.greet();

const fn = obj.greet
fn();

const bound = obj.greet.bind(obj);
bound();

const obj3 = {
    val: 10,
    outer(){
        function inner() { console.log(this.val);
        }
        inner()
    }
}
obj3.outer();

const obj4 = {
    val: 20,
    outer(){
        const inner = () => console.log(this.val);
        inner()
    }
}
obj4.outer();

class Test {
    constructor(v) { this.v = v};
    show() {console.log(this.v);
    }
}
new Test(42).show();

console.log(this);

// document.body.addEventListener("click", function(){
//     console.log(this);
    
// })
// document.body.addEventListener("click", ()=>{
//     console.log(this);
    
// })

const user1 = {name: "Alice", age:22};
const {name, age} = user1;
console.log(name, age);

const {name: username} = user1;
console.log(username);

const {city = "Unknown"} = user1 
console.log(city);

const user2 = { profile: {id: 1, email: "a@b.com"}}
const {profile: {email}} = user2;
console.log(email);

const objArr = {nums: [1, 2, 3]}
const {nums: [first, second]} = objArr;
console.log(first, second);

function show({name, age}){
    console.log(name, age);
    
}
show(user1);

const {age: personAge} = user1;
console.log(personAge);

const { name: n, ...rest} = user1;
console.log(rest);

const objDeep = {a: {b: 1}};
const {a: {b, c= 2}} = objDeep;
console.log(b, c);

const arr = [{id: 1}, {id: 2}]
for(const {id } of arr) console.log(id);

