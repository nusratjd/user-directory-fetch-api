let allUsers = [] ;
async function loadUsers() {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        allUsers = await res.json();
        render (allUsers);
    }
    catch (err) {
        console.error(err);
        document.getElementById("users").innerHTML = "Error!";
    }
}

function render(users) {
    const container = document.getElementById("users");

    container.innerHTML = users
    .map((u) => `
    <div class="card>
    <h3>${u.name}</h3>
    <p>${u.email}</p>
    <p>${u.phone}</p>
    <p>${u.address.city}</p>
    <p>${u.website}</p>
    
    ` 
)
}