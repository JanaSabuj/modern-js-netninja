console.log('This is chapter 3 OF Control Flow!!');

for(let i = 0; i < 5; i++){
    console.log('in loop', i);
}

const ar = ['hello', 'shaun', 'mario'];
for(let i = 0; i < ar.length; i++){
    console.log(ar[i]);
    let html = `
        <div> ${ar[i]} </div>
    `;
    console.log(html);
}

// -------------------------if

if(ar.length > 2){
    console.log('Good Array');
}else if (Array.length == 2){
    console.log('Bad Array');
}else{
    console.log('Worst Array');
}

// -----------logical AND(&&) OR(||) NOT(!)

if(ar.length > 2 && ar.includes('mario')){
    console.log('Hello Mario with Good Array');
}

let user = false;

//  if user is false, then run the code

if(!user){
    console.log('User must be logged in to continue');
};

// break and continue

// switch
let grade = 'D';

// the case is marked by strict inequality ===
switch(grade){
    case 'A':
        console.log('You got an A!'); break;
    
    case 'B':
        console.log('You got an B!');break;

    case 'C':
        console.log('You got an C!');break;

    case 'D':
        console.log('You got an D!');break;

    default:
       console.log('You failed!');
}

// ---- note block vs global scope .

let age = 20;

if(true){
    let age = 52;
    console.log('inside local', age);
    var name = 'hannah';// var has this disadv. 
}

console.log('global', age, name);// we can access even locally scoped var globally :(
