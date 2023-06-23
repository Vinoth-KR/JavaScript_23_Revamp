//Getting celcius.
const getCelcius = fah => (fah - 32) * (5 / 9);

const fah = 32;
console.log(`${fah}\xB0F converted to celcius : ${getCelcius(fah)}\xB0C`);

//minMax90 function from an array.

const minMax = (num) => ({ min: Math.min(...num), max: Math.max(...num) });

console.log(minMax([1, 2, 3, 4]));

//IIFE - function - Rectangle area

(function (l, b) {
    console.log(`The area of the rectangle with a length ${l} and breadth ${b} is ${l * b}`);
})(10, 20);
