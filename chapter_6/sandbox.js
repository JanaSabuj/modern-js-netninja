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