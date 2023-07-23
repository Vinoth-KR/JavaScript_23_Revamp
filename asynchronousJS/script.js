

//#region TimeOut

// function changeText() {
//     document.querySelector('h1').textContent = 'Text Changed from callback';
// }

// const timerId = setTimeout(changeText, 2000);

// document.querySelector('button').addEventListener('click', () => {
//     console.log(`Removing Timer - ${timerId}`)
//     clearTimeout(timerId);
// })

//#endregion 


//#region Interval
const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Violet', 'Orange', 'Indigo'];
let intervalId = 0;

function changeColor(){    
    let index = Math.floor(Math.random() * 6);
    //let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    //document.querySelector('body').style.backgroundColor = `${randomColor}`;
    document.querySelector('body').style.backgroundColor = colors[index];
}

function startColorChange(){
    intervalId = setInterval(changeColor, 1500);
}

function stopColorChange(){
    clearInterval(intervalId);
    document.querySelector('body').style.backgroundColor = 'transparent';
}

document.querySelector('#start').addEventListener('click', startColorChange);
document.querySelector('#stop').addEventListener('click', stopColorChange);

//#endregion


