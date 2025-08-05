let user;
console.log(user ?? "Anonymous");


let userr = "jogn";

console.log(userr ?? "Anonymous");


let fName = null;
let lName = null;
let nickName = "SUPERCODER";

console.log(fName ?? lName ?? nickName ?? 'Anonymous');
console.log(fName || lName || nickName || 'x');


let height = 0;

console.log(height || 100);
console.log(height ?? 100);



let heigh = null;
let width = null;

let area = (heigh ?? 100) * (width ?? 50)
console.log(area);


let areaa = heigh ??  100 * width ?? 50;
console.log(areaa);


let areea = heigh ?? (100 * width) ?? 50

console.log(areea);


let x = (1 && 2) ?? 3

console.log(x);
