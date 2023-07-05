//#################### Challenge 1 ########

const people = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      phone: '111-111-1111',
      age: 30,
    },
    {
      firstName: 'Jane',
      lastName: 'Poe',
      email: 'jane@gmail.com',
      phone: '222-222-2222',
      age: 25,
    },
    {
      firstName: 'Bob',
      lastName: 'Foe',
      email: 'bob@gmail.com',
      phone: '333-333-3333',
      age: 45,
    },
    {
      firstName: 'Sara',
      lastName: 'Soe',
      email: 'Sara@gmail.com',
      phone: '444-444-4444',
      age: 19,
    },
    {
      firstName: 'Jose',
      lastName: 'Koe',
      email: 'jose@gmail.com',
      phone: '555-555-5555',
      age: 23,
    },
  ];

  const youngPeople = people.filter(val => val.age <= 25)
                        .map((val) => ({
                                name: val.firstName+ ' '+val.lastName,
                                email: val.email
                            })
                        );


console.log(youngPeople);


//#################### Challenge 2 ########################

//Adding all positive numbers in the array

const numbers = [2, -30, 50, 20, -12, -9, 7];

let positiveSum = numbers.filter(val => val > 0).reduce((acc, currVal) => acc+currVal, 0);

console.log(positiveSum); // 79



//################# Challenge 3 ##################
//Capitalized words
const words = ['coder', 'programmer', 'developer'];

const capitalizedWords = words.map(str => str[0].toUpperCase()+str.slice(1, str.length));
console.log(capitalizedWords); // ['Coder', 'Programmer', 'Developer']