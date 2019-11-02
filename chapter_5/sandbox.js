console.log('Welcome to objects');

/*
objects in real life have:
> properties
> things it can do
*/

// object literals
let user = {
    name: "sabuj",
    age: 20,
    email: 'sabujlovescoding@gmail.com',
    marks: ['8.76', '9.37'],
    login: function(){
        console.log('User has logged in');
    },
    logout: function(){
        console.log('User has logged out');
    },
    logBlogs: function(){
        console.log(this);// this is a context object for 'user' i.e, this = user here
        // console.log(this.marks);
        this.marks.forEach((val) => {
            console.log(val);
        });
    },
    arrowFunc: () => {
        console.log(this);
    },
    sameFunc(){
        console.log('This is another better syntax for defining object methods!');
    },
    logMarks(){
        this.marks.forEach((val) => {
            console.log(val.subj, val.marks);
        });
    }

};
console.log(user);
console.log(user.email);// dot notation
console.log(user['email']);

user.name = 'greenindia'; // update object values

let v = 'name';
console.log(user[v]);// bracket notation used for this dynamic purpose
console.log(typeof user);

// adding methods to objects
user.login();
user.logout();

// this - a context object
user.logBlogs();
console.log(this); // the universal window object for JS

/* 
Imp - we use normal functions as methods in the object and NOT Arrow functions because 
arrow functions have no access to the correct this keyword. Inside the method arrow function, the this 
keyword refers to the this which was present at the time when the method was called.
*/
user.arrowFunc();// outputs the global arrow object

user.sameFunc();

//Array of objects
user.marks = [
    {subj: "DS", marks: 90},
    {subj: "Web Dev", marks: 95}
];

user.logMarks();

// Math Object
console.log(Math);

const area = 7.7;

console.log(Math.round(area)); // normal round
console.log(Math.floor(area)); // below
console.log(Math.ceil(area)); // upper
console.log(Math.trunc(area)); // ignore decimal

const random = Math.random();// b/w 0 to 1
console.log(Math.round(random * 100));// random no b/w 0 and 100

// Imp. *****primitves vs references******
//Primitives on Stack
let x = 10;
let y = x;
y = y + 2;
console.log(x, y); // 10 12

//References on Heap

const user1 = { name: 'ryu', marks: 20};
const user2 = user1;

console.log(user1, user2);

user1.marks = 50;
console.log(user1, user2);// both are changed, NOT just user1

