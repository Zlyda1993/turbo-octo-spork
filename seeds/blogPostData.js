const { BlogPost } = require('../models');

const blogPostData = [
  {
   title: 'Why MVC is so important',
   description: 'MVC allows developers to maintain a tru separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.'
  },
 {
    title: 'Authentication vs. Authorization',
    description: 'There is a difference between authentication and auuthorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system.'
 },
 {
    title: 'Object-Relational Mapping',
    description: "I have really loved learning about ORMs. It's really simplified the way I create queries in SQL!"
 }
];

const seedBlogPost = () => BlogPost.bulkCreate(blogPostData);

module.exports = seedBlogPost;