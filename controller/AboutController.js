/**
 *
 * @author  CSC 648 Team 11
 *
 * This module retrieves the teams user information
 * from the DB and renders it to the front end.
 *
 * @version 1.0.0 03/30/2018
 */
const queriesController = require('../controller/queriesController')
const queries = require('../db/queries');

module.exports.getTeam = function(request, response, next) {
  // Retrieve User data from DB
  queriesController.GetTeam().then(data => {
    // Render about page with user data
    response.render('about',
    {
      title: 'About - CSC 648',
      user: request.user,
      description: 'Term Project',
      css: ['bootstrap.min.css','font-awesome.min.css','style.css'],
      js: ['jquery.min.js','bootstrap.min.js'],
      data: data,
      helpers: {
        ifCondition: function(value) {
          if(value<=3) {
            return true;
          }
          return false;
        }
      }
    });
  }).catch(err => {
    console.log(err)
  });
}
