
function findDuplicates(arr){
    let duplicates = []

    for(let i = 0; i < arr.length; i++){
        for(let j = i +1; j < arr.length; j++){
            if(arr[i] === arr[j] && !duplicates.includes(arr[i])){
                duplicates.push(arr[i])
            }
        }
    }
    return duplicates
}

console.log(findDuplicates([1, 2, 3, 4, 1, 2]));

//tc= o(n^2)
//sc=o(k)



function findDuplicatesO(arr){
    let freq = {}
    let duplicates = []

    for(let num of arr){
        freq[num] = (freq[num] || 0) + 1
    }

    for(let key in freq){
        if(freq[key] > 1){
            duplicates.push(Number(key))
        }
    }
    return duplicates
}

console.log(findDuplicatesO([1, 2, 3, 4,2, 1]));


//tc = o(n)
//sc=o(n)


function FD(arr){
    let duplicates = []

    for(let i = 0; i < arr.length; i++){
        let idx = Math.abs(arr[i]) - 1
        if(arr[idx] < 0){
            duplicates.push(Math.abs(arr[i]))
        }else{
            arr[idx] = -arr[idx]
        }
    }
    return duplicates
}

console.log(FD([4,3,2,7,8,2,3,1]));
