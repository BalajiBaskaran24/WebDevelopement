//'use strict';//Use this at the top 
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

var ivar = 10;
var ivar = 20;
console.log(ivar);//20
// let i = 30;//Will throw error
let jlet = 10;
// let jlet = 20;//Cannot redeclare block scoped variable


//Hoisting 
console.log(varExample);//undefined. Value is not defined for an object
//console.log(balaji);//Reference error. balaji is not defined
//var varExample;//Internally this will be initialized
varExample = 10;
varExample = 5;
console.log(varExample);
var varExample = 2;

//j;//Thorws reference error
j = 5;//Will not throw any error

//Let example
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
for (var ivar = 0; ivar < month.length; ivar++) {
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

//Both filterCWoFun(without function) and filterCWithFun(with function) are same
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

    //fullname: () => `${this.firstname} ${this.lastname}`
    fullname: function () {
        console.log('print from person function');
        return `${this.firstname} ${this.secondname}`;
    },
    normalfunExample: function () {
        console.log(`Print from normal function with dollar ${this}`);
        console.log('Print from normal function without dollar')
        console.log(this);
    },
    arrowkeyfnExample: () => {
        console.log(`Print from arrow function with dollar symbol ${this}`);
        console.log('Print without dollar');
        console.log(this);
    }
};

//Scope of this in arrow function and normal function
console.log('Normal vs arrow key function');
person.normalfunExample();
person.arrowkeyfnExample();


console.log(person.fullname());//It returns undefined for arrow function. This inside arrow function will have different meaning.

function testfun() {
    return this;
}
console.log(testfun());//Prints entire window



//To fetch certain elements from the object
const { firstname: fn, age, address: { city }, secondname, fullname: funcExample } = person;
//renaming firstname to fn
//console.log(firstname);//After rename this will throw error
console.log(age);
console.log(fn);
console.log(funcExample());

//for in loop
console.log('Print all properties of object using for in loop')
//Used hasOwnProperty to skip printing of inherited properties
for (const prop in person) {
    if (person.hasOwnProperty(prop)) {
        const element = person[prop];
        console.log(element);
    }
}

console.log('Convert object to JSON and log it in console');
console.log(JSON.stringify(person));

//This delete is not required. During stringify the methods will not be included 
// delete person.normalfunExample();
// delete person.arrowkeyfnExample();
// delete person.fullname();

console.log('Convert object to JSON and log it in console after deleting all functions');
console.log(JSON.stringify(person));
const SerializedData = JSON.stringify(person);
const DesrializedData = JSON.parse(SerializedData);
console.log(DesrializedData.age);
//console.log(DesrializedData.fullname());//This will throw error, becaus functions will be skipped during serialize and deserialize
// {"firstname":"Balaji","secondname":"Baskaran","age":27,"married":true,"address":{"city":"salem","state":"TN"}}



//--------------------Classes--------------------
console.clear();
class SampleClass {
    #PrivateVariable;//Put # sign in front
    constructor(inp1, inp2) {
        this.input1 = inp1;
        this.input2 = inp2;
    }
    //Get and set can be used for private and public 
    get priVar() {
        return this.#PrivateVariable;
    }

    set priVar(value) {
        this.#PrivateVariable = value;
    }

    getFullName = () => `${this.input1} and ${this.input2}`;
}

const SampInst1 = new SampleClass('First', 'Second');
const SampInst2 = new SampleClass('third', 'fourth');
console.log(SampInst2.getFullName());

//--------------------IIFE--------------------
/*(function () {
    // …
})();

(() => {
    // …
})();

(async () => {
    // …
})();*/

// The first is the anonymous function with lexical scope 
// enclosed within the Grouping Operator().This prevents accessing 
// variables within the IIFE idiom as well as polluting the global scope.

//The second part creates the immediately invoked function expression() 
//through which the JavaScript engine will directly interpret the function.
(
    function (app) {
        app.IIFEFun = function () {
            console.log('Hello from IIFE function');
        }
    }
)(window.app = window.app || {});

app.IIFEFun();

//Can be used multiple times for same window.app variable
//Recommended to keep property name as app. But this can be changed
//to any name 
(
    function (app, privateval) {
        PrivateIIFEVar = privateval;
        console.log(PrivateIIFEVar + 'Printed in IIFE anonymous function block');
        app.IIFEVar = 'IIFE variable';
    }
)(window.app = window.app || {}, 'Private var');

console.log(app.IIFEVar);


//--------------------Use strict--------------------
console.clear();
//Below statements will thow error if 'use strict'; is used 
mytest = 2;
'test'.myInfo = 'Hello';
function add(x, x) {
    return x + x;
}

console.log(add(5, 4));//8

function test() {
    'use strict';//this will impact only particular method or
                 //it cane be used in IIFE
}

//--------------------Best Practices--------------------
//1. Add 'Use strict' to the top of every file and IIFE
//2. Do not use var, use let or constant preferred const
//3. Naming use camel case for variables, functions, etc and Pascal case for classes
//4. Use a separate file for your javascript
//5. Use semicolons
//6. don't assume


