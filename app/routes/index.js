var express = require('express');
var router = express.Router();

// This is the route for the home page
router.get(`/`, function(req, res)
{
    res.send(`
    <h1>Lynda website with ExpressJS</h1>
    <p>Learning process to build a website with expressJS</p>
    `);
});

module.exports = router;