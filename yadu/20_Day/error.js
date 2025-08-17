function safeDivide(a, b){
    try{
        if(b === 0) throw new Error("Cannot divide by zero");
        return a / b
    }catch(err){
        return err.message
    }finally{
        console.log("Division attempted")
    }
}
console.log(safeDivide(10, 0));

try{
   JSON.parse("{bad json}") 
}catch(err){
    console.log("Parsing error:", err.message)
}

try{
    console.log(x)
}catch(err){
    console.log("Error:", err.message)
}

try{
    let arr = [1, 2];
    console.log(arr[5].toString())
}catch(err){
    console.error("Array error:", err.message)
}

try{
    let num = 5;
    num()
}catch(err){
    console.log("Not a function:", err.message)
};

function checkNumber(n){
    if( typeof n !== "number") throw new Error("Not a number")
        return true
}
try{ checkNumber("abc");} catch(err){console.log(err.messae);
 }


function validateAge(age){
    if(age < 18) throw new Error("Must be 18+")
        return "Allowed"
} 
try{ console.log(validateAge(16));} catch(e){console.log(e.message)}

function validatePassword(pass){
    if(pass.length < 8) throw new Error("Password too short")
}

try{ validatePassword("123")} catch(e) { console.log(e.message);
}

function proceeArray(arr){
    if(arr.length === 0) throw new Error("Empty array")
}

try{ proceeArray([])} catch(e) { console.log(e.message)}


async function fetchData(){
    return "User data"
}
(async ()=>{
    try{
        console.log(await fetchData())
    }catch(e){
        console.log("API Error:", e.message)
    }
})()

async function fetchFail(){
    throw new Error("Server down")
}
(async () =>{
    try{
        await fetchFail();

    }catch(e){
        console.log("Catch:", e.message)
    }
})();


async function testReject(){
    return Promise.reject("Failed")
}
(async ()=>{
    try{
        await testReject()
    }catch(e){
        console.log("Rejected:", e)
    }
})();

async function step1(){ return 1};
async function step2(){throw new Error("Step2 failed")}
(async ()=>{
    try{
        console.log(await step1())
        console.log(await step2());
        
    }catch(e){
        console.log("Error", e.message)
    }
})()

// (async ()=>{
//     try{
//         throw new Error("DB Failed")
//     }catch(e){
//         console.log("Caught:", e.message)
//     }finally{
//         console.log("Closing DB Connection")
//     }
// })()

function readFile(path){
    if(path !== "file.txt") throw new Error("File not found")
}
try{ readFile("wrong.txt")} catch(e){ console.log(e.message)}

try{
    let res = Math.sqrt(-1);
    if(isNaN(res)) throw new Error("Invalid operation")
} catch(e) { console.log(e.message)}

try{
    let obj = {}; obj.self = obj;
    JSON.stringify(obj);

}catch(e){
    console.log("Circular:", e.message);
    
}

async function api1(){ return "API1"};
async function api2(){ throw new Error("API2 failed")}
(async  () =>{
    try{
        let results = await Promise.all([api1(), api2()])
        console.log(results);
        
    }catch(e){
        console.log("Error in one API:", e.message)
    }
})();


function fakeTimeout(ms){
    return new Promise((_, reject) => setTimeout(() => reject("Timeout!"), ms))
}
(async ()=>{
    try{ await fakeTimeout(100);} catch(e){console.log(e);
    }
})();

class ValidationError extends Error{
    constructor(msg){ super(msg); this.name = "ValidationError"}
}
try{ throw new ValidationError("Invalid data")}
catch(e){ console.log(e.name, e.message)}

class DatabaseError extends Error{
    constructor(msg) { super(msg); this.msg = "DatabaseError"}
}
try{
    throw new DatabaseError("DB connection failed")
}catch(e){ console.log(e.name, e.message)}

try{
    throw new TypeError("Wrong type")
}catch(e){
    if(e instanceof TypeError) console.log("Type Error!")
    else console.log("Other error");
    
}

// function riskey(){ throw new Error("Critical")}
// try{
//     riskey()
// }catch(e){
//     console.log("Logging:", e.message);
//     throw e
// }

async function fetchUser(){ throw new Error("Network down")}
(async ()=>{
    try{
        await fetchUser()
    }catch(e){
        console.log("Fallback: showing cached user")
    }
})()