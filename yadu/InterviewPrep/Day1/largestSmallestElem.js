//bruteforce

function findMinMax(arr){
    arr.sort((a, b) => a - b);
    return {min: arr[0], max: arr[arr.length - 1]}
}

console.log(findMinMax([5, 2, 9, 1, 7]))

//tc = o(nlogn)
//sc = o(1)


function findMinMaxO(arr){
    let min = arr[0], max = arr[0]

    for(let i = 1; i < arr.length - 1; i++){
        if(arr[i] > max) max = arr[i]
        if(arr[i] < min) min = arr [i]
    }
    return {min, max}
}

console.log(findMinMaxO([5, 2, 9, 1, 7]))

//tc = o(n)
//sc = o(1)