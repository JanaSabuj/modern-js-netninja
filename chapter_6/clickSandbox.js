console.log('Click events');

// first locate the place to click
const button = document.querySelector('button');
console.log(button);

const ul = document.querySelector('ul');
// add the click listener
button.addEventListener('click', () => {
    console.log('you clicked the button  ;');
    // ul.innerHTML += `<li> You added me </li>`;
    const li = document.createElement('li');
    li.textContent = 'new todo added';
    // ul.append(li);
    ul.prepend(li);
});

// add click listeners to every li tag
const items = document.querySelectorAll('li');
console.log(items);

items.forEach( (item) => {
    item.addEventListener('click', (e) => {
        // console.log('item has been clicked');
        console.log(e.target);
        e.target.style.textDecoration = 'line-through';
        e.target.remove();// REMOVE from the DOM
    });
});

// but the drawback till now is the fact that new todos cannot be deleted because they have no clicklisteners
// for that, we need event delegation