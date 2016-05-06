var Sequelize = require('sequelize');
var db = require('../database/db.js');

var Fitness = db.define('fitness',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    steps: {
      type: Sequelize.INTEGER,
      field: 'steps'
    },
    heartRate: {
      type: Sequelize.INTEGER,
      field: 'heart_rate'
    }
  }, 
  {
    freezeTableName: true // Model tableName will be the same as the model name
  }
);

module.exports = Fitness;