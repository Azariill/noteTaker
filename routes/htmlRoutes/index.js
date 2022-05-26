const path = require('path');
const router = require('express').Router();

// when a request for localhost/ send index.html
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});
// when a request made for /notes set the notes file
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});
// if a different / is made default to main
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;