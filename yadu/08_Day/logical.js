console.log( true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);


if( 1|| 0){
    console.log('Truthy');
    
}

let hour = 9;

if(hour < 10 || hour > 18){
    console.log('This ffice is closed');
    
}

let hr = 12;

let isWeekend = true;

if(hour < 10 || hour > 18 || isWeekend){
    console.log("This office is closed");
    
}


console.log(1 || 0);
console.log((null || 1));
console.log( null || 0 || 1);
console.log(undefined || null || 0);


let firstName = '';
let lastName = '';
let nickName = "Supercoder";

console.log(firstName || lastName || nickName || "Anonymous");


true || console.log("Not printed");
false || console.log("printerd");




console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);


let hrs = 12;
let minute = 30;

if(hrs = 12 && minute == 30){
    console.log('This time is 12: 30');
    
}

if(1 && 0){
     console.log("Won't work because the result is falsy");
     
}

console.log(1 && 0);
console.log(1 && 5);


console.log(null && 5);
console.log(0 && "no matter what");


console.log(1 && 2&& null && 3);


console.log(1 && 2&& 3);


let x = 1;
( x > 0) && console.log("greater than zero");


let y = 1;
if( y > 0) console.log( "Greater than zero");


console.log(!true);
console.log(!0);

console.log(!!"non - empty string");
console.log(!!null);


console.log(Boolean("non empty string"));
console.log(Boolean(null));


console.log(null || 2 || undefined);
console.log(console.log(1) || 2|| console.log(3)
);


console.log( 1&& null && 2);


console.log(console.log(1) && console.log(2)

);


console.log(null || 2 && 3 || 4);


if(-1 || 0) console.log('first');
if(-1 && 0) console.log('second');
if(null || -1 && 1) console.log('third');
