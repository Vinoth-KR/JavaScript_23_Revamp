function getMetaInfo(e){
    let retVal = '';

    if(e.altKey) retVal = 'Alt';
    if(e.ctrlKey) retVal = 'Ctrl';
    if(e.shiftKey) retVal = 'Shift';
    if(e.metaKey) retVal = 'Meta';

    return retVal;
}

const onKeyDown = (e) => {
    const insertDivEl = document.querySelector('#insert');

    insertDivEl.innerHTML = '';

    const keyCodes = {
        'e.key' : e.key === ' '? 'Space' : e.key,
        'e.keyCode' : e.keyCode,
        'e.code' : e.code
    }

    let metaKey = getMetaInfo(e);

    if(metaKey !== '') keyCodes['e.metaInfo'] = metaKey;

    for(let keyInfo in keyCodes){

        const divEl = document.createElement('div');
        divEl.classList.add('key');
        
        //Label elements
        const smlEl = document.createElement('small');
  
        const keyLabel = document.createTextNode(keyInfo);
        smlEl.appendChild(keyLabel);

        //Value - KeyCODE
        const keyValue = document.createTextNode(keyCodes[keyInfo]);

        //Adding the childNodes to the div
        divEl.appendChild(keyValue);
        divEl.appendChild(smlEl);

        //Finally adding the div element to the INSERT div.

        insertDivEl.appendChild(divEl);
    }
}


window.addEventListener('keydown', onKeyDown);