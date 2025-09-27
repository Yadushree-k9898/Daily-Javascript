function mz(arr){
    let nonZeros = arr.filter(n => n !== 0)
    let zeros = arr.filter( n => n === 0)
    return [...nonZeros, ...zeros]
}
console.log(mz([0, 1, 0, 9, 8, 7, 0, 4, 3, 0, 8, 2, 1, 4, 0, 5]));


function mz(arr){
    let j = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
            [arr[i], arr[j]] = [arr[j], arr[i]]
            j++
        }
    }
    return arr
}