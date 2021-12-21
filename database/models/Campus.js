const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
  }, 

  imageUrl: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  }, 

  address: {
    type: Sequelize.STRING,
  }

});

module.exports = Campus;