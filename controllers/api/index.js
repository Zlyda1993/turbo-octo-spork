const router = require('express').Router();

const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const blogRoutes = require('./blogRoutes');

router.use('/blogs', blogRoutes);
router.use('/users', userRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
