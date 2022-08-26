const router = require('express').Router();
const thoughtRoutes = require('./throught-routes');
const userRoutes = require('./user-routes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;

