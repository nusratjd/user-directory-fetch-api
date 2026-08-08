let allUsers = [] ;
async function loadUsers() {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        allUsers = await res.json();


    }
}