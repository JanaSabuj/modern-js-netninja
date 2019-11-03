console.log('Hey there!')

const correctAnswers = ['B', 'B', 'B', 'B'];
// get the form
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

// add the event listener for submit
form.addEventListener('submit', (e) => {
    e.preventDefault();// first prevent the default

    let score = 0;
    // get the user answers
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    console.log(userAnswers);

    //check user's answers - +25 for each correct answer
    userAnswers.forEach((ans, index) => {

        if(ans == correctAnswers[index])
            score += 25;
    });
    // console.log(score);
    // display the result
    scrollTo(0,0);
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score)
            clearInterval(timer);// stop the timer
            output++;
    }, 50);
    

});

// window object (global object)
console.log('hello');// window is implied
window.console.log('hello');

console.log(window.document.querySelector('p'));
// window.alert('hello');

setTimeout(() => {
    console.log('Fire this up after 3 ms');
}, 3000);


let i = 0;
const timer = setInterval(() => {
    console.log('Fire this EVERY 1 s');
    i++;
    if(i == 5)
        clearInterval(timer);// stop the timer
}, 1000);




