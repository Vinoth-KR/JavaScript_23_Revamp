const clearBtn = document.querySelector('#clear');

//Javascript Event Listeners.
// clearBtn.onclick = function(){
//     alert('Clear Items');
// }

function onClear(){
    const listItems = document.querySelectorAll('li');

    listItems.forEach((item) => item.remove());
}

// addEventListener
clearBtn.addEventListener('click', onClear);

//***MOUSE EVENTS*****

const logo = document.querySelector('img');

const onClick = () => console.log('click Event');

const onDblClick = () => {
    document.body.style.backgroundColor = 'goldenrod';
    document.body.style.color='blue';
}

const onRightClick = (e) => {console.log(e);
    e.srcElement.style.backgroundColor
    = 'blue';
}

const onMouseDown = () => console.log('Mouse Down');

const onMouseUp = () => console.log('Mouse Up');

const onWheelRotate =() => console.log('Wheel Rotate');

const onDragStart = () => console.log('Started the drag operation');

const onDragging = () => console.log('Dragging in Progress');

const onDragEnd = () => console.log('Drag operation Ended!')

logo.addEventListener('click',onClick);
logo.addEventListener('dblclick',onDblClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('wheel',onWheelRotate);
logo.addEventListener('mouseover',onWheelRotate);
logo.addEventListener('mouseout',onWheelRotate);
logo.addEventListener('dragstart',onDragStart);
logo.addEventListener('drag',onDragging);
logo.addEventListener('dragend',onDragEnd);


///***********Keyboard Events***************/

const itemInput = document.getElementById('item-input');


const onKeyDown = (e) => {
    console.log('KeyDown');
    console.log(e.key);

    if(e.repeat){
        console.log('You are holding down ' + e.key);
    }

    console
    .log('Shift :'+ e.shiftKey);
    console.log('Ctrl :'+ e.ctrlKey);
    console.log('Alt :'+ e.altKey);
}

const onKeyPress = () => console.log('keyPress');

const onKeyUp = () => console.log('keyUp');

itemInput.addEventListener('keydown', onKeyDown);
itemInput.addEventListener('keypress', onKeyPress);
itemInput.addEventListener('keyup', onKeyUp);

