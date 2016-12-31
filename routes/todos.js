const express = require('express');
const router = express.Router();
var db = require('diskdb')
db = db.connect('db', ['todos']);

router.get('/', (req, res, next) => {
    res.send(db.todos.find());
});

router.post('/', (req, res, next) => {
    if (Array.isArray(req.body)) {
        db.todos.remove({});
        db = db.connect('db', ['todos']);
    }
    db.todos.save(req.body);
    res.sendStatus(200)
});

module.exports = router;
