//Object.create() – Inheriting Objects

const animal = {
    type: 'Animal',
    speak(){
        console.log(`${this.type} makes sound`);       
    },
    dance(){
        console.log(`${this.type} dances`);     
    }
}

const dog = Object.create(animal);
dog.type = 'Dog'
dog.speak();
dog.dance();

const cat = Object.create(animal);
cat.type = 'Cat'
cat.speak();
cat.dance()

const camel = Object.create(animal);
camel.type = 'Camel';
camel.speak();
camel.dance();

//Prototype Inheritance Chain

const base = {baseProp: 'Iam base'};
const mid = Object.create(base);
mid.midProp = 'I am Prop';
const top = Object.create(mid);
top.topProp = 'I am top';

console.log(top.baseProp);

console.log(Object.getPrototypeOf(top) === mid); //multiple level inheritence


//Creating with Null Prototype

const dict = Object.create(null);
dict.apple = 'Apple';
console.log(dict.toString);


const defaults = {theme: 'light', language: 'en'};
const userPrefs = Object.create(defaults)
userPrefs.language = 'hin'

console.log(userPrefs.theme);
console.log(userPrefs.language);


const car = Object.create({});
car.drive = function(){ console.log("driving...");
};
car.drive();
car.color = function (){console.log("This car is purple");
}
car.color();
car.model = function(){ console.log('This car is BMW CS M5');
};

car.model();


const person = {
    firstName : 'John',
    lastName: 'Doe',
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(person.fullName);


const person2 = {
    firstName: 'Sponge',
    lastName: 'Bob',
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(person2.fullName);


const person3 = {
    firstName: 'Peter',
    lastName: 'Pan',
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(person3.firstName);
console.log(person3.lastName);
console.log(person3.fullName);

const person4 = {
    set fullName(name){
        [this.firstName, this.lastName] = name.split(' ')
    }
}

person4.fullName = 'Alice Cooper'
console.log(person4.firstName);


const person5 = {
    set fullName(name){
        [this.firstName, this.lastName] = name.split(' ')
    }
}

person5.fullName = 'Alison parker';
console.log(person5.lastName);


const person6 = {
    set fullName(name){
        [this.firstName, this.lastName] = name.split(' ')
    }
}

person6.fullName = 'Bob Cooper';
console.log(person6.firstName);


const rectangle = {
    width: 10, 
    height: 5,
    get area(){
        return this.width * this.height
    },
    set area(value){
        this.width = value / this.height
    }
}

rectangle.area = 100
console.log(rectangle.width);

const reactangle1 = {
    width : 12,
    height: 10,
    get area(){
        return this.width *  this.height
    },
    set area(value){
        this.width = value / this.height
    }

}

reactangle1.area = 250;
console.log(reactangle1.height);

const rectangle2 = {
    width: 5,
    height: 3,
    get area(){
        return this.width * this.height
    },
    set area(value){
        this.width = value / this.height
    }
}

rectangle2.area = 100;
console.log(rectangle2.width);


//Encapsulation with Getters/Setters

function createAccount(initialBalance){
    let balance = initialBalance;
    return {
        get balance() { return balance; },
        set balance(val){
            if(val >= 0) balance = val;
            else console.log("Invalid");
            
        }
    }
}

const acc = createAccount(100);
console.log(acc.balance);
acc.balance = -50



function createAccount(initialBalance){
    let balance = initialBalance;
    return {
        get balance(){ return balance;},
        set balance(val){
            if(val >= 0) balance = val;
            else console.log("Invalid");
            
        }
    }
}

const accs = createAccount(100);
console.log(accs.balance);
accs.balance = -50;

const obj = {};
Object.defineProperty(obj, 'name', {
    value: 'John',
    writable: false
})

obj.name = 'Alice';
console.log(obj.name);

const obj2 = {};
Object.defineProperty(obj2, 'name', {
    value: 'Bob',
    writable: true,
})

obj2.name = 'Peter';
console.log(obj2.name);

const secret = {};
Object.defineProperty(secret, 'keys', {
    value: 'hidden',
    enumerable: false
})

console.log(Object.values(secret));


const user = {first: 'Yadu', last: 'shree'}
Object.defineProperty(user, 'full', {
    get(){return `${this.first} ${this.last}`}
})

console.log(user.full);


const point = {};
Object.defineProperties(point, {
    x: {value: 10, writable: true},
    y:{value: 20, writable: true}
});

console.log(point.x, point.y);


const desc = Object.getOwnPropertyDescriptor(Math, 'PT');
console.log(desc);

const frozen = {a: 1};
Object.freeze(frozen);
frozen.a = 2;
console.log(frozen.a);


const obj4 = {a: 1};
Object.preventExtensions(obj4);
obj4.b = 2;
console.log(obj4);

const obj3 = { a: 1};
Object.seal(obj3)
obj3.a = 10;
delete obj3.a
console.log(obj3);


function Person(name){
    this.name = name;
    if(!Person.prototype.sayHi){
        Person.prototype.sayHi = function(){
            console.log(`Hi, I'm ${this.name}`);
            
        }
    }
}

const p1 = new Person("Tom");
p1.sayHi();


const baseObj = {a: 1};
const child = Object.assign(Object.create(baseObj), {b:2});
console.log(child.a, child.b);

const original = {x: 10};
const clone = Object.create(Object.getPrototypeOf(original), Object.getOwnPropertyDescriptors(original));
console.log(clone.x);

