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