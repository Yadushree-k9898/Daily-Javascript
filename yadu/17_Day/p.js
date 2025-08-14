setTimeout(() =>console.log("Hello after 1s"), 1000)

console.log("This logs first");
setTimeout(() => console.log("This logs later"), 500)

setTimeout(() => console.log("First"), 100);
setTimeout(() => console.log("second"), 50);

let count = 0;
let id = setInterval(()=>{
    console.log("Tick", ++count);
    if(count === 3) clearInterval(id)
, 500});

console.log("Sync 1");
setTimeout(() => console.log("Async 1"), 0);
console.log("Sync 2");


setTimeout(() => console.log("Timeout done"), 0);
console.log("Main code done");

Promise.resolve().then(() => console.log("Microtask"))
setTimeout(() => console.log("Macrotask"), 0);

function fetchData(cb){
    setTimeout(()=>cb("Data loaded"), 1000)
}
fetchData(console.log);

for(let i = 1; i <=3; i++){
    setTimeout(()=> console.log("Loop i: ", i), i * 300)
};

let start = Date.now();
setTimeout(() =>console.log("Delay: ", Date.now() - start, "ms"), 300);

setTimeout(()=>{
    console.log("Step 1");
    setTimeout(()=>{
        console.log("Step 2");
        setTimeout(() => console.log("Step 3"), 500
        )
    }, 500)
}, 500);

const fs = require("fs");
fs.readFile(__filename, "utf8", (err, data) =>{
    console.log("File read complete");
});


(async function(){
    try{
        throw new Error("Async error!")
    }catch(e){
        console.log(e.message);   
    }
})();

function delay(ms){
    return new Promise(res => setTimeout(res, ms))
}
delay(1000).then(() => console.log("1 second passed")
);

async function testAsync(){ return "done"};
testAsync().then(console.log
)

function countDown(n){
    if( n=== 0) return;
    console.log(n);
    setTimeout(() => countDown(n - 1), 500)
}
countDown(5);

let t = setTimeout(() => console.log("WILL not run"), 1000
)
clearTimeout(t);

// let img = new Image();
// img.onload = () => console.log("Image loaded");
// img.src = "https://via.placeholder.com/150";
// document.body.addEventListener('click', ()=> console.log("Clicked")
// )
// requestAnimationFrame(() => console.log("Frame rendered")
// )

setTimeout(() => console.log("Timeout"), 0
)
Promise.resolve().then(()=> console.log(Promise)
)

async function* asyncGen(){
    yield "Firts"
    yield "Second"
}
(async ()=>{
    for await (let val of asyncGen()) console.log(val);
    
})();

Promise.resolve(1)
.then(v => v + 1)
.then(v => console.log("Chained value: ", v)
)

console.log("Start");
setTimeout(()=>{
    let sum = 0;
    for(let i = 0; i <1e7; i++) sum+=id;
    console.log("Sum done");
    
}, 0)
console.log("End");
