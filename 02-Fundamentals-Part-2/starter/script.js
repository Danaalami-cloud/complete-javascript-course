'use strict'; // this is for activating strict mode to write secure JS code
/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('i can drive');

const interface = 'Audio';
*/
// function decleration
/*
function logger() {
    console.log('my name is dana');
}

// calling / running / or invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

// function decleration
//birthyear is also alled an input
// function calcAge1(birthYear)  {
//    return 2037 - birthYear;
// }
// whatever between the paranthesis is  called an argument
// const age1 = calcAge1(1991);
// console.log(age1);

// function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear
// }
// const age2 = calcAge2(1991);

// console.log(age1, age2);

// Arrow function
/*
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'jon'));
console.log(yearsUntilRetirement(1980, 'bob'));
*/

// functions calling other functions
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
    return juice;
}
console.log(fruitProcessor(2,3));
*/

/*
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement
    } else {
        console.log(`${firstName} has already retired`);
        return -1
    }
    // return retirement;
    // return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'jonas'));
console.log(yearsUntilRetirement(1950, 'mike'));
*/


/*
 const calcAverage = (a, b, c) => (a + b +c) / 3;
 // Test 1
 let scoreDolphins = calcAverage(44, 23, 71);
 let scoreKoalas = calcAverage(65, 54, 49);
 console.log(scoreDolphins, scoreKoalas);

 const checkWinner = function(avgDolphins, avgKoalas) {
    if(avgDolphins >= 2 * avgKoalas) {
        console.log(`dolphins win (${avgDolphins} vs. ${avgKoalas})` );
    } else if(avgKoalas >= 2 * avgKoalas) {
        console.log(`koalas win (${avgKoalas} vs. ${avgDolphins})`)
    } else {
        console.log('No team wins');
    }
 }

 checkWinner(scoreDolphins, scoreKoalas);

 // Test 2
 scoreDolphins = calcAverage(85, 54, 41);
 scoreKoalas = calcAverage(23, 34, 27);
 console.log(scoreDolphins, scoreDolphins)
 checkWinner(scoreDolphins, scoreKoalas);
 */

 /*
 const friend1 = 'Michael';
 const friend2 = 'steven';
 const frind3 = 'david';

 const friends = ['Michael', 'steven', 'david'];
 console.log(friends);

//  const years = new Array(1991, 1984, 2008, 2020);
 console.log(friends[0]);
 console.log(friends[2]);
 console.log(friends.length); // length is called property gives us the number of elements in an array
 console.log(friends[friends.length -1]); // expression produces value

 friends[2] = 'jay';
 console.log(friends[2]);

 const firstName = 'jonas';
 const jonas = ['joans', 'scmoot', 2037 - 1991, 'teacher', friends];
 console.log(jonas);

 // Eccercise 
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length -1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length -1])];
console.log(ages);
*/

/*
const friends = ['Michael', 'steven', 'david'];
const newLength = friends.push('jay') // push is a method function that we call that is attached to the array. Adding another element to an array. because push is a function, it can also return value, which is the length of the new array
console.log(friends);
console.log(newLength);

friends.unshift('jon') // adding element to the begining of the array
console.log(friends);

// remove the last element from an array
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

// remove first element from an array
friends.shift();
console.log(friends);
console.log(friends.indexOf('steven'));
console.log(friends.indexOf('bob'));

console.log(friends.includes('steven'));
console.log(friends.includes('bob'));

if (friends.includes('steven')) {
    console.log('you have a friend called steven');
}
*/

// Array challenge
/*
const calcTips = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTips(bills[0]), calcTips(bills[1]), calcTips(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(bills, tips, totals);
*/

// Objects- group together a bunch of variables. use objects for more unstructured data
/*
const jonasArray = [
    'joans',
    'schumaker',
    2037 - 1991,
    'teacher',
    ['michael', 'paul', 'steven']
];

const jonas = { // the curly braces here is to define an object. firsstName, lastName, etc are called keys and joans. shumaker, etc are called values. Jonas has 5 properties: firstName, lastName, an the other before colon.
    firstName: 'jonas',
    lastName: 'schumaker',
    age:    2037 - 1991,
    job:  'teacher',
    friends: ['michael', 'paul', 'steven']

}
*/ 

/*
// How to get data from an object
const jonas = {
    firstName: 'jonas',
    lastName: 'schumaker',
    age:    2037 - 1991,
    job:  'teacher',
    friends: ['michael', 'paul', 'steven']
};
console.log(jonas);

//get proanoperty from an object
console.log(jonas.lastName);
// or
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('what do you want to know babes? choose beteween firstName, lastName, age, job, and friends');
console.log(jonas[interestedIn]);

if(jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('wrong request! choose beteween firstName, lastName, age, job, and friends')
}

jonas.location = 'portugal';
jonas['twitter'] = '@jonasschumaker';
console.log(jonas);

// challenge
// joans has 3 friends, and his best friend is called michael

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his bestfriend is called ${jonas.friends[0]}`);
*/

// Object Methods
/*
const jonas = {
    firstName: 'jonas',
    lastName: 'schumaker',
    birthYear:  1991,
    job:  'teacher',
    friends: ['michael', 'paul', 'steven'],
    hasDriversLicense: true,
// calcAge is the property of the jonas object. any function attached to an object, is calle method
    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }
        // OR
    // calcAge: function(birthYear) {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // } 
        // OR
        calcAge: function() {
            this.age= 2037 - this.birthYear;
            return this.age
        }
};

console.log(jonas.calcAge());
console.log(jonas.age);
*/

// challenge 
// "jonas is a 46-year old teacher, and has a driver's license"
/*
const jonas = {
    firstName: 'jonas',
    lastName: 'schumaker',
    birthYear:  1991,
    job:  'teacher',
    friends: ['michael', 'paul', 'steven'],
    hasDriversLicense: true,

    calcAge: function(birthYear) {
        this.age = 2037 - this.birthYear
        return this.age
    },
    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()} year old ${jonas.job} and has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
    }
};

console.log(jonas.calcAge());
console.log(jonas.getSummary());
*/


// Coding challenge
/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};
john.calcBMI();
console.log(john.bmi);

mark.calcBMI();
console.log(mark.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName} 's BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName} 's BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}
*/

// Loops
// console.log('Lifting weights repititioon 1');
// console.log('Lifting weights repititioon 2');
// console.log('Lifting weights repititioon 3');
// console.log('Lifting weights repititioon 4');
// console.log('Lifting weights repititioon 5');
// console.log('Lifting weights repititioon 6');
// console.log('Lifting weights repititioon 7');
// console.log('Lifting weights repititioon 8');
// console.log('Lifting weights repititioon 9');
// console.log('Lifting weights repititioon 10');

// for loop keeps runing while condition is TRUE
/*
for(let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting weights repitition ${rep}`);
}
*/

// looping through an array
/*
const jonas = [
    'joans',
    'schumaker',
    2037 - 1991,
    'teacher',
    ['michael', 'paul', 'steven'],
    true
];
const types = [];

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);
    // Filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i=0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break for loop
for (let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] !== 'string') continue
    console.log(jonas[i], typeof jonas[i]);
}

for (let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] === 'number') break
    console.log(jonas[i], typeof jonas[i]);
}
*/
// Looping through the array backwards
// For loop
/*
const jonas = [
    'joans',
    'schumaker',
    2037 - 1991,
    'teacher',
    ['michael', 'paul', 'steven'],
    true
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------ starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repitition ${rep}`);
    }
}
*/

// While Loop. Because it will run while the condition is true
/*
for(let rep = 1; rep <= 10; rep++) {
    // console.log(`Lifting weights repitition ${rep}`);
}

let rep = 1;
while(rep <= 10) {
    // console.log(`WHILE: Lifting weights repitition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(` you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}
*/
// Coding challenge 4 from section 3
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTips = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
    const tip = calcTips(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));



