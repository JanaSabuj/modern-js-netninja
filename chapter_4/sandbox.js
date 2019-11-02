console.log('Sandbox.js is connected');

// f
// function declaration - D.N end with a semicolon - can be HOISTED
function greet(){
    console.log(' Good Morning friends !!!; Star this repository');
}
greet();
greet();

// function expression - ends with a semicolon - cannot be HOISTED - hence a better practice to use this
const speak = function(){
    console.log('Good Afternoon!');
};
speak();
speak();

/* HOISTING in JS -> All func DECLARATIONS (not expressions not initilaiziations) are automatically
   hosted to the top of the js file 
   eg - var x
   eg - function greet()

   all these can be written at the end of the .js file and code would still run OK bcoz of hoisting
   function greet(){
           console.log(' Good Morning friends !!!; Star this repository');
    }
*/

// ---------------argument -> in fn call   parameter -> in fn declaration
const wish = function(time = 'night', name = 'sabuj'){ // called parameters here
    console.log(`Good ${time} ${name}`);
};
wish();
wish('morn', 'agneyee');// called arguments here

// -------------- return values from functions
const calcArea = function(radius){
    return 3.14 * radius**2;
};
const area = calcArea(10);
console.log(area);

// ARROW FUNCTIONS
const vol = (radius) => {
    return 4/3 * 3.14 * radius**3;
};

//  for one arg, one return
// const vol = radius => 4/3 * 3.14 * radius**3;
console.log('vol is ', vol(10));
const wishMe = () => {
    return 'hello world Sabuj';
};

console.log(wishMe());

// Functions vs Methods
// Methods are funcs which are defined on an object
console.log('shaun'.toUpperCase()); // a method defined on a string object


// ----------------- callBacks and ForEach -------------------------
// callbackF - func passed as an argument to another function
const myFunc = (callBack) => {
    let x = 20;
    callBack(20);
};

myFunc((x) => {
 console.log('Im the callback ', x);
});

// forEach method expects a callback function
let langs = ['c/c++', 'js', 'python', 'go'];
langs.forEach((val, index) => {
    console.log(index, val);
});
