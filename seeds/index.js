const sequelize = require('../config/connection');
const seedComment = require('./commentData');


const seedAll = async () => {
    await sequelize.sync ({ force: true});
    
    await seedComment();

    process.exit(0)
};

seedAll();