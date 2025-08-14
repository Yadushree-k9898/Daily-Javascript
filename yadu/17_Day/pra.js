setTimeout(() =>{
    console.log("Executed after 2s")
},2000);

let count = 0;
const timer = setInterval(() => {
    console.log(`Count: ${++count}`);
    if(count === 5) clearInterval(timer)
}, 1000);

console.log("First");
setTimeout(()=> console.log("Second"), 0
)
console.log("Third");


for(let i = 1; i <=3; i++){
    setTimeout(()=>{
        console.log(`Number: ${i}`);
        
    }, i* 1000)
};

function fetchData(callback){
    setTimeout(()=>{
        callback("Data fetched")
    }, 2000)
}
fetchData((msg) => console.log(msg)
);

setTimeout(()=>{
    console.log("Step 1");
    setTimeout(()=>{
        console.log("Step 2")
        setTimeout(()=> console.log("Step 3"), 1000
        )
    })
})

function asyncTask(name, delay){
    setTimeout(()=>{
        console.log(`${name} finished`)
    }, delay)
}

asyncTask("Task A", 1000)
asyncTask("Task B", 500);

const fs = require('fs');
fs.readFile('sample.txt', 'utf8', (err, data) =>{
    if(err) console.error(err);
    else console.log(data)
});

// document.getElementById('btn').addEventListener('click', ()=>{
//     setTimeout(()=> console.log("Button clicked async"), 1000
//     )
// })

function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}
delay(2000).then(()=> console.log("2 seconds passed")
);

setTimeout(()=>{
    try{
        throw new Error("Something went wrong!")
    }catch(e){
        console.log(e.message)
    }
}, 1000);


const p1 = new Promise(res => setTimeout(()=> res("One"), 1000));
const p2 = new Promise(res => setTimeout(()=> res("Two"), 2000))

Promise.all([p1, p2]).then(console.log
);

function step1(){
    return new Promise(res => setTimeout(()=> res("Step 1 done"), 1000))
}
function step2(){
    return new Promise(res => setTimeout(()=> res("Step 2 done"), 1000))
}

step1().then(console.log
).then(step2).then(console.log
);

fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));

async function getPost(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const data = await res.json()
    console.log(data);
    
}
getPost();

setImmediate(() => console.log("Next tick executed")
) 
console.log("End of the script");


Promise.resolve().then(() => console.log("Next tick executed")
)
console.log("End of the script");


process.nextTick(() => console.log("Next tick executed")
)
console.log("End of script");

Promise.resolve().then(() => console.log("Mocrotask")
)
setTimeout(() => console.log("Macrotask")
)

let timer1;
function debounce(){
    clearTimeout(timer1);
    timer1 = setTimeout(()=> console.log("Debounced!"), 500
    )
}
// window.addEventListener("resize", debounce)

// let isThrottled = false;
// window.addEventListener('scroll', ()=>{
//     if(!isThrottled){
//         console.log("Throttled scroll event");
//         isThrottled = true;
//         setTimeout(()=> isThrottled = false, 1000)
//     }
// })


function countDown(n){
    if(n === 0) return;
    setTimeout(() =>{
        console.log(n);
        countDown(n - 1)
    }, 1000)
}
countDown(5);

const fast = new Promise(res => setTimeout(()=> res("Fast"), 5000));
const slow = new Promise(res => setTimeout(()=> res("Slow"), 2000))

Promise.race([fast, slow]).then(console.log
)

async function* asyncGen(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2)
}
(async () => {
    for await (let val of asyncGen()) console.log(val);
    
})();

async function fetchData(id){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.json()
}
Promise.all([fetchData(1), fetchData(2)]).then(console.log
)

const id = setTimeout(() => console.log("Will not run"), 3000
)
clearTimeout(id)