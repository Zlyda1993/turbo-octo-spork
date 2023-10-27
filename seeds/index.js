const sequelize = require('../config/connection');
const seedComment = require('./commentData');
const seedBlogPost = require('./blogPostData');


const seedAll = async () => {
    await sequelize.sync ({ force: true});
    
    await seedComment();

    await seedBlogPost();

    process.exit(0)
};

seedAll();