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

//  Strings
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