// Filter
const users = [
    {name: 'mario', premium: true, profit: 200},
    {name: 'shaun', premium: false, profit: 401},
    {name: 'george', premium: true, profit: 600},
    {name: 'chun-li', premium: false, profit: 801},
];
const premiumUsers = users.filter((user) => {
    // user.premium  =false; // never update the arg user or else original values will be changed
    return user.premium;// if premium == true, return true;
});
console.log(premiumUsers);

// Map
const prices = [20,30,15,14,21];
const halfPrices = prices.map((x) => {
    return x / 2 ;
});
console.log(halfPrices);
const halfProfits = users.map((user) => {
    if(user.profit % 2 == 0){
        // user.premium = false; never update the original array
        return {name: user.name, premium: true, rev: 'even'};// always return a new object
    }else{
        return {name: user.name, premium: false, rev: 'odd'};
    }
});
console.log(halfProfits);


// Reduce
const scores = [
    {name: 'mario', score: 20},
    {name: 'chun-li', score: 40},
    {name: 'mario', score: 20},
    {name: 'chun-li', score: 40},
    {name: 'mario', score: 20},
    {name: 'chun-li', score: 40},
    {name: 'mario', score: 20},
    {name: 'chun-li', score: 40},
    {name: 'mario', score: 20},
    {name: 'chun-li', score: 40},
];
const marioScores = scores.reduce((acc, curr) => {
    if(curr.name === 'mario'){
        acc += curr.score; // add only mario's scores
    }

    return acc;
}, 0);
console.log(marioScores);