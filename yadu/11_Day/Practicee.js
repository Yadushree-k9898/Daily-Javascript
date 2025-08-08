const promise = new Promise((resolve, reject) =>{
    setTimeout(()=> resolve('Done'), 2000)
});

promise.then(result => console.log(result)
);

const failPromise = new Promise((resolve, reject) =>{
    setTimeout(()=> reject("Error occured"), 3000)
})

failPromise.catch(error => console.log(error)
);

new Promise(resolve => resolve(6))
.then(num => num * 3)
.then(num => num+ 10)
.then(result => console.log(result)
);


new Promise(resolve => resolve(10))
.then(num => new Promise(res => setTimeout(() => res(num * 2), 1000)))
.then(result => console.log(result)
);


new Promise(()=>{ throw new Error("Fail")})
.catch(err => console.log(err.message)
);


Promise.resolve("Data Loaded...")
.finally(()=> console.log("Cleaning up..."))
.then(data => console.log(data))

Promise.all([
    Promise.resolve(1),
    new Promise(res => setTimeout(()=> res(2), 1000)),
    Promise.resolve(3)
]).then(values => console.log(values)
);

Promise.all([
    Promise.resolve(1),
    new Promise(res => setTimeout(()=> res(2), 1000)),
    Promise.resolve(3)
]).then(values => console.log(values)
);

Promise.race([
    new Promise(res => setTimeout(()=> res("Fast"), 500)),
    new Promise(res => setTimeout(()=> res("Slow"), 1500))
]).then(result => console.log(result)
);


Promise.allSettled([
    Promise.resolve("OK"),
    Promise.reject("Fail")
]).then(results => console.log(results)
);

//async/await

async function greet(){
    return 'hello'
}

greet().then(console.log
);

async function greet(){
    return 'Hello there'
}

greet().then(console.log
);

async function fetchData(){
    const data = await new Promise(res => setTimeout(()=> res("Data"), 1000));
    console.log(data);
    
}
fetchData();

async function getData(){
    try{
        const result = await Promise.reject("Error Fetching");
        console.log(result);
    }catch(error){
        console.log(error);
        
    }
}
getData();

async function steps(){
    const step1 = await Promise.resolve("Step 1");
    console.log(step1);
    const step2 = await Promise.resolve("Step2")
    console.log(step2);
    
}

steps();

async function loadAll(){
    const [a, b] = await Promise.all([
        Promise.resolve("a"),
        Promise.resolve("B")
    ]);
    console.log(a, b)
}

loadAll();


async function multiplyBy2(n){return n * 2}
async function multiplyBy3(n){return n * 3}

async function run(){
    let result = await multiplyBy2(2);
    result = await multiplyBy3(result)
    console.log(result);
    
};
run();


function fakeFetch(url){
    return new Promise(res => setTimeout(()=> res(`Data from ${url}`), 1000))
}

async function getData(){
    const data = await fakeFetch("/api/data");
    console.log(data);
    
};

getData();

async function retryFetch(times){
    for(let i = 0; i < times; i++){
        try{
            if(Math.random() > 0.5) throw "Network Error";
            return "Success"
        }catch(err){
            console.log(`Attempt ${i+1} failed`);    
        }
    }
    throw "All attempts failed"
}

retryFetch(3).then(console.log
).catch(console.log)

const delay = ms => new Promise(res => setTimeout(res, ms));

async function timer(){
    console.log("Start");
    await delay(1000);
    console.log("End after 1s");
    
}

timer();


async function processArray(arr){
    const results = await Promise.all(arr.map(num => Promise.resolve(num *2)));
    console.log(results);
    
}
processArray([1, 2, 3])

async function fetchBoth(){
    const [user, posts] = await Promise.all([
        Promise.resolve("User data"),
        Promise.resolve("Post data")
    ])
    console.log(user, posts);
    
}

fetchBoth();

(async () =>{
    const data = await Promise.resolve("Instant data");
    console.log(data);
    
})();


async function firstResponse(){
    const result = await Promise.race([
        Promise.resolve("Server 1"),
        new Promise(res => setTimeout(()=> res("server 2"), 1000))
    ])
    console.log(result);
    
}

firstResponse();


async function chainMix(){
    let result = await Promise.resolve(5);
    result = await Promise.resolve(result * 2);
    Promise.resolve(result * 3).then(console.log
    )
}
chainMix()

async function chainWithReduce(arr){
    return arr.reduce(async (prev, curr) =>{
        const acc = await prev;
        return acc+ curr
    }, Promise.resolve(0))
}

chainWithReduce([1, 2, 3]).then(console.log
)