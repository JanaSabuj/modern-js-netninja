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

    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');

});



