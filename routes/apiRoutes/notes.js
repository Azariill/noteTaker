const router = require("express").Router();
const currentNotes = require('../../data/db.json');

router.get("/notes", (req,res) =>{
    let results = currentNotes;

    console.info(`${req.method} request recieved to get reviews`);

    res.json(results);

});

module.exports = router;