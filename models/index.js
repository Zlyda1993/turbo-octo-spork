const User = require('./User');
const Comment = require('./Comments');
const Blog = require('./BlogPost');

Blog.hasMany(Comment, { foreignKey: 'blogid' });
Comment.belongsTo(Blog, { foreignKey: 'blogid' });

User.hasMany(Blog, {foreignKey: "user_id"});
Blog.belongsTo(User, {foreignKey: "user_id"});

module.exports = { User, Comment, Blog };
