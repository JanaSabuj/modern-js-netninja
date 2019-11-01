console.log('Hello'); 

// variables
let age = 205;
let year = 2000;
console.log(age, year);

age = 300;
console.log(age);

const x = 10;
// x = 5; not possible to change values of const variable 
console.log(x);

var y = 20;
y = 21;
console.log(y);

/* Data Types

Number - 1, 220202, 222.545456
String - 'hello', "world is ending"
Boolean - true/false
null - no value - we explicitly set it
Undefined - implicitly given by the browser to a variablenot yet defined
Object - UwU
Symbol - Used with objects

*/

// --------------------------------- Strings
let email = 'sabujlovescoding@gmail.com';
console.log(email);

// Concat
let fN = 'Sabuj';
let lN = 'Jana';

let fullN = fN + ' ' + lN;
console.log(fullN);

// Getting characters
console.log(fullN[4]);

// VSCODE - CTRL + ALT + CAPSLOCK + NUMPAD ARROWS = WINDOW RESIZE QUARTER

// String LENGTH - it is a property of string object and not a function/method
console.log(fullN.length);

// --------------String METHODS - actual functions that are a part of the string object
// end with ()

// toUpperCase() D.N modify the original string
let result  =fullN.toUpperCase();
console.log(result, fullN);


// indexOf()

let idx = email.indexOf('@'); // '@' is called the argument
console.log(idx);

let lastIdx = email.lastIndexOf('s');
console.log(lastIdx);

// let slc = email.slice(1, 6);
// let slc = email.slice(1, 4); // excluding the last index
let slc = email.slice(email.indexOf('@') + 1, email.length);
console.log(slc);

// substr
let sub = email.substr(1, 5); // start-idx to len
console.log(sub);

// replace
let rep = email.replace('s', 'w'); // replaces the first occurence of 's'
console.log(rep);

//---------------------------------------------NUMBERS-----------
let radius = 10;
let pi = 3.14;

let area = pi * radius**2;
console.log(area);

// B I D M A S where I -> Indices(**)

// likes++;
// likes += 10;

// NaN - Not a Number

console.log( 5 / 'hello');

// -------------------TEMPLATE STRINGS -------------------------------
let name = 'Fifty Shades';
let author = 'E L James';
let likes = 100;

// Normal Concat
let ans = 'The book ' + name + ' by author ' + author + ' has garnered ' + likes + ' likes';
console.log(ans);

// Template
let temp = `The book ${name} by author ${author} has garnered ${likes} likes`;
console.log(temp);

// html templates
let tg = `
    <h1> Hello ${name} </h1>  
    <p> ${author} </p>
    <span> ${likes} </span>
`;

console.log(tg);
// ------------------------------------------

// ---------------------ARRAYS--------------------------
let ninjas = ['harry', 'ron', 'hermione', 'neville'];
ninjas[3] = 'voldemort';

console.log(ninjas);
console.log(ninjas.length);

// JOIN
let s1 = ninjas.join('>');
console.log(s1);

// indexOf
let p1 = ninjas.indexOf('ron');
console.log(p1); 

// ARR CONCAT
let tmp = ninjas.concat(['hagrid', 'filch']);
console.log(tmp, ninjas);

// push
ninjas.push('hagrid'); // this method pushes in the original array and RETURNS the new length
console.log(ninjas); 

ninjas.pop();// this method pops the last element and RETURNS the popped value
console.log(ninjas);

//--------------------------------------------------------------------------------

//----------------NULL + UNDEFINED-------------------------------------------
let qwerty;

console.log(qwerty, qwerty + 3, `The age is ${qwerty}`);

let value = null;
console.log(value, value + 3, `The val is ${value}`); // null + 3 = 3

// ---------------------------BOOLEANS + COMPARATORS -----------------

let em = 'sjsj@gmail.com';
let res = em.includes('gmail');
console.log(res);

let ar = ninjas;
res = ar.includes('harry');
console.log(res);

console.log(em == 'harry@gmail.com');

// -------------------------LOOSE VS STRICT COMPARISONS---------------------------------
age = 25;
console.log(age == '25');// true bcoz typecasting occurs and then equality checked

// ask is age === '25' ?
console.log(age === '25');// false bcoz of datatype mismatch

// ----------------------------TYPE CONVERSIONS-----------------------------

let num = '25';
num = Number(num); // explicit typecast
console.log(num + 5, typeof num);

num = 25;
num = String(num);
console.log(num + 5, typeof num);

num = Boolean(100);
num = Boolean('s');
console.log(num, typeof num);