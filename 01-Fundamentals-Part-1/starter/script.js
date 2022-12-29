
// let js = "amazing";

// console.log(40 + 8 + 23 - 10);

// value is apiece of data. value is the smallest unit
// console.log("Dana");
// console.log(23);

// let firstName = "Dana";
// console.log(firstName);

// // console.log(typeof true);
// // console.log(typeof 'dana');
// // console.log(typeof 23);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// javascriptIsFun = "YES!";
// console.log( typeof javascriptIsFun);

// let age = 30;
// age = 31;

// const birthYear= 1991;
// birthYear = 1990;

// const now = 2037;
// const ageJoans = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJoans, ageSarah);

// console.log(ageJoans * 2, ageJoans / 10, 2** 3 );
// 2** 3 means 2 to the power of 3

// const firstName = 'Jonas';
// const lastName = 'Smith';
// console.log(firstName + ' ' + lastName);

// Assignmnet operators
// let x = 10 + 5; //15
// x += 10; // x = x+10
// x *= 4; // x = x * 4 = 100
// x ++; // x = x + 1
// x --;
// x --;
// console.log(x);

// comparison operators
// console.log(ageJoans > ageSarah);

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, markHigherBMI);

// const firstName = 'Jonas';
// const job = 'programmer';
// const birthYear = 1991;
// const year = 2037;

// const jonas = " I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(jonas);
// OR
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);


// const age = 15;

// if(age >= 18) {
//     console.log('Sarah can start driving license');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is way too young. Wait another ${yearsLeft} years :) `);
// }

// const birthYear = 2012; 
// let century;
// if (birthYear <= 2000) {
//      century = 20;
// } else {
//      century= 21;
// }
// console.log(century);


// const massMark = 78;
//  const heightMark = 1.69;
//  const massJohn = 92;
//  const heightJohn = 1.95;

//  const BMIMark = massMark / heightMark ** 2;
//  const BMIJohn = massJohn / (heightJohn * heightJohn);
//  const markHigherBMI = BMIMark > BMIJohn;

//  if ( BMIMark > BMIJohn) {
//     console.log("mark's bmi is higher than jon's")
//  } else {
//     console.log(" jon's bmi is higher than mark's")
//  }

// type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear) // convert string to number
// console.log(Number(inputYear) + 18);
// console.log(Number('Jonas'));
// console.log(String(23), 23);

//type coercion- values with two different types
// console.log(' I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);

// let n = '1' + 1; // '11'
// n = n - 1;

// console.log(n);

// 5 falsey values: 0, ' ', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('joans'));
// console.log(Boolean({}));

// const money = 100;
// if(money) {
//     console.log("don't spend it all");
// } else {
//     console.log("you should get a job");
// }

// let height = 0;
// if(height) {
//     console.log("height is defined");
// } else {
//     console.log("height is undefined");
// }

// const age = 18;
// if(age === 18) console.log('you just became an adult(strict)');

// if(age == 18) console.log('you just became an adult');

// const favorite = prompt('what is your favorite number?');
// console.log(favorite);

// if(favorite == 23) {
//     console.log("cool 23 is an amazing number")
// } else if(favorite === 7) {
//     console.log("7 is also a cool number")
// } else {
//     console.log("number is not 23 or 7")
// }
 
// if(favorite !== 23) console.log(' why not 23');

// const hasDriversLicense = true; // A
// const hasGoodViion = true; // B

// console.log(hasDriversLicense && hasGoodViion);
// console.log(hasDriversLicense || hasGoodViion);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodViion;

// if(shouldDrive) {
//     console.log('sarah is able to drive')
// } else {
//     console.log('someone else should drive')
// }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodViion && isTired);

// if(hasDriversLicense && hasGoodViion && !isTired) {
//     console.log('sarah is able to drive')
// } else {
//     console.log('someone else should drive')
// }

// const dolphinsScore = (96 + 108 + 89) / 3;
// const koalasScore = (88 + 91 +110) / 3;

// console.log(dolphinsScore);
// console.log(koalasScore);
// if(dolphinsScore > koalasScore) {
//     console.log('dolphins wins')
// } else if(koalasScore > dolphinsScore) {
//     console.log('koalas wins')
// } else if(dolphinsScore ===koalasScore) {
//     console.log('we have a tie');
// }

// Bonus
// const dolphins = (97 + 112 + 101) / 3 ;
// const koalas = (109 + 95 + 106) / 3;

// console.log(dolphins);
// console.log(koalas);

// if(dolphins > koalas && dolphins >= 100) {
//     console.log('dolphins wins')
// } else if(koalas > dolphins && koalas >= 100) {
//     console.log('koalas wins')
// } else if(dolphins ===koalas && dolphins >= 100 && koalas >= 100) {
//     console.log('we have a tie');
// } else {
//     console.log('no one wins babes');
// }
/*
const day = 'tuesday';

switch(day) {
    case 'monday': // day === monday
        console.log('plan my course structure');
        console.log('go to coding meetup');
        break;
    case 'tuesday':
        console.log('prepare video');
    case 'wednesday':
    case 'thursday':
        console.log('write code examples');
        break;
    case 'friday':
        console.log('record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend');
        break;
        default:
        console.log('not a valid day');
}

if(day === 'wednesday') {
    console.log('plany my course and go to coding meetup')
} else if(day === 'tuesday') {
    console.log('prepare video');
} else if(day === 'wednesday' || day === 'thursday') {
    console.log('write code eample');
} else if(day === 'friday') {
    console.log('record videos');
} else {
    console.log('not valid day');
}
*/
/*
const age = 23;
// conditional operator
// age >= 18 ? console.log(' i like to drink wine') : console.log(' i like to drink water'); 

 const drink = age >= 18 ? ' wine ' : 'water';
 console.log(drink);

 console.log(`i like to drink${age >= 18 ? ' wine ' : 'water'}`);
 */

 const bill = 275;
 const tip = bill <+ 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
 console.log(`the bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);