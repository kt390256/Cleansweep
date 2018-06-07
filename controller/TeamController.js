/**
 *
 * @author  CSC 648 Team 11
 *
 * Module retrieves user details base on userId
 *
 * @version 1.0.0 03/30/2018
 */
const queriesController = require('../controller/queriesController')
const queries = require('../db/queries');

module.exports.getTeamMember = function(request, response, next) {
  queriesController.GetTeamMember(request.params.userId)
  .then(data => {
    response.render('user',
    {
      title: 'Profile Page',
      user: request.user,
      description: 'Profile Page',
      css: ['bootstrap.min.css','font-awesome.min.css','style.css'],
      js: ['jquery.min.js','bootstrap.min.js'],
      user: data
    });
  }).catch(err => {
    console.log(err)
  });
};
