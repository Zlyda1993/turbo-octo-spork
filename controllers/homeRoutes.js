const router = require('express').Router();
const { BlogPost } = require('../models');

router.get('/', async (req, res) => {
  try {
    const blogPostData = await BlogPost.findAll();

    const posts = blogPostData.map((post) => post.get({ plain: true }));

    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
