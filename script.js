
 // GET 
axios.get('https://jsonplaceholder.typicode.com/users')
.then(res => {
    for(let user in res.data){
        app.innerHTML = `<h1>Name: ${res.data[user].name}</h1>`;
        console.log(res.data)
    }
});

// POST
axios.post("https://jsonplaceholder.typicode.com/users", {
    name: "Alvee",
    email: "veeweb@gmail.com",
    phone: "12391283"
},{
    responseMethod: "POST"
})

.then(res => {
    console.log(res)
})
