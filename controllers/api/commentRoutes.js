const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/create-comment', withAuth, async (req, res) => {
    try {
      const newComment = await Comment.create({
        comment: req.body.comment,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
      console.log(err);
    }
  });


  module.exports = router;