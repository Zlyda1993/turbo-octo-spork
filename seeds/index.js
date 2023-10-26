const sequelize = require('../config/connection');
const seedComments = require('./commentData');


const seedAll = async () => {
    await sequelize.sync ({ force: true});
    
    await seedComments();

    process.exit(0)
};

seedAll();