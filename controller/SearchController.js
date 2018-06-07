/**
 *
 * @author  CSC 648 Team 11
 *
 * Module search DB base on search terms and category
 *
 * @version 1.0.0 03/30/2018
 */
const queriesController = require('../controller/queriesController')
const queries = require('../db/queries');
const models   = require('../models');

module.exports.search = function(request, response, next) {
  queriesController.SearchThis(request.body.search, request.body.category)
  .then(Issues => { response.send(JSON.stringify(Issues)); })
  .catch(err => {
    console.log(err)
  });
};
