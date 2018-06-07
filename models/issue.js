/**
 *
 * @author  CSC 648 Team 11
 * @version 1.0.0 03/30/2018
 */
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Issue = sequelize.define('Issue', {
    title: DataTypes.STRING,
    parkName: DataTypes.STRING,
    parkNameEncoded: DataTypes.STRING,
    issueType: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING,
    author: DataTypes.STRING,
    img: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Issue;
};
