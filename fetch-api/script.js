//#region - FETCH 

//Fetching info from json file
// fetch('./movies.json')
// .then(res => res.json())
// .then((data) => console.log(data));



// //Fetching from text file
// fetch('./test.txt')
// .then(res => res.text())
// .then((data) => console.log(data));


// //Fetching from an API
// fetch('https://api.github.com/users/Vinoth-KR')
// .then(res => res.json())
// .then((data) => console.log(data));

//#endregion

//#region FETCH API - Method, BODY, Headers


// function createPost(post){
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//           title: post.title,
//           body: post.body,
//           userId : 7,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//           token:'abc',
//         },
//       })
//         .then((response) => response.json())
//         .then((json) => console.log(json));
// }

// createPost({title: 'Custom Post', body:'Testing the placeholder API'});

//#endregion
 

//#region FETCH - ErrorHandling

// Check the response status code / OK parameter
// fetch('http://httpstat.us/404')
//   .then(res => {
//     if(!res.ok){
//       throw new Error('Request Failed');
//     }
//   })
//   .then(() => console.log('success'))
//   .catch((err) => console.log(err))


//catch runs only on the network error not for HTTP status 400/ 500 regions
// fetch('http://httpsatat.us/200')
//   .then(res => res)
//   .then(() => console.log('success'))
//   .catch((err) => console.log(err))

//#endregion

//#region ASYNC & AWAIT

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({name:'VKR', age: 28});
  }, 1000);
});


async function getPromise(){
  const response = await promise;
  console.log(response);
}

//getPromise();

async function getUsersAsync() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  console.log(data);
}

function getUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data));
}

getUsers();
getUsersAsync();

//#endregion

