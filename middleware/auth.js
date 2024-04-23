const createError = require('http-errors');

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        return next(createError(401, 'Authentication required'));
    }
}

function ensureAuthorized(req, res, next) {
    // if user is authorized based on some condition
    if (/* Add your authorization logic here */) {
        // If authorized
        return next();
    } else {
        // If not authorized
        return next(createError(403, 'Forbidden'));
    }
}

module.exports = {
    ensureAuthenticated,
    ensureAuthorized
};
