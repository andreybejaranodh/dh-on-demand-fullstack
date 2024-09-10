const jwt = require('../helpers/jwt');

function authorize(req, res, next) {
   try {
       jwt.verify(req);
       next();
   } catch (error) {
       res.status(401).send({ message: error.message });
   }
}

module.exports = authorize;