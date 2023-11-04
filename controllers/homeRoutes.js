const router = require('express').Router();
const { Blog, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', async (req, res) => {
  try {
    const blogPostData = await Blog.findAll();

    const posts = blogPostData.map((post) => post.get({ plain: true }));

    res.render('dashboard', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/blog', async (req, res) => {
  try {
    res.render('blog', {
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post-by-id/:id', withAuth, async (req, res) => {
  try {
    
    const singlePostData = await Blog.findByPk(req.params.id, {
      include: [{ model: Comment }]
    });

    if(singlePostData) {
    const blog = singlePostData.get({ plain: true });

    res.render('singlePost', {
      post: blog,
      comments: blog.Comments,
      loggedIn: req.session.loggedIn,
    });
  } else {
    res.status(404).send('Not Found');
  }
  } catch (error) {
    console.log(error)
    res.status(500).json(error.toString());
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
