/**
 *
 * @author  CSC 648 Team 11
 *
 * Module retrieves the lastest issues and
 * the categories list from the DB then renders the homepage
 *
 * @version 1.0.0 03/30/2018
 */
const queriesController = require('../controller/queriesController')
const queries = require('../db/queries');

module.exports.getDefaultIssues = function(request, response, next) {
  // Retrieve issues data from DB
  queriesController.GetDefaultIssues()
  .then(data => {
    return data;
  }).then(data => {
    // Retrieve category data from DB
    queriesController.getCategoryNames().then(categories => {
      // Render home page with issues and category data
      response.render('home',
        {
          title: 'CSC 648',
          user: request.user,
          description: 'Term Project',
          css: ['bootstrap.min.css','font-awesome.min.css','style.css'],
          js: ['jquery.min.js','bootstrap.min.js','search.js'],
          issues: data,
          cNames: categories,
          helpers: {
            statusString: function(statusString) {
              if(statusString.toLowerCase() == 'in-progress') {
                return 'badge-warning';
              } else if (statusString.toLowerCase() == 'open') {
                return 'badge-danger';
              } else {
                return 'badge-success';
              }
            }
          }
        }
      );
    })
  }).catch(err => {
    console.log('err')
  });
};
