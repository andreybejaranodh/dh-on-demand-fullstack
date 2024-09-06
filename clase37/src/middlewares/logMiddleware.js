const fs = require('fs');

function logMiddleware(req, res, next) {
    const message = `${new Date().toLocaleString()} - ${req.method} - ${req.url}\n`;

    fs.appendFileSync('log.txt', message);

    next();
}

module.exports = logMiddleware;