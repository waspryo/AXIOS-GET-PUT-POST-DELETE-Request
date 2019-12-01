const app = document.querySelector('div#app');

 // GET 
axios.get('https://jsonplaceholder.typicode.com/users')
.then(res => {
    for(let user in res.data){
        app.innerHTML = res.data[user].name;
        console.log(res.data)
    }
});