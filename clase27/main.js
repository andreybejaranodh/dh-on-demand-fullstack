const users1Table = document.querySelector('#users-table');
const users2Table = document.querySelector('#users2-table');
const usersTableBody = document.querySelector('#users-table tbody');
const users2TableBody = document.querySelector('#users2-table tbody');
const users1Loading = document.querySelector('#users1-loading');
const users2Loading = document.querySelector('#users2-loading');

const usersApiURL = "https://run.mocky.io/v3/e67961d1-aee6-405c-b797-c7ad80df4c36";
const users2ApiURL = "https://run.mocky.io/v3/9ba481e1-19c5-47e7-be50-9aec8501fbb3";



function createUserRow(user) {
    const row = document.createElement('tr');
    const idCell = document.createElement('td');
    const nameCell = document.createElement('td');
    const ageCell = document.createElement('td');
    const roleCell = document.createElement('td');

    idCell.innerText = user.id;
    nameCell.innerText = user.name;
    ageCell.innerText = user.age;
    roleCell.innerText = user.role;

    row.appendChild(idCell);
    row.appendChild(nameCell);
    row.appendChild(ageCell);
    row.appendChild(roleCell);

    return row;
}

fetch(usersApiURL)
    .then((response) => response.json())
    .then((data) => {
        data.forEach((user) => {
            const row = createUserRow(user);
            usersTableBody.appendChild(row);
        });
        users1Loading.remove();
        users1Table.style.display = 'table';
    })
    .catch((error) => {
        users1Loading.remove();
        console.log(error);
    });

axios.get(users2ApiURL)
    .then((response) => {
        response.data.forEach((user) => {
            const row = createUserRow(user);
            users2TableBody.appendChild(row);
            users2Loading.remove();
            users2Table.style.display = 'table';
        });
    })
    .catch((error) => {
        users2Loading.remove();
        console.log(error);
    });
    