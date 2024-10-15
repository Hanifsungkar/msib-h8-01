// let output = "Maka hasil dari promise adalah :"

// let myPromise = new Promise((resolve, reject) => {
//   // simulate asynchronous process
//   setTimeout(() => {
//     let isProcessSuccess = true
  
//     if (isProcessSuccess) {
//       resolve(">> SUCCESS")
//     } else {
//       reject("!! ERROR")
//     }
//   }, 2000)
// })

// myPromise
//   .then(response => { console.log(output, response) })
//   .catch(error => { console.error(output, error) })

// chaining then

// PROMISE BASED
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(data => console.log(data))

// ASYNC AWAIT
async function getUsers() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users")
  let datas = await response.json()
  let names = datas.map(user => ({ name: user.name }))
  console.log(names)
}

getUsers();