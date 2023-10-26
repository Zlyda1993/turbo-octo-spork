const router = require('express').Router();
const { User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.post('/comment', withAuth, (req, res) => {
  const { title, comment } = req.body;

  Comments.create({
    title,
    comment,
  })
    .then(comment => {
      res.status(201).json(comment);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Error creating the comment.');
    });
});

router.put('/update', withAuth, (req,res) => {
  const { title, comment } = req.body;

  Comment.put({
    title,
    comment,
  })
  .then(comment => {
    res.status(201).json(comment);
  })
  .catch(error => {
    console.error(error);
    res.status(500).send('Error updating the comment.');
  });
});

module.exports = router;
