// const nums = [1, 2, 3, 4, 5, 6];

console.log(nums.map(x => x * 2));
console.log(nums.map( x=> x * 3));
console.log(nums.map(x => x* 4));
console.log(nums.map(x => x + "🤩"));
console.log(nums.map((x, i) => x+ i));
console.log(nums.map((x, i) => x+i));
console.log(["a", "b", "c"].map((ch, i) => `${i} : ${ch}`));
console.log(nums.map(x => ({num: x})));
console.log(["apple", "banana", "cherry", "date"].map(f => f.toUpperCase()));
console.log(nums.map( x=> x % 2 === 0));
console.log(nums.map(_ => "hello"));
console.log([true, false].map(b => !b));
console.log([10, 20, 30, 40 ,50].map((val, idx, arr) => arr.length));

console.log(nums.filter(x => x% 2 === 0));
console.log(nums.filter( x=> x % 3));
console.log(["", "Hi", null, 0, "Hello"].filter(Boolean));
console.log(nums.filter((x, i) => i%2 === 0));
console.log([true, false, true].filter(v => v));
console.log(["cat", "dog", "rat"].filter(z => z.includes("a")));
console.log([undefined, null, 3].filter(v => v != null));
console.log(["1", 2, "3"].filter(x => typeof x=== 'string'));
console.log(["apple", 'banana'].filter(f => f.length > 5));
console.log([10, 20, 30].filter((val, idx, arr) => idx !== 1));

console.log(nums.reduce((a, b) => a+b , 0));
console.log(nums.reduce((a, b) => a*b, 1));
console.log(nums.reduce((a, b) => a-b));
console.log(["a", "b", "c"].reduce((a, b) => a+b));
console.log(nums.reduce((max, val) => Math.max(max, val)));
console.log(nums.reduce((acc, val) => [...acc, val * 2], []));
console.log(['apple', 'banana'].reduce((len, word) => len + word.length, 0));
console.log(nums.reduce((count, val) => val % 2 === 0 ? count + 1: count));
console.log([{x:1}, {x:2}].reduce((sum, obj) => sum + obj.x, 0));
console.log(["JS", "is", "fun"].reduce((s, w) => `${s} ${w}`));


console.log(nums.find(x => x > 4));
console.log(nums.find(x => x% 2 === 0));
console.log(["cat", "dog", "fish"].find(w => w.includes("o")));
console.log(nums.find(x => x === 100));
console.log([true, false, true].find(v => v === false));
console.log(nums.find((x, i) => i === 12));
console.log([1, 2, 3].find(x => x <0));
console.log([{id: 1}, {id:2}].find(o => o.id === 2));
console.log("hello".split('').find(ch => ch ==="l"));
console.log([null, undefined, 5].find( v  =>  v != null));


console.log(nums.some( x => x > 10));
console.log(nums.some( x=> x< 0));
console.log(["", "hi", ""].some( x=> x));
console.log([true, false].some(v => v === false));
console.log(nums.some( x=> x% 2 === 0));
console.log(["apple", "banana"].some(f => f.startsWith("a")));
console.log([].some(x => true));
console.log([1, 2, 3].some((val, i) => i === 1));
console.log([null, undefined, 0].some(Boolean));
console.log(["js", "html", "css"].some(x => x.length> 5));



console.log(nums.every(x => x % 2 === 0));
console.log(nums.every(x => x > 0));
console.log([true, true, false].every(v => v));
console.log(["hi", "hey"].every( w => typeof w === "string"));
console.log([].every(x => false));
console.log([10, 20].every((x, i) => x > i));
console.log(["a", "b"].every(ch => ch != "c"));
console.log([1, 2, 3].every(x => x == null));
console.log([null, undefined].every(x => x == null));
console.log([5, 10, 15].every( x=> x % 5 === 0));


const nums = [5, 2, 10, 1];


console.log(nums.sort());
console.log(nums.sort((a, b) => a- b));
console.log(nums.sort((a, b) => b - a));
console.log(['cat', 'apple'].sort());
console.log(['cat', 'Apple'].sort());
console.log([10, 1, 2].sort((a, b) => b % 2 - a % 2));
console.log([1, 5, 10].sort((a, b) => (a%3) - (b%3)));
console.log(["c", "a", "b"].sort().reverse());
console.log([true, false, true].sort());
console.log([3, 30, 34].sort((a, b) => ('' + b + a).localeCompare('' + a+ b)));
