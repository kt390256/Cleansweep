/**
 *
 * @author  CSC 648 Team 11
 * @version 1.0.0 03/30/2018
 */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
    status: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Status;
};
