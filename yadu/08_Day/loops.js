// let i = 0;
// while(i < 3){
//     console.log(i);
//     i++
// }

// let j = 3;
// while(j){
//     console.log(j);
//     j--
// }

// let k = 0;
// do{
//     console.log(k);
//     k++;
// }while(k < 3)


//     for(let i = 0; i < 3; i++){
//         console.log("this is i", i);
        
//     }


// let i1 = 0;

// if(i1< 3) {console.log(i1); i1++}
// if(i1 < 3) {console.log(i1); i1++;
// }


// for(let i = 0; i < 3; i++){
//     console.log(i);
    
// }
// console.log(i);


// for(let i = 1; i <= 5; i++){
//     console.log(i);
    
// }

// let sum = 0;
// for(let i = 1; i <=10; i++){
//     sum+=i
// }
// console.log("Sum:", sum);



// const fruits = ["apple", "banana", "mango"];
// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
    
// }


// for(let i = 2; i <=10; i+=2){
//     console.log(i);
    
// }


// for(let i = 5; i >= 1; i--){
//     console.log(i);
    
// }

// //square numbers

// for(let i = 1; i <=5; i++){
//     console.log(i * i);
    
// }

// //reverse tsring
// let str = "hello";
// let reversed = "";

// for(let i = str.length- 1; i >= 0; i--){
//     reversed += str[i]
// }

// console.log(reversed);


// //loop with break

// for(let i = 1; i <= 10; i++){
//     if(i === 5) break;
//     console.log(i);
    
// }


// //loop with contimue

// for(let i = 1; i <=10; i++){
//     if(i === 4) continue;
//     console.log(i);
    
// }


// const nums = [1, 2, 3, 4, 5];

// for(let i = 0; i < nums.length; i++){
//     nums[i] *= 2
// }

// console.log(nums);



// //WHILE LOOP

// // print nums from  1 to 5
// let i = 1;
// while(i <= 5){
//     console.log(i);
//     i++
// }


// let summ = 0, num = 1;
// while(summ <= 100){
//     summ += num;
//     num++
// }

// console.log("sum is",summ);


// let n = 10;
// while (n >= 1){
//     console.log(n);
//     n--
// }

// console.log(n);


// const arr = [10, 20, 30, 40, 50];
// let idx = 0;

// while(idx <arr.length){
//     console.log(arr[idx]);
//     idx++
// }


// let input ="";
// let attempts = 0;
// while( input !== "yes" && attempts < 3){
//     input = "no";
//     console.log("Try again...");
//     attempts++
    
// }

// let  x= 2;
// while(x <= 10){
//     console.log(x);
//     x+=2
// }


// //reverse number


// let number = 12345;
// let rev = 0;

// while(number !==0){
//     rev = rev * 10 + (number % 10);
//     number = Math.floor(number/ 10)
// }

// console.log(rev);



// let j = 1;
// while(j <=10){
//     if(j === 6) break;
//     console.log(j);
//     j++
// }


// let k = 0;
// while(k < 5){
//     k++;
//     if(k === 3) continue
//     console.log(k);
    
// }


// let pow = 1;

// while(pow < 100){
//      console.log(pow);
//      pow *= 2
// }


//for ... of loop


const colors = ["red", "blue", "green"];
for(let color of colors){
    console.log(color);
    
}


for(let char of "hello"){
    console.log(char);
    
}


const nums = [1, 2, 3, 4, 5];
let total = 0;
for(let num of nums){
    total += num
}
console.log(total);


const words = ["cat", "bat", "mat"];
for(let char of words){
    console.log(char.toUpperCase());
    
}


const arrr = [1, 2, 3];
const doubled = [];
for(let ar of arrr){
    doubled.push(ar*2)
    
}
console.log(doubled);



let count = 0;

for(let ch of "education" ){
    if("aeiou".includes(ch)){
        count++
    }
}
console.log(count);



const set = new Set([1, 2, 3]);
for(let item of set){
    console.log(item);
    
}


const map = new Map([["a", 1], ["b", 2]]);
for(let [key, value] of map){
    console.log(key, value);
    
}

const marks = [50, 23, 89, 90];
for(let mark of marks){
    if(mark < 50) console.log("Fail", mark);
        
    
}


const a = [1, 2];
const b = [3, 4];

let merged = [];

for(let item of a) merged.push(item);
for(let item of b) merged.push(item);
console.log(merged);


// for...in loop


