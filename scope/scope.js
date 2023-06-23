const x = 100;

console.log(x, 'in global scope');

function run() {
    console.log(x, 'in function scope');
}

if (true) {
    console.log(x, 'in block scope');
}

run();

//*************FUNCTION SCOPE****************
// function add() {
//     const y = 50;
//     console.log(x + y);
//     console.log(y, 'in function scope');
// }

// add();



function addFunctionBlock() {
    let x = 2;
    let y = 98;
    console.log(x + y, 'addition in function scope')
    console.log(x, y, 'in function scope');
}

addFunctionBlock()


//*************BLOCK SCOPE****************

if (true) {
    const x = 100;
    let y = 20;
    var z = 200;
    console.log(x, y, z, '- const, let, var in block scope');
}

console.log(z, '- var from block scope');

for (var i = 1; i <= 5; i++) {
    console.log(i);
}

console.log(i, '- var-i from loop block scope');


//*************var in FUNCTION SCOPE****************

function doSomething() {
    var vk = 'String';
    console.log(vk, 'var in a function scope used inside func');
}

doSomething();

//The below line would cretae a UnCaught exception error.
//console.log(vk, 'var in a function scope used outside func')


//*************NESTED SCOPE****************
console.log('*************NESTED SCOPE****************');

function first() {
    const x = 100;

    function second() {
        const y = 200;
        //Able to access 'x' from parent scope
        console.log('Addition : ', x + y);
    }

    second();
    //The below line will throw Error - as child scope can't be accessed from parent scope.
    //console.log(y);
}

first();