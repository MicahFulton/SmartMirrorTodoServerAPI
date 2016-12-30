const express = require('express');
const router = express.Router();
const db = require('diskdb').connect('db', ['todos']);

router.get('/', (req, res, next) => {
    res.send(db.todos.find());
});

router.post('/', (req, res, next) => {
    db.todos.save(req.body);
    res.sendStatus(200)
});

module.exports = router;
