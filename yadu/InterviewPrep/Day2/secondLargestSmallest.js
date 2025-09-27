function secondLargest(arr){
    let sorted = [...new Set(arr)].sort((a, b) => b - a)
    return sorted[1]
}

function secondSmallest(arr){
    let sorted = [...new Set(arr)].sort((a, b) => a -b)
    return sorted[1]
}
console.log(secondLargest([2, 8, 9, 4, 1, 3,4]));
console.log(secondSmallest([2, 8, 9, 4, 1, 3,4]));



function sl(arr){
    let largest = -Infinity, second = -Infinity
    for(let num of arr){
        if(num > largest){
            second = largest
            largest = num
        } else if(num > second && num != largest){
            second = num
        }
    }
    return second
}
console.log(sl([2, 8, 9, 4, 1, 3,4]));