function getUsers() {
    return 'andrey, carlos, maria, paola';
}

function getUserDetail(user) {
    return `Products of ${user}`;
}

/**
 * 
 * @param {function} err 
 * @param {string} user 
 * @returns {string|Error} if the user is found return the name or call callback to map the error
 */
function searchUser(err, user) {
    const users = getUsers();
    if (!users.includes(user)) {
        return err(`${user} not found`);
    } else {
        return user;
    }
}

function errorTransformer(message) {
    const err = new Error(message);
    return err;
}

const user1 = searchUser(errorTransformer, 'andrey');
const user2 = searchUser(errorTransformer, 'aaa')

// console.log(user1);
// console.log(user2);

function getCityByName(cityName) {
    const cities = 'CABA, Bogota, Tulua, Cali';
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (cities.includes(cityName)) {
                return resolve(cityName);
            } else {
                return reject('City not Found');
            }
        }, 2000);
    });
}

getCityByName('aaaaa')
    .then((city) => {
        console.log(`${city} Encontrada`);
    })
    .catch((err) => {
        console.log(`Error: ${err}`);
    });
