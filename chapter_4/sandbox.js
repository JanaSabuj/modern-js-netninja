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

const wish = function(time = 'night', name = 'sabuj'){
    console.log(`Good ${time} ${name}`);
};

wish();
wish('morn', 'agneyee');

