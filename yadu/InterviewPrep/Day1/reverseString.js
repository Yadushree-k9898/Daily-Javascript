// reverse a string
//first approach brute force

function reverseString(str){
    let reversed = '';

    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i]
    }
    return reversed
}

console.log(reverseString("yadu"))

//tc is O(n^2) because of string concatenation
//sc is o(n) because new string is created



function reverseO(str){
    let arr = str.split("");
    let left = 0, right = arr.length - 1;

    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++;
        right--

    }
    return arr.join("")
}

console.log(reverseO("yadu"))