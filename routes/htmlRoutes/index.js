const path = require('path');
const router = require('express').Router();

// Route to index page
router.get('/', (req, res) => {
res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// Route to animals page
router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'));
});

// route to zookeepers page
router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});

// route to catch routes that aren't previously defined
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

module.exports = router;