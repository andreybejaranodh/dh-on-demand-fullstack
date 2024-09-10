function adminMiddleware(req, res, next) {
    const user = req.query.user;
    req.user = user;

    if (user === 'admin') {
        return next();
    }

    return res.send('No eres admin');
}

module.exports = adminMiddleware;