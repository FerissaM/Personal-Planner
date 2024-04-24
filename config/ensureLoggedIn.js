const createError = require('http-errors');

function ensureLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        return next(createError(401, 'Authentication required'));
    }
}

module.exports = ensureLoggedIn;
