const sequelize = require('../config/connection');
const seedBook = require('./bookData.js');
const seedShelf = require('./shelfData')

const seedAll = async () => {
    await sequelize.sync ({ force: true});
    
    await seedComments();

    process.exit(0)
};

seedAll();