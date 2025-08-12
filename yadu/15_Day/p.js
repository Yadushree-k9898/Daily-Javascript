let now = new Date();
console.log(now);
let d1 = new Date(2025, 0, 15);
console.log(d1);
let d2 = new Date(2025, 0, 15, 10, 30, 45);
console.log(d2);
let d3 = new Date("2025-01-15T10:30:45");
console.log(d3);
let d4 = new Date(1673779845000);
console.log(d4);
let epoch = new Date(0);
console.log(epoch);
let invalid = new Date("not-a-date");
console.log(invalid);
let d5 = new Date("March 25 2025");
console.log(d5);
let d6 = new Date(Date.UTC(2025, 0, 15, 10, 30));
console.log(d6);
console.log(new Date().toISOString());
let dateA = new Date(2025, 0, 1);
let dateB = new Date(2025, 0, 10);
console.log(dateB > dateA);
console.log(new Date(1700000000000));
console.log(Date.now());
let original = new Date();
let copy = new Date(original.getTime());
console.log(copy);
let sub = new Date();
sub.setDate(sub.getDate() - 7);
console.log(sub);

//JS Date Formats

let dt = new Date(2025, 0, 15, 10, 30, 45);
console.log(dt.toString());
console.log(dt.toDateString());
console.log(dt.toTimeString());
console.log(dt.toUTCString());
console.log(dt.toISOString());
console.log(dt.toJSON());
console.log(dt.toLocaleString());
console.log(dt.toLocaleDateString());
console.log(dt.toLocaleTimeString());
console.log(dt.toLocaleString("fr-FR"));
console.log(dt.toLocaleDateString("en-GB", {day:'2-digit', month:'long', year:'numeric'}));
let yyyy = dt.getFullYear();
let mm = String(dt.getMonth() + 1).padStart(2, "0");
let dd = String(dt.getDate()).padStart(2, "0");
console.log(`${yyyy}-${mm}-${dd}`);
console.log(`${yyyy}/${mm}/${dd}`);
console.log(Math.floor(dt.getTime() / 1000));
console.log(dt.getTime());


// JS Date Get Methods

let gd = new Date(2025, 4, 20, 14, 45, 30);

console.log(gd.getFullYear());
console.log(gd.getMonth());
console.log(gd.getDate());
console.log(gd.getDay());
console.log(gd.getHours());
console.log(gd.getMinutes());
console.log(gd.getSeconds());
console.log(gd.getMilliseconds());
console.log(gd.getTime());
console.log(gd.getTimezoneOffset());
console.log(gd.getUTCFullYear());
console.log(gd.getUTCMonth());
console.log(gd.getUTCDate());
console.log(gd.getUTCDay());
console.log(gd.getUTCHours());
console.log(gd.getUTCMilliseconds());

//JS Date Set Methods

let sd = new Date(2025, 0, 15);

sd.setFullYear(2030);
console.log(sd);
sd.setMonth(6);
console.log(sd);
sd.setDate(25);
console.log(sd);
sd.setHours(18)
console.log(sd);
sd.setMinutes(45);
console.log(sd);
sd.setSeconds(59);
console.log(sd);
sd.setMilliseconds(500);
console.log(sd);
sd.setTime(1700000000000);
console.log(sd);
sd.setUTCFullYear(2040);
console.log(sd);
sd.setUTCMonth(10);
console.log(sd);
sd.setUTCDate(5);
console.log(sd);
sd.setUTCHours(12);
console.log(sd);
sd.setUTCMinutes(30);
console.log(sd);
sd.setUTCSeconds(45);
console.log(sd);
sd.setUTCMilliseconds(250);
console.log(sd);


//JS Date Reference 

let ref = new Date(2025, 2, 10, 15, 20, 30);

console.log(Date.now());
console.log(Date.parse("2025-03-10"));
console.log(Date.UTC(2025, 2, 10, 15, 20, 30));
console.log(ref.toISOString());
console.log(ref.toLocaleString());
console.log(ref.toDateString());
console.log(ref.toTimeString());
console.log(ref.toJSON());
console.log(ref.toLocaleDateString());
console.log(ref.toLocaleTimeString());
let y = ref.getFullYear();
let m = String(ref.getMonth() + 1).padStart(2, '0');
let d = String(ref.getDate()).padStart(2, '0');
console.log(`${y}-${m}-${d}`);

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
console.log(days[ref.getDay()]);

ref.setDate(ref.getDate() + 5);
console.log(ref);

ref.setMonth(ref.getMonth() - 2);
console.log(ref);

console.log(new Date(2025, 0, 1).getTime() < new Date(2025, 5, 1).getTime());
