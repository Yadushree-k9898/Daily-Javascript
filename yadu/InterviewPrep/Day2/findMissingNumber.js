//brute force
function findMissingNumber(arr, N){
    for(let i = 1; i <=N; i++){
        if(!arr.includes(i)) return i
    }
}

console.log(findMissingNumber([1, 2, 4, 5], 5))

function findMissingNumberO(arr, N){
    let sum = (N * (N + 1)) / 2
    let arrSum = arr.reduce((a, b) => a+b, 0)
    return sum - arrSum
}


console.log(findMissingNumberO([1, 2, 4, 5], 5));
