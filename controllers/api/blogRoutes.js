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
                blog_id: blogid
            }
        });

        await blog.destroy();

        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;

