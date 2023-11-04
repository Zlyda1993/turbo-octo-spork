const User = require('./User');
const Comment = require('./Comments');
const Blog = require('./BlogPost');

Blog.hasMany(Comment, { foreignKey: 'blogId' });
Comment.belongsTo(Blog, { foreignKey: 'blogId' });


module.exports = { User, Comment, Blog };
