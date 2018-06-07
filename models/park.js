/**
 *
 * @author  CSC 648 Team 11
 * @version 1.0.0 03/30/2018
 */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Park = sequelize.define('Park', {
    name: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    description: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    lat: DataTypes.STRING,
    lon: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Park;
};
