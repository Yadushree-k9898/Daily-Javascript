function reverseString(s){
    const reversed = s.split('').reverse().join('');
    return reversed
}
console.log(reverseString("yadushree"));

function isPrime(n){
    if(n <= 1) return false;
    if(n=== 1) return true
    if(n %2 === 0) return false

    for(let i = 3; i*i<=n; i+=2){
        if(n % i === 0){
            return false
        }
    }
    return false

}
console.log(isPrime(19));


function findMax(arr){
    let max = arr[0];
   for(let i of arr){
     if(i > max){
        max = i
       
    }
   
   }
    return max
}
console.log(findMax([1, 2, 9, 3, 0]));
