const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e){
    console.log(e.target.value);
    heading.textContent = e.target.value;
}

function onChecked(e){
    console.log(e.target.checked);
    heading.textContent = e.target.checked ? 'Checked' : 'Not Checked';
}

function onFocus(e){
    console.log(e);
    e.target.style.outlineStyle = 'solid';
    e.target.style.outlineWidth = '2px';
    e.target.style.outlineColor = 'blue';
}

function onBlur(e){
    e.target.style.outlineStyle = 'none';
}

itemInput.addEventListener('input', onInput);

//Combo - BOX
// priorityInput.addEventListener('input', onInput);

priorityInput.addEventListener('change', onInput);

checkbox.addEventListener('input', onChecked);

itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);