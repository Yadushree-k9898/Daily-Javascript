//callbacks
function greet(name, callback){
    console.log("Hello " + name);
    callback()
}
greet("Alice", ()=>console.log("Callback executed")
)
function done(){console.log("Done!")};
function processTask(cb){cb();}
processTask(done);

function add(a, b, cb){
    cb( a+ b)
}
add(3, 4, sum => console.log("Sum: ", sum))

setTimeout(()=> console.log("Times is up"), 1000
)

// [1, 2, 3].forEach(num => console.log(num * 2));

function myForEach(arr, cb){
    for(let i = 0; i <arr.length; i++) cb(arr[i], i)
}
myForEach(["a", "b"], (el, i) => console.log(i, el)
);

function fetchData(cb){
    setTimeout(()=>cb("data fetched"), 500)
}
fetchData(data => console.log(data)
)

function getUser(id, cb){
    if(!id) return cb("No ID given");
    cb(null, {id, name:"John"})
}
getUser(1, (err, user) =>{
    if(err) console.log("error:", err);
    else console.log(user);
    
})

function step1(cb) { console.log("Step 1"); cb()
}
function step2(cb) { console.log("Step 2"); cb();
}
step1(() => step2(()=> console.log("Done")
));

setTimeout(()=>{
    console.log("One");
    setTimeout(()=> {
        console.log("Two");
        setTimeout(()=>{
            console.log("Three"), 500
            
        })
    })
});

function  multiply(a, b, cb){
    cb(a, b, a* b)
}
multiply(2, 5, (x, y, product) => console.log(`${x}x${y} = ${product}`)
)

function filter(arr, cb){
    const res = [];
    for(let el of arr) if(cb(el)) res.push(el);
    return res
}
console.log(filter([1, 2, 3], n => n > 1));


const fs = require('fs');
    fs.readFile(__filename, 'utf8', (err, data) =>{
        if(err) throw err;
        console.log("File length: ", data.length);
    })


// let box = document.createElement("div");
// box.style.width = "100px";
// box.style.height = "100px";
// box.style.background = "red";
// document.body.appendChild(box);
// setTimeout(() =>{
//     box.style.background = "blue"
//     console.log("Animation done");
    
// }, 1000);


let doubled = [1, 2, 3].map(n => n * 2);
console.log(doubled);

let id = setInterval(() => console.log("Internal tick"), 300
)
setTimeout(()=> clearInterval(id), 1000);

function doTask(task, cb){
    console.log(`Doing ${task}`);
    setTimeout(cb, 500)
}
doTask("Cleaning...", ()=> console.log("Done cleaning")
)

let nums = [3, 1, 5, 4];
nums.sort((a, b) => a-b)
console.log(nums);

let sum = [1, 2, 3].reduce((acc, val) => acc+val, 0);
console.log(sum);


// document.addEventListener('click', ()=> console.log("Clicked")
// )

Promise.resolve(42).then(val => console.log("Value: ", val)
);

function doSync(cb){ cb()};
doSync(()=>console.log("Sync callback")
);

console.log([1, 2, 3].filter(n => n % 2));

function doSomething(cb = () => console.log("Default callback")
){
    cb()
}

doSomething();

function makeLogger(msg){
    return ()=> console.log(msg);
    
}
let logHello = makeLogger("Hello world");
logHello()