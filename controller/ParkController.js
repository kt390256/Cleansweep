/**
 *
 * @author  CSC 648 Team 11
 * @version 1.0.0 03/30/2018
 */
const queriesController = require('../controller/queriesController')
const queries = require('../db/queries');
const models   = require('../models');

/**
 * Module creates park and stores in DB
 */
module.exports.addPark = function(request, response) {

  let Park;
  let parkName = request.body.parkName;
  let zipcode  = request.body.zipcode;
  let description  = request.body.description;
  let city  = request.body.city;
  let state  = request.body.state;
  let lat  = request.body.lat;
  let lon   = request.body.lon;

  request.checkBody('parkName', 'park name is required').notEmpty();
  request.checkBody('zipcode', ' zipcode is required').notEmpty();
  request.checkBody('description', 'description is required').notEmpty();
  request.checkBody('city', 'city is required').notEmpty();
  request.checkBody('state', 'state is required').notEmpty();
  request.checkBody('lat', 'lat is required').notEmpty();
  request.checkBody('lon', 'lon is required').notEmpty();

  let errors = request.validationErrors();

  if (errors) {
    response.render('/add-park', {
      errors: errors
    });
  } else {

    Park = new models.Park({
      name: parkName,
      zipcode: zipcode,
      description: description,
      city: city,
      state: state,
      lat: lat,
      lon: lon
    });

    Park.save((err) => {
      if (err) {
        return response.send(err);
      } else {}
    });
    return response.redirect('/dashboard');

  }

};

/**
 * Module searchs DB base on user input using %like% 
 */
module.exports.search = function(request, response, next) {

    let Parks = [];

    queriesController.GetParks(request.body.search)
    .then(data => {
      data.forEach(function(element) {
        Parks.push({
          name: element['name'],
          description: element['description'],
          issues: {
            active: 6,
            resolved: 10,
            resolved: 2
          }
        })
      });
      response.send(JSON.stringify(Parks));
    })
    .catch(err => {
      console.log(err)
    });
};
