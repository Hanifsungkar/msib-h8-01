let data_users_tag = document.getElementById("data_users");

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    data.forEach(user => {
      data_users_tag.innerHTML += `
        <tr>
          <td>
            <div class="row">
              <div class="col-md-2">
                ${user.id}
              </div>
              <div class="col-md-10">
                <h3>${user.name}</h3>
                <p class="text-muted">
                ${user.address.city}
                  <br>
                  ${user.email}
                  <br>
                  ${user.phone}
                </p>
              </div>
            </div>
          </td>
          <td>
            <button class="btn btn-info">Detail</button>
            <button class="btn btn-warning">Edit</button>
            <button class="btn btn-danger">Delete</button>
          </td>
        </tr>`;
    });
  })