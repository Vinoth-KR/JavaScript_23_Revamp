
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

console.log(addPlusSign(200))