const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/thought-controller');

// set up GET all and POST route at /api/thought
router 
    .route('/')
    .get(getAllThought)
    .post(createThought);

// set up GET one, PUT, and DELETE at /api/thought/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// POST at /api/thoughts/<userId>/<thoughtId>
router 
    .route('/:userId/:thoughtId')
    .post(createReaction);

router.route('/:userId/:thoughtId/:reactionId').delete(deleteReaction);

module.exports = router;