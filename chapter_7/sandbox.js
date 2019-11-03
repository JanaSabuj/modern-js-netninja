console.log('Form has been inititated');
// when we submit a form, the page refreshes by default
// we can prevent that by using prevent default event

const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
// const username = document.querySelector('#username');
// console.log(form);
form.addEventListener('submit', (e) => {
    e.preventDefault();// prevent default page reload
    // console.log(e);
    // console.log(username.value);// #username references the input firld.
    //easier way
    console.log(form.username.value);// looks for id or name property

    //validation
    const username = form.username.value;
    const usernamePattern = /^[a-zA-Z]{6,12}$/;

    if(usernamePattern.test(username)){
        // pass!
        feedback.textContent = 'Username is Great!!';

    }else{
        feedback.textContent = 'Username must contain letters bw 6 and 12 chars :(';
    }


});

// regex - ^mnmnmn$ (start from beg and end at end . separate word)
// . -> matches any character
// {6,10} between 6 to 10 chars 
// testing regex

const uname = 'shaun123';
const pattern = /^[a-zA-Z0-9]{6,10}$/;

const result = pattern.test(uname);
console.log(result);

if(result){
    console.log('regex test passes');
}

let result2 = uname.search(pattern);
console.log(result2);// prints the string position where the match has been found