const promise1 = new Promise((resolve) =>{
    resolve("Hello world")
});
promise1.then((msg) => console.log(msg)
);

const promise2 = new Promise((_, reject) =>{
    reject("Something went wrong")
});
promise2.catch((err) => console.log(err)
)

new Promise((resolve) => resolve(5))
.then((num) => num * 2)
.then((num) => num+ 2)
.then((result) => console.log(result)
);

const delayed = new Promise((resolve) =>{
    setTimeout(() => resolve("Done after 2s"), 2000)
})
delayed.then(console.log
)

const randomPromise = new Promise((resolve, reject) =>{
    const success = Math.random() > 0.5;
    success ? resolve("Success") : reject("Failure")
})
randomPromise.then(console.log()
).catch(console.error
)

Promise.resolve(10)
.then((num) => Promise.resolve(num * 3))
.then(console.log
);

Promise.all([
    Promise.resolve("A"),
    Promise.resolve("B"),
    Promise.resolve("C")
]).then(console.log
);

Promise.allSettled([
    Promise.resolve("OK"),
    Promise.reject("Error")
]).then(console.log
);

Promise.race([
    new Promise((resolve) => setTimeout(() => resolve("Fast"), 100)),
    new Promise((resolve) => setTimeout(() => resolve("Slow"), 5000))
]).then(console.log
);

Promise.any([
    Promise.reject("Fail 1"),
    Promise.reject("Fail 2"),
    Promise.resolve("Success!")
]).then(console.log
);

function asyncTask(cb){
    setTimeout(() => cb(null, "Done!"), 1000)
}

function toPromise(){
    return new Promise((resolve, reject) =>{
        asyncTask((err, res) =>{
            if(err) reject(err);
            else resolve(res)
        })
    })
}
toPromise().then(console.log
)

fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((res) => res.json())
.then(console.log
)
.then(console.error
);

function retry(fn, retries=3){
    return fn().catch((err) =>
        retries > 1? retry(fn, retries - 1) : Promise.reject(err)
    )
}
retry(() => fetch("https://httpbin.org/status/500"))
.then(console.log
)
.then(console.error
);

function checkNumber(num) {
    return new Promise((resolve, reject) =>{
        num > 10 ? resolve("Greater than 10") : reject("Tooo small")
    })
}
checkNumber(15).then(console.log
).catch(console.error
);

function delay(ms){
    return new Promise((resolve) => setTimeout(resolve, ms))
}

delay(1000).then(() => console.log("1 second later")
);

Promise.resolve()
.then(() => console.log("Step 1")
)
.then(() => console.log("Step 2")
)
.then(() => console.log("Step 3")
)

new Promise((resolve) =>{
    resolve(
        new Promise((innerResolve) =>{
            innerResolve("Inner value")
        })
    )
}).then(console.log
);

function asyncAdd(a, b){
    return new Promise((resolve) =>{
        setTimeout(() => resolve(a + b), 500)
    })
}
asyncAdd(5, 7).then(console.log
);

Promise.reject("Error")
.catch(console.error)
.finally(() => console.log("Always run") );

Promise.all([
    fetch("https://jsonplaceholder.typicode.com/posts/1"),
    fetch("https://jsonplaceholder.typicode.com/posts/2")
])
.then((response) => Promise.all(response.map((r) => r.json())))
.then(console.log);

Promise.resolve("Hello")
.then((str) => str.toUpperCase())
.then((upper) => `${upper} WORLD`)
.then(console.log);

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
wait(2000).then(() => console.log("2s wait over"));

Promise.reject("Fail")
.catch((err) =>{
    console.log("First handler:", err);
    throw "New error"
})
.catch((err) => console.log("Second handler:", err));

async function runSequentially(promises){
    for(let p of promises){
        console.log(await p)
    }
}
runSequentially([
    Promise.resolve("First"),
    Promise.resolve("Second"),
    Promise.resolve("Third")
]);

function createTask(id){
    return new Promise((resolve) =>{
        setTimeout(() => resolve(`Task ${id} done`), 1000)
    })
}

Promise.all([createTask(1), createTask(2), createTask(3)]).then(console.log
)