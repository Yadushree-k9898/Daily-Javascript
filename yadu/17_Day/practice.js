console.log(/cat/.test("catfish"));
console.log(/dog/.test("catfish"));
console.log(/Cat/.test("cat"));
console.log(/Cat/i.test("cat"));
console.log(new RegExp("dog").test("hotdog"));  //using RegExp constructor
console.log(/^cat$/.test("catfish"));
console.log(/^cat$/.test("cat"));
console.log(/at/.test("catfish"));
console.log(/[0-9]/.test("Year2025"));
console.log(/^[A-Za-z]+$/.test("Hello"));
console.log(/Hello World/.test("Hello World"));
if(/error/i.test("Syntax Error")){
    console.error("Error found!")
}
console.log("cat bat".match(/at/g));
console.log("cat".search(/a/));
console.log("I like cats".replace(/cats/, "dogs"));
console.log("cats cats cats".replace(/cats/g, "dogs"));
console.log(/\d/.test("abc123"));
console.log(/\D/.test("abc123"));
console.log(/\s/.test("Hello World"));
console.log(/\S/.test("Hello_World"));
console.log(/\w/.test("Hello_123"));
console.log(/\W/.test("Hello!"));
console.log(/\./.test("3.14"));
console.log(/colou?r/.test("color"));
console.log(/color?r/.test("colour"));
console.log(/cat|dog/.test("I hava a dog"));
console.log(/^\w+\s\d+$/.test("User 123"));

/*
g → Global search (find all matches)
i → Case-insensitive
m → Multiline
s → Dot matches newline
u → Unicode support
y → Sticky match
*/

console.log("cat bat".match(/at/g));
console.log("cat bat".match(/at/));
console.log(/hello/i.test('HELLO'));
console.log("Cat cat CAT".match(/cat/gi));
console.log(/^cat/m.test("dog\ncat"));
console.log(/^cat/.test("dog\ncat"));
console.log(/a.b/s.test("a\nb"));
console.log(/a.b/.test("a\nb"));
console.log(/\u{1F600}/u.test("😀"));
console.log(/\u{1F600}/.test("😀"));
let str = "cat dog";
let re = /dog/y;
re.lastIndex = 4;
console.log(re.test(str));
re.lastIndex = 0;
console.log(re.test(str));
let text = "test1 test2";
console.log(/test\d/g.exec(text));
console.log(/test\d/y.exec(text));
console.log("cat\ncat".match(/^cat/gm));
console.log(new RegExp("cat", "gi").test("CAT"));
console.log("DOG dog dog".replace(/dog/gi, "cat"));

console.log("Hello World".search(/word/i));
console.log(("test".match(/t/g) || []).length);
console.log(/foo/mis.flags);
console.log(/foo/igm.flags);
console.log(/abc/.flags);

let data = "x=1;y=2;";
let token = /\w+=\d+;?y/
token.lastIndex = 0;
console.log(token.exec(data)[0]);
token.lastIndex = 4;
console.log(token.exec(data)[0]);
token.lastIndex = 0;
console.log(token.exec("x=1; y=2;"));
console.log(/cat/gimsuy.flags);

console.log(/\d/.test("abc123"));
console.log(/\D/.test("123"));
console.log(/\w/.test("hello_world"));
console.log(/\W/.test("hello!"));
console.log(/\s/.test("hello world"));
console.log(/\S/.test(" "));
console.log(/h.t/.test("hat"));
console.log(/^Hello/.test("Hello world"));
console.log(/world$/.test("Hello world"));
console.log(/[aeiou]/.test("cat"));
console.log(/[0-9]/.test("123"));
console.log(/(ha)+/.test("hahaha"));
console.log(/cat|dog/.test("doghouse"));
console.log(/colou?r/.test("color"));
console.log(/a*b/.test("aaab"));
console.log(/a+b/.test("b"));
console.log(/\d{3}/.test("123"));
console.log(/\d{2, 4}/.test("123"));
console.log(/\d{2,}/.test("12345"));
console.log(/\d(?=px)/.test("5px"));
console.log(/\d(?!px)/.test("5em"));
console.log(/(?<=\$)\d+/.test("$100"));
console.log(/(?<!$)\d+/.test("100"));

let re1 = /cat/g;
console.log(re1.exec("cat bat"));

console.log("cat bat".replace(/cat/, "dog"));
