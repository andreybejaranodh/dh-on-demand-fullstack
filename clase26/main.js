const container = document.querySelector('#container');
const usersTableBody = document.querySelector('#users-table tbody');
const footer = document.querySelector('footer');

const users = [
    {
        id: 1,
        name: 'Andrey',
        role: 'admin'
    },
    {
        id: 2,
        name: 'Carlos',
        role: 'usuario'
    },
    {
        id: 3,
        name: 'Maria',
        role: 'admin'
    }
];

users.forEach((user) => {
    const tr = document.createElement('tr');
    const tdId = document.createElement('td');
    const tdName = document.createElement('td');
    const tdRole = document.createElement('td');
    tdId.innerText = user.id;
    tdName.innerText = user.name;
    tdRole.innerText = user.role;
    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdRole);
    usersTableBody.appendChild(tr);
});

setTimeout(() => {
    footer.remove();
}, 3000)

// const usersTable = document.createElement('table');
// usersTable.setAttribute('class', 'users-table');
// const usersTableHeader = document.createElement('thead');
// const trHeader = document.createElement('tr');
// ['ID', 'Nombre', 'Rol'].forEach((header) => {
//     const th = document.createElement('th');
//     th.innerText = header;
//     trHeader.appendChild(th);
// });
// usersTableHeader.appendChild(trHeader);
// usersTable.appendChild(usersTableHeader);

// container.appendChild(usersTable);
