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

// Find
const money = [20,50,60,40,50,20,30];
const firstHighMoney = money.find((x) => {
    return x > 50;
});;
console.log(firstHighMoney);

// sort
// strings
const names = ['harry', 'ron', 'hermione', 'chun-li'];
names.sort();
names.reverse();
console.log(names);

// numebers - weird
const nums = [10,20,30,3,40,50];
// nums.sort();// sorts only by the first LHS digits
nums.sort((a,b) => {
    return  a - b ;// does not return a boolean, returns positive,neg or 0
});
console.log(nums);

// objs
scores.sort((a,b) => {
    return b.score - a.score;// +1 if b is to be returned, -1 if a, 0 if equal
});

