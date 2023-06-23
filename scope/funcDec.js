//#region FuncDeclarations

//The function declarations can be used even before it was initialized.
console.log(addDollarSign(249));

//The function expressions can't be used before intialization - the below line will throw error.
//console.log(addPlusSign(200));


//******Function Declaration******
function addDollarSign(val) {
    return '$' + val;
}

//console.log(addDollarSign(249));


//******Function Expression******
const addPlusSign = function (val) {
    return '+' + val;
};

console.log(addPlusSign(200));

//#endregion


//#region Arrow Functions

//******Arrow Functions******
const add = (x, y) => {
    return x + y;
}

//Short form with implicit return
const subtract = (x, y) => x - y;

//Params without parantheses.- Only for a single param
const square = x => x * x;

//Returning an object.
const createObj = () => ({
    name: 'Deepz'
});

console.log('Addition:', add(10, 4));
console.log('Subtraction:', subtract(10, 4));
console.log('Square:', square(5));
console.log('Obj returned:', createObj());

const numbers = [1, 2, 3, 4, 5];

//Arrow function used as a callback
numbers.forEach(n => console.log(n));

//#endregion


//#region IIFE

//******Immediately Invoked Function Expressions******
//Using x, which is also used in scope.js - The blow line will throw an error.
// const x = 200;
// console.log(x);

const gVar = 100;

(function () {
    const x = '200';
    console.log(x);
    const add = () => console.log('Addition inside IIFE:', x + gVar);
    add();
})();

//Parameters to the IIFE
(function (name) {
    console.log('Hello! ' + name);
})('Aadav');

//#endregion