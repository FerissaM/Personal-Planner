// const express = require('express');
// const router = express.Router();
// const passport = require('passport');

// // GET request for logging in
// router.get('/login', function(req, res, next) {
//     res.render('login', { message: req.flash('loginMessage') });
// });

// // POST request for logging in
// router.post('/login', passport.authenticate('local-login', {
//     successRedirect: '/dashboard',
//     failureRedirect: '/login',
//     failureFlash: true
// }));

// // GET request for signing up
// router.get('/signup', function(req, res, next) {
//     res.render('signup', { message: req.flash('signupMessage') });
// });

// // POST request for signing up
// router.post('/signup', passport.authenticate('local-signup', {
//     successRedirect: '/dashboard',
//     failureRedirect: '/signup',
//     failureFlash: true
// }));

// // GET request for logging out
// router.get('/logout', function(req, res) {
//     req.logout();
//     res.redirect('/');
// });

// module.exports = router;
