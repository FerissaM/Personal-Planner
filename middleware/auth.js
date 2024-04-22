function ensureAuthenticated(req, res, next) {
    // if user is logged in
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect('/login');
    }
  }
  
  function ensureNotAuthenticated(req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    } else {
      res.redirect('/home');
    }
  }
  
  module.exports = {
    ensureAuthenticated,
    ensureNotAuthenticated
  };
  