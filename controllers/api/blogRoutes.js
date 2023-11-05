const router = require('express').Router();
const { Blog, Comment } = require('../../models');
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

  router.delete('/delete-blog/:blogid', withAuth, async (req, res) => {
    try {
        const blogid = req.params.blogid;
        const blog = await Blog.findByPk(blogid);

        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }

        if (blog.user_id !== req.session.user_id) {
            return res.status(403).json({ error: 'You are not authorized to delete this blog' });
        }

        await Comment.destroy({
            where: {
                blogid: blogid
            }
        });

        await blog.destroy();

        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.put('/update-blog/:id', withAuth, async (req, res) => {
  try {
    const updatedBlog = await Blog.update(
      {
        title: req.body.title,
        description: req.body.description,
      },
      {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      }
    );

    if (updatedBlog[0] === 1) {
      res.status(200).json({ message: 'Blog post updated successfully' });
    } else {
      res.status(404).json({ message: 'Blog post not found or unauthorized' });
    }
  } catch (err) {
    res.status(400).json(err);
    console.log(err)
  }
});


module.exports = router;

