fetch("users.json")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((json) => {
    console.log(json);
  });


async function fetchUsers() {
  const res = await fetch("users.json");
  const jsonData = await res.json();
  console.log(jsonData);
}

fetchUsers();