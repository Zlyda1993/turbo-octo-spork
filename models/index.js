const User = require('./User');
const Comment = require('./Comments');
const Blog = require('./BlogPost');

Blog.hasMany(Comment, { foreignKey: 'blogid' });
Comment.belongsTo(Blog, { foreignKey: 'blogid' });


module.exports = { User, Comment, Blog };
