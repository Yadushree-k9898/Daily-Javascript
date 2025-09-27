function Ip(str){
    return str === str.split('').reverse().join('')
}

console.log(Ip('madam'));



function isPlaindrome(str){
    let left = 0, right = str.length - 1
    while(left < right){
        if(str[left] !== str[right]) return false
        left++; right--
    }
    return true
}

console.log(isPlaindrome('racecar'));
