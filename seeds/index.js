const sequelize = require('../config/connection');
const seedComment = require('./commentData');
const seedBlog = require('./blogData');


const seedAll = async () => {
    await sequelize.sync ({ force: true});
    
    await seedComment();

    await seedBlog();

    process.exit(0)
};

seedAll();