const form = document.getElementById('item-form');


//BASIC form validation
// function onSubmitBasic(e){
//     e.preventDefault();

//     const item = document.getElementById('item-input').value;
//     const priority = document.getElementById('priority-input').value;

//     if(item === '' || priority === '0'){
//         alert('Please fill in all fields!');
//         return;
//     }

//     console.log(item, priority);
 
// }

// //FORM_DATA

// function onSubmitFormData(e){
//     e.preventDefault();

//     const formData = new FormData(form);
    
//     const itemVal = formData.get('item');
//     const prirorityVal = formData.get('priority');

//     const entries = formData.entries();

//     for(let entry of entries){
//         console.log(entry[0], entry[1]);
//     }

// }

// form.addEventListener('submit', onSubmitFormData);



//EVENTS_DELEGATION 

const listItem = document.querySelectorAll('li');

listItem.forEach(item => {
    item.addEventListener('click', (e)=> {
        e.target.remove();
    })
})

//Using a single function -

const list = document.querySelector('ul');

list.addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI') e.target.remove();
})