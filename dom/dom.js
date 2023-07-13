let output;

const parentElement = document.querySelector('.parent');

output = parentElement.children;

console.log(output);

let len = output.length;

for(let item of output){
    console.log(item.innerHTML);
 
    console.log(item.nextSibling?.nodeType)
}

//Query selector - pesudo selectors

// const secondItem = document.querySelector('.child:nth-child(2)');

// console.log(secondItem);

// secondItem.previousElementSibling.style.color = 'red';

//Creating Elements
const newElement = document.createElement('div');
newElement.className = 'child';
newElement.id = 'NewElement';

//Text node - newElement.innerText = 'Hello World!'

const text = document.createTextNode('Hello World!');
newElement.appendChild(text);

//document.body.appendChild(newElement);

document.querySelector('.parent').appendChild(newElement);


console.log(newElement);