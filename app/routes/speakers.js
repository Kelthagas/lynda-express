var express = require('express');
var router = express.Router();

router.get(`/speakers`, function(req, res)
{
    var info = '';
    var dataFile = req.app.get('appData');
    dataFile.speakers.forEach(function(item)
    {
        info += `
        <li>
            <b>${item.name}</b>
            <p>${item.summary}</p>
        </li>
        `;
    });
    res.send(`
    <h1>Speakers</h1>
    ${info}
    `);
});

router.get(`/speakers/:speakerid`, function(req, res)
{
    var dataFile = req.app.get('appData');
    var speaker = dataFile.speakers[req.params.speakerid];
    res.send(`
    <h1>${speaker.title}</h1>
    <h2>${speaker.name}</h2>
    <p>${speaker.summary}</p>
    `);
});

module.exports = router;