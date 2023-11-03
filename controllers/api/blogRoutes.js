const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/create-blog', withAuth, async (req, res) => {
    try {
      const newBlog = await Blog.create({
        title: req.body.title,
        description: req.body.description,
        user_id: req.session.user_id
      });
  
      res.status(200).json(newBlog);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;