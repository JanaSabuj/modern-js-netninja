console.log('DOM manipulation started!');

// best way to target a specific element is to inspect it and get the CSS selector
const p1 = document.querySelector('body > div > p:nth-child(1)');// p1 stores the REFERENCE to the element
console.log(p1);

const p2 = document.querySelector('body > div > p:nth-child(2)');
console.log(p2);

const p3 = document.querySelector('body > div:nth-child(2) > p.error');
console.log(p3);

const p4 = document.querySelector('body > div.error');
console.log(p4);

// ------------- querySelectorAll()
const paras = document.querySelectorAll('p');
console.log(paras); // NodeList
console.log(paras[1]);

paras.forEach((para, index) => {
    // console.log(para);
    para.innerHTML = `<strong> Hello darkness ${index} </strong>`
});

const errors = document.querySelectorAll('.error');
console.log(errors);

// Other methods to get elements by ID,Class etc
const title = document.getElementById('title');
title.style.color = 'red';
console.log(title);

const errs = document.getElementsByClassName('error');
console.log(errs);// HTML COLLECTION - we cannot use forEach method here unlike NodeList

const ps = document.getElementsByTagName('p');
console.log(ps);// HTMLCollection
console.log(ps[1]);// HTMLCollection

// grabbing text and changing it with innerText
const h1 = document.querySelector('#title');
console.log(h1.innerText);// innerText method

// h1.innerText = 'hello guys';// replace
h1.innerText += ' hello guys';// append

const paragraphs = document.querySelectorAll('p');
paragraphs.forEach((para) => {
    para.innerText += ' done';
});

const uniqueDiv = document.querySelector('body > div.error > div');
// console.log(uniqueDiv.innerHTML);
// uniqueDiv.innerHTML += `<p> Harry </p>`;

// getting and setting attributes
const link = document.querySelector('body > a');
console.log(link.getAttribute('href'));// get the attribute
link.setAttribute('href', 'https://github.com/JanaSabuj'); // set attribute requires 2 args
link.setAttribute('style', 'color: green');// adding a new Attribute


// changing CSS Styles
const tit = document.querySelector('h1');
console.log(tit.style);// CSSDeclaration

tit.style.color = 'orange';
tit.style.border = 20;
tit.style.fontSize = 60;

// change classes
const content = document.querySelector('body > div.error');
console.log(content.classList);// DOMTokenList
content.classList.remove('error');
content.classList.add('success');

// para.innerText gets us all the VISIBLE text
// para.textContent gets us all the text 

content.classList.toggle('failure');// gives failure class
content.classList.toggle('failure');// removes it
