let data_users_tag = document.getElementById("data_users");

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    data.forEach(user => {
        data_users_tag.innerHTML += `
          <tr>
            <td><img src="${user.id}"></td>
            <td>${user.name}</td>
            <td>${user.address.city}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
          </tr>`;
      });
    });

//


//     for (let i = 0; i < 10; i++) {
//       data_users_tag.innerHTML += `
//              <tr>
//               <td><img src="${user.id}"></td>
//               <td>${user.name}</td>
//               <td>${user.address.city}</td>
//               <td>${user.email}</td>
//               <td>${user.phone}</td>
//             </tr>`;
// }
    

// // binding element html yang akan digunakan
// let data_users_tag = document.getElementById("data_users");

// // append data ke element html yang dimaksud
// data_users_tag.innerHTML = `
//         <tr>
//           <td>Foo</td>
//           <td>Jl. Satu</td>
//           <td>foo@email.com</td>
//           <td>123456789</td>
//         </tr>`;

// append data LAIN ke element html yang dimaksud
// data_users_tag.innerHTML += `
//         <tr>
//           <td>Bar</td>
//           <td>Jl. Satu</td>
//           <td>foo@email.com</td>
//           <td>123456789</td>
//         </tr>`;



// let i = 0;
// while(i < 10) {
//   data_users_tag.innerHTML += `
//         <tr>
//           <td>Bar</td>
//           <td>Jl. Satu</td>
//           <td>foo@email.com</td>
//           <td>123456789</td>
//         </tr>`;

//   i++;
// }

// let a = 1;

// a = a + 2;

// // cara pendek 1 :
// a++;

// // cara pendek 2 :
// a += 2;