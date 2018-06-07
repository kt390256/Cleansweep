/**
 *
 * @author  CSC 648 Team 11
 *
 * Module get all issues from DB and renders them in dashboard
 *
 * @version 1.0.0 03/30/2018
 */
const queriesController = require('../controller/queriesController')
const queries = require('../db/queries');

module.exports.getIssues = function(request, response, next) {
    // Retrieve issues data from DB
    queriesController.GetIssues()
    .then(data => {
      return data;
    }).then(data => {
      // Retrieve category data from DB
      queriesController.getCategoryNames().then(categories => {
        // Render dashboard page with user issue and category data
        response.render('dashboard',
          {
            title: 'Dashboard',
            user: request.user,
            description: 'Dashboard',
            css: ['bootstrap.min.css','font-awesome.min.css','style.css','bootstrap-sortable.css'],
            js: ['jquery.min.js','popper.min.js','bootstrap.min.js', 'issue-actions.js', 'moment.min.js', 'bootstrap-sortable.js'],
            issues: data,
            cNames: categories
          }
        );
      })
    })
    .catch(err => {
      console.log(err)
    });
};
