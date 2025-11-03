const endpoint = 'https://jsonplaceholder.typicode.com/users';

const userList =  document.getElementById("userList");

function fetchUsers(){

    fetch(endpoint)

        .then(response => {

            if(!response.ok){

                throw new Error(`Errore http : ${response.status}`);
            }

            return response.json();

        })

        .then(users => {

            renderUsers(users);


        })

        .then(data => console.log(data))
}


function renderUsers(users){


    users.forEach(user => {

        //crea un nuovo elememento <li> in html
        const li = document.createElement('li');

        //imposto il contenuto del <li> 
        li.textContent = `${user.address.city} ${user.address.geo.lat}`;

        userList.appendChild(li);

    })

}


//richiamo la funzione

fetchUsers();