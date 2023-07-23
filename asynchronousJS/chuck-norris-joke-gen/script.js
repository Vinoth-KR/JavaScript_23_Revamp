const xhr = new XMLHttpRequest();
const jokeElement = document.querySelector('#joke');
let url = 'https://api.chucknorris.io/jokes/random?category=';

const categories = ["animal","career","celebrity","dev","fashion","food","history","money","movie","music","political","religion","science","sport","travel" ];



xhr.onreadystatechange = function(){
    if(this.readyState === 4){
        if(this. status === 200){
            let resData = JSON.parse(this.responseText);           
            jokeElement.textContent = resData.value;    
        } else {
            jokeElement.textContent = 'Something went wrong. (Not Funny!)';
        }   
    }
}

function getJoke(){
    let index = Math.floor(Math.random() * 15);    
    xhr.open('GET', url+categories[index])
    xhr.send();
}

document.addEventListener('DOMContentLoaded', getJoke);

document.querySelector('#joke-btn').addEventListener('click', getJoke);