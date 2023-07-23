//#region Callbacks
// const posts = [
//     {title: 'Post One', body: 'This is from post one'},
//     {title: 'Post Two', body: 'This is from post two'}
// ];

// function createPost(post, callbackFn){
//     setTimeout(()=> {
//         posts.push(post);
//         callbackFn();
//     }, 2000);
// }

// function getPosts(){
//     setTimeout(()=> {
//         posts.forEach(function (post){
//             const div = document.createElement('div');
//             div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
//             document.querySelector('#posts').appendChild(div);
//         });
//     }, 1500);
// }


// createPost({title: 'Post Three', body: 'This is from post three'}, getPosts);

//#endregion

//#region AJAX & XHR

// const xhr = new XMLHttpRequest();


// function processReposList(repo){
//     const li = document.createElement('li');
//      li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;
//     document.querySelector('#results').appendChild(li);
// }


// xhr.open('GET', 'https://api.github.com/users/Vinoth-KR/repos');

// xhr.onreadystatechange = function () {
//     if(this.readyState === 4 && this.status === 200){
//         console.log(JSON.parse(this.responseText));
//         const resData = JSON.parse(this.response);
        
//         //resData.forEach(movie => processMovieResults(movie))
//         resData.forEach(repo => processReposList(repo));
//     }
// }

// xhr.send();

//#endregion

//#region  PROMISE

//Creating a promise
// const promise = new Promise((resolve,reject) => {
//     setTimeout(()=> {
//         console.log('asyn task completed');
//         resolve();
//     }, 1500);
// });

// promise.then(()=> {
//     console.log('promise consumed');
// });

// const getUser = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         let error = false;
//         if(!error){
//             resolve({name:'Deepz', age: 25});
//         } else {
//             reject('ERROR: Something went wrong');
//         }
//     }, 1000);
// });

// getUser
//     .then((user) => { console.log(user); })
//     .catch((err) => {console.log(err); })
//     .finally(() => console.log('The promise has been served irrespective of the result'));

// console.log('This is from global scope');

//#endregion

//#region Callbacks to Promise Refactor
// const posts = [
//     {title: 'Post One', body: 'This is from post one'},
//     {title: 'Post Two', body: 'This is from post two'}
// ];

// function createPost(post){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             posts.push(post);
//             resolve();
//         }, 2000);
//     })   
// }

// function getPosts(){
//     setTimeout(()=> {
//         posts.forEach(function (post){
//             const div = document.createElement('div');
//             div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
//             document.querySelector('#posts').appendChild(div);
//         });
//     }, 100);
// }


// createPost({title: 'Post Three', body: 'This is from post three'})
//     .then(getPosts);

//#endregion

//#region  PROMISE Chaining

const getUser = new Promise((resolve, reject) => {
    setTimeout(()=> {
        let error = false;
        if(!error){
            resolve({name:'Deepz', age: 25});
        } else {
            reject('ERROR: Something went wrong');
        }
    }, 1000);
});

getUser
    .then((user) => { 
        console.log(user);
        return user.name;
    })
    .then((name) => {console.log(name)})
    .catch((err) => {console.log(err); })
    .finally(() => console.log('The promise has been served irrespective of the result'));

//#endregion
