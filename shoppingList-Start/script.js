function createNewItem(item){
    const li = document.createElement('li');

    li.appendChild(document.createTextNode(item));

    const btn = createButtonforItem('btn-link text-red');

    const icon = createIconforDelete();

    btn.appendChild(icon);

    li.appendChild(btn);

    document.querySelector('ul').appendChild(li);

}

function createButtonforItem(classes){
    const btn = document.createElement('button');
    btn.className = classes;
    return btn;
}

function createIconforDelete(){
    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-xmark';
    return icon;
}

//*********REPLACING ELEMENT********
function replaceFirstItem(){
    const firstItem = document.querySelector('li:first-child');

    const li = document.createElement('li');
    li.innerText = 'Replaced First';

    firstItem.replaceWith(li);
}

function replaceSecondItem(){
    const secondItem = document.querySelector('li:nth-child(2)');

    secondItem.outerHTML ='<li>Replaced Second Item</li>';
}

createNewItem('Deepi Dress')
createNewItem('Aadav Dress')


replaceFirstItem();
replaceSecondItem();