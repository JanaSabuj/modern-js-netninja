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
    marks: ['8.76', '9.37']
};

console.log(user);
console.log(user.email);// dot notation
console.log(user['email']);

let v = 'marks';
console.log(user[v]);// bracket notation used for this dynamic purpose