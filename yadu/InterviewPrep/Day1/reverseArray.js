function reverseArrayB(arr){
    let result = []

    for(let i = arr.length - 1; i>=0; i--){
        result.push(arr[i])
    }
    return result
}

console.log(reverseArrayB([1, 2, 3, 4]))

//tc= o(n)
//sc=o(n)


function reverseArrayO(arr){
    let left = 0, right = arr.length - 1;

    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }
    return arr
}
console.log(reverseArrayO([1, 2, 3, 4]))
