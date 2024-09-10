const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/users.json');

function getData() {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}

const User = {
    findAll: () => {
        return getData();
    },
    findById: (id) => {
        const movies = getData();
        return movies.find(movie => movie.id === Number(id));
    },
    findByField: (field, value) => {
        const users = getData();
        return users.find(user => user[field] === value);
    },
    create: (data) => {
        const users = getData();
        const newUser = {
            id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
            name: data.name,
            email: data.email,
            password: data.password,
            role: data.role,
            age: data.age
        };
        users.push(newUser);
        fs.writeFileSync(filePath, JSON.stringify(users, null, 4));
        return newUser;
    },
    update: (id, data) => {
        const users = getData();
        const index = users.findIndex(movie => movie.id === Number(id));
        users[index] = {
            id: users[index].id,
            name: data.name || users[index].name,
            email: data.email || users[index].email,
            password: data.password || users[index].password,
            role: data.role || users[index].role,
            age: data.age || users[index].age
        };
        fs.writeFileSync(filePath, JSON.stringify(users, null, 4));
        return users[index];
    },
    delete: (id) => {
        const users = getData();
        const index = users.findIndex(user => user.id === Number(id));
        users.splice(index, 1);
        fs.writeFileSync(filePath, JSON.stringify(users, null, 4));
        return true;
    }
};

module.exports = User;