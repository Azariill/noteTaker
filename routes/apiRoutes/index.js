const router = require('express').Router();
const notesRouter = require('../apiRoutes/notes');

router.use(notesRouter);




module.exports = router;