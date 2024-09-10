const User = require("../models/user");

function authenticationMiddleware(req, res, next) {
    if (!req.session.user && req.cookies.userEmail) {
        const user = User.findByField('email', req.cookies.userEmail);

        if (user) {
            req.session.user = {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role,
                age: user.age
            };
        }
    }

    if (req.session.user) {
        res.locals.user = req.session.user;
    }

    next();
}

module.exports = authenticationMiddleware;