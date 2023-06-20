console.log('hello world from file')

// --------------------Variables--------------------
//3 different ways to declare varaibles
//var - not used in most of the cases
//let - cannot used before declaring
//const - value will be constant. Can be set only once

//3 different types
//number, string and boolean

//Data type of var/let varaible can be changed
var test = 7;
console.log(test + test);//14
var testString = '7';//String
console.log(testString + testString);//77
var testBoolean = true;

const ConstantSample = 5;
//ConstantSample = 10;//This will throw error
//const ConstantSample;//vaue must be declared during initialization

//Hoisting 

console.log(varExample);//undefined. Value is not defined for an object
//console.log(balaji);//Reference error. balaji is not defined
//var varExample;//Internally this will be handled
varExample = 10;
varExample = 5;
console.log(varExample);
var varExample = 2;

//j;//Thorws reference error
j = 5;//Will not throw any error

letsample = 50;
console.log(letsample);
//let letsample = 10;//This will thow cannot access before initialization error

function example() {
    var x = 10;
    let y = 20;

    if (true) {
        var x = 50; // Redeclaring the same variable
        let y = 30; // Creating a new variable within the block
        console.log(x); // Output: 50
        console.log(y); // Output: 30
    }

    console.log(x); // Output: 50
    console.log(y); // Output: 20
}

example();


let birthday = new Date(1996, 5, 24);
console.log(birthday);

const fName = 'Balaji';
const lName = 'Baskaran';
console.log(`${fName} ${lName}`);


//--------------------Array--------------------
let days = ['Mon', 'Tue', 'Wed', 'Thur'];
days.push('fri');
days.pop();
console.log(days);//Prints all 
console.log(days[0]);
console.log(days[3]);
console.log(days[4]);//Undefined

const month = ['Jan', 'Feb'];
month.push('mar');//This will not thorw error. We are just altering the value of constant array
month.push('June');
month.push('July');
//month=['mar'];//Assignment to constant variable. This will throw error

const entry = 1;
//entry++;


let numbers = ['1', '2', '3', '4', '1', '2', '3', '4'];
console.log(`Index of 1 in ${numbers} is ${numbers.indexOf('1')}`);
console.log(`${numbers} is Array:${Array.isArray(numbers)}`);

const startwithJ = month.filter(function (month) {
    return month.startsWith('J');
});
console.log(startwithJ);

//month.map() Used to transform the original array and generate a new array with the transformed values


//--------------------Conditionals--------------------
// const firstname = 'Balaji';
// const lastname = 'Baskaran'

// //This will return true. Only value comparison
// if (firstname == lastname) {

// }

const x = '7';
const y = 7;

//== Operator
//True. Since it compares only the value
if (x == y) {

}

//=== operator
//False. It compares value and type. This is case sensitive
if (x === y) {

}

//Switch case
switch (x) {
    case '7':
        console.log('value is 7');
        break;
    case '2':
        console.log('value is 2');
        break;
}

//Fall through in switch. If break is not added in cases
let fruit = "apple";
let message;

switch (fruit) {
    case "apple":
        message = "It's an apple.";
    case "banana":
        message = "It's a banana.";
    case "orange":
        message = "It's an orange.";
    default:
        message = "Unknown fruit.";
}

console.log(message); // Output: "Unknown fruit."

//--------------------Loop--------------------
console.log('Without iterator variable');
console.log('using const');
for (const currmonth of month) {
    console.log(currmonth);
}
console.log('using var');
for (var currmonth of month) {
    console.log(currmonth);
}
console.log('using let');
for (let currmonth of month) {
    console.log(currmonth);
}

console.log('With iterator variable');
console.log('using const');
//The below for loop will throw error. Since assginement to const occurs multiple times
// for (const i = 0; i < month.length; i++) {
//     console.log(currmonth);
// }
console.log('using var');
for (var i = 0; i < month.length; i++) {
    console.log(currmonth);
}
console.log('using let');
for (let i = 0; i < month.length; i++) {
    console.log(currmonth);
}

while (month.length > 0) {
    month.pop();
}
console.log('after pop');
console.log(month);


//--------------------Functions--------------------
function add(x, y) {
    return x + y;
}

function add(x, y) {
    console.log(x + y);
}

function add(x = 1, y = 2) {
    console.log(x + y);
}

//(Parameter) => { //Method implementation }
const Subtract = (x, y) => {
    return x - y;
}

const Sub = (x, y) => x - y;

console.log(Subtract(5, 2));

//Both filterCWoFun and filterCWithFun are same
const people = ['Tim', 'Bob', 'Bala'];
const filterCWoFun = people.filter((p) => p.substring(0, 1) === 'B');
console.log(filterCWoFun);
const filterCWithFun = people.filter(function (p) {
    return p.substring(0, 1) === 'B';
});
console.log(filterCWithFun);


//--------------------Objects--------------------
const person = {
    firstname: 'Balaji',
    secondname: 'Baskaran',
    age: 27,
    married: true,
    address: {
        city: 'salem',
        state: 'TN'
    },

    //fullname: () => `${firstname} ${lastname}`
    fullname: function () {
        return `${this.firstname} ${this.secondname}`;
    }
};
console.log(person.fullname());//It returns undefined for arrow function

function testfun() {
    return this;
}
console.log(testfun());//Prints entire window

const { firstname: fn, age, address: { city } } = person;
//renaming firstname to fn
//console.log(firstname);//After rename this will throw error
console.log(age);
console.log(fn);