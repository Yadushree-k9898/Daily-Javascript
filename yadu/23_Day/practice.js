function findMissingNumber(arr, n){
    let total = (n * (n+1)) / 2;
    let sum = arr.reduce((a, b) => a+b, 0)
    return total - sum
}

console.log(findMissingNumber([1, 2, 4, 5, 6], 6));


function countVowels(str){
    let vowels = "aeiouAEIOU";
    let count = 0;
    for(let char of str){
        if(vowels.includes(char)) count++

    }
    return count
}

console.log(countVowels("javascript"));

function flattenArray(arr){
    return arr.reduce(
        (flat, item) => 
            Array.isArray(item) ? flat.concat(flattenArray(item)) : flat.concat(item),
        []
    )
}

console.log(flattenArray([1, [2, [3, 4], 5], 6]))
