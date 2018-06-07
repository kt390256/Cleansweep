/**
 *
 * @author  CSC 648 Team 11
 * @version 1.0.0 03/30/2018
 */
const passport = require('passport');
const bcrypt   = require('bcryptjs');
const models   = require('../models');

/**
 * Module creates user, stores data in DB
 * and redirects to home page (if successful)
 */
module.exports.create = function(request, response) {

  let User;
  let firstName = request.body.firstName;
  let lastName  = request.body.lastName;
  let username  = request.body.username;
  let hobbies   = request.body.hobbies;
  let title     = request.body.title;
  let email     = request.body.email;
  let password  = request.body.password;

  request.checkBody('firstName', 'first name is required').notEmpty();
  request.checkBody('lastName', ' last Name is required').notEmpty();
  request.checkBody('username', 'username is required').notEmpty();
  request.checkBody('hobbies', 'hobbies is required').notEmpty();
  request.checkBody('title', 'title is required').notEmpty();
  request.checkBody('email', 'email is required').notEmpty();
  request.checkBody('email', 'email is not valid').isEmail();
  request.checkBody('password', 'password length must be minimum 8 characters').isLength(8, 20);
  request.checkBody('password', 'password is required').notEmpty();

  let errors = request.validationErrors();

  if (errors) {
    response.render('/sign-up', {
      errors: errors
    });
  } else {
    User = new models.User({
      firstName: firstName,
      lastName: lastName,
      username: username,
      hobbies: hobbies,
      title: title,
      email: email,
      password: password
    });

    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(User.password, salt, function(err, hash) {
        if (err) {
          return response.send(err);
        }
        User.password = hash;
        User.save((err) => {
          if (err) {
            return response.send(err);
          } else {

          }
        });
        return response.redirect('/');
      });
    });
   }
};

/**
 * Module leverages passport magic to login user
 * and redirect to dashboard (if successful)
 */
module.exports.login = function(request, response, next) {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login'
  })(request, response, next);
};

/**
 * Module allows user to login before reporting issue
 */
module.exports.lazyRegLogin = function(request, response, next) {

  passport.authenticate('local', {
    successRedirect: '/report-issue',
    failureRedirect: '/login'
  })(request, response, next);
};

/**
 * Module implements lazy registration login
 * in order to allow user to report and issue
 */
module.exports.lazyRegCreate = function(request, response) {

  let User;
  let firstName = request.body.firstName;
  let lastName  = request.body.lastName;
  let username  = request.body.username;
  let hobbies   = request.body.hobbies;
  let title     = request.body.title;
  let email     = request.body.email;
  let password  = request.body.password;

  request.checkBody('firstName', 'first name is required').notEmpty();
  request.checkBody('lastName', ' last Name is required').notEmpty();
  request.checkBody('username', 'username is required').notEmpty();
  request.checkBody('hobbies', 'hobbies is required').notEmpty();
  request.checkBody('title', 'title is required').notEmpty();
  request.checkBody('email', 'email is required').notEmpty();
  request.checkBody('email', 'email is not valid').isEmail();
  request.checkBody('password', 'password length must be minimum 8 characters').isLength(8, 20);
  request.checkBody('password', 'password is required').notEmpty();

  let errors = request.validationErrors();

  if (errors) {
    response.render('/sign-up', {
      errors: errors
    });
  } else {
    User = new models.User({
      firstName: firstName,
      lastName: lastName,
      username: username,
      hobbies: hobbies,
      title: title,
      email: email,
      password: password
    });

    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(User.password, salt, function(err, hash) {
        if (err) {
          return response.send(err);
        }
        User.password = hash;
        User.save((err) => {
          if (err) {
            return response.send(err);
          } else {

          }
        });
        return response.redirect('/report-issue');
      });
    });
   }
};

/**
 * Module handles logout functionality
 */
module.exports.logout = function(request, response, next) {
  request.logout();
  response.redirect('/');
};

/**
 * Module checks if user is logged in
 */
module.exports.isAuthenticated = function(request, response, next) {
  if (request.isAuthenticated()) {
    return next();
  }
  response.redirect('/');
}

/**
 * Check user manger
 */
module.exports.isManager = function(request, response, next) {
  if ('citymanager' == request.user.dataValues['username']) {
    return next();
  }
  response.redirect('/');
}
