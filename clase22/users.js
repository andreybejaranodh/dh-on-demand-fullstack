const fs  = require('fs');
const path = require('path');

// leer los datos del archivo users.json
const usersFile = fs.readFileSync(path.resolve('users.json'), 'utf-8');
const users = JSON.parse(usersFile);
console.log(users);

// agregar un usuario a users
users.push({
    id: users[users.length - 1].id + 1,
    name: 'New User' 
});
console.log(users);

// escribir los datos en el archivo users.json
fs.writeFileSync(path.resolve('users.json'), JSON.stringify(users, null, 4));