const jwt = require('../../helpers/jwt');

const controller = {
    requestToken: (req, res) => {
        const token = jwt.encode({ isAuthorized: true });
        return res.send({ token });
    }
};

module.exports = controller;