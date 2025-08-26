function reverseString(str){
    return str.split('').reverse().join('');
}
console.log(reverseString("Hello world"));

function isPalindrome(str){
    const reversed = str.split('').reverse().join('');
    return str === reversed
}
console.log(isPalindrome("madam"));

function twoSum(nums, target){
    const map = {};
    for(let i = 0; i < nums.length; i++){
        const complement = target - nums[i];
        if(map[complement] !== undefined) return [map[complement], i];
        map[nums[i]] = i;
    }
    return []
}
console.log(twoSum([2,7,11,15], 9));


function isAnagram(s, t){
    if(s.length !== t.length) return false;
    const count = {};
    for(let char of s) count[char] = (count[char] || 0) + 1;
    for(let char of t){
        if(!count[char]) return false;
        count[char]--;
    }
    return true;
}
console.log(isAnagram("listen", "silent"));


function removeDuplicates(nums){
    let i = 0;
    for(let j = 1; j < nums.length; j++){
        if(nums[i] !== nums[j]){
            i++;
            nums[i] = nums[j]
        }
    }
    return i + 1
}
console.log(removeDuplicates([1,1,2]));
