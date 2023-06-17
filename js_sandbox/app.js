// TYPE CONVERSION
let val;

//Number to String
// val = String(5)
// val = String(4+4)
// val = String(4*4)

// //Bool to string
// val = String(true)

// //Date to String
// val = String(new Date());

// //toString()
// val = (5).toString();
// val = (true).toString();

// //String to Number
// val = Number('5');
// val= Number(false)
// val = Number(null)

// //Nan examples
// val = Number('hello')
// val = Number([1,2,3,4])

// //parseInt
// val = parseInt('100.40')
// val = parseFloat('100.40') // Only for decimals

//Output
// console.log(val)
// console.log(typeof val)
// //console.log(val.length)
// console.log(val.toFixed(2));

// const val1 = '5';
// const val2 = 6;
// const sum  = val1+ val2;

// console.log(sum)
// console.log(typeof sum)

// Math objects

// const num1 = 100;
// const num2 = 50;
// let valT;

// valT = Math.PI;

// valT = Math.ceil(2.4549)
// valT = Math.sqrt(64)
// valT = Math.abs(-121233)
// valT = Math.pow(2, 10)

//Strings

// const firstName = 'Vinoth'
// const lastName = 'KR'

// val = `My name is ${firstName} ${lastName}`

// const numbers = [100, 56, 44, 20, 34, 4]

// val = numbers.sort((x, y) => {return y-x})

// const id = '190'

// if(id >= 100) val = id;
// console.log(val)

// WINDOW Objects

//Alert
// alert('hello');

// Prompt

// const input = prompt("Enter your Name :");
// alert(input)

// confirm

// if(confirm("Are you sure to delete")){
//     alert('Deleted')
// }else {
//     alert('Action cancelled')
// }

// outerHeight, outerWidth, innerHeight, innerWidth

//scrollpoints using ScrollX and scrollY will give positions of the scroll window.

// location.

/// SCOPES

//Global scope
// var a = 1;
// let b = 2;
// const c = 3;

// // Block scope

// if(true){
//     var ac = 4;
//     let b = 5;
//     const c = 6;

//     console.log(`Global Scope : ${ac} ${b} ${c}`)
// }

// console.log(`Global Scope : ${a} ${b} ${c}`)

// Document

val = document.links;

console.log(val);


if (true) {
  console.log("Yes, it was true indeed!");
}
