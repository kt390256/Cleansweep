/**
 *
 * @author  CSC 648 Team 11
 * @version 1.0.0 03/30/2018
 */
const queriesController = require('../controller/queriesController')
const queries = require('../db/queries');

/**
 * Module retrieves park names from DB then
 * renders report issue page
 */
module.exports.getData = function(request, response, next) {
  // retrieve park names
  queriesController.getParkNames().then(parkNames => {
    return parkNames;
  }).then(parkNames => {
  
  let pNames = parkNames;
  // retrieve category issues
  queriesController.getCategoryNames().then(categories => {
    response.render('report-issue',
      { title: 'Report Issue',
        user: request.user,
        parkNames: pNames,
        cNames: categories,
        description: 'Report Issue',
        css: ['bootstrap.min.css','font-awesome.min.css'],
        js: ['jquery.min.js','popper.min.js','bootstrap.min.js']
      })
    })
  }).catch(err => {
    console.log(err)
  });
}
