const path = require('path');

module.exports = function (app) {

    // Render stats.html
    app.get('/stats', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/stats.html'));
    });

    // Render exercise.html
    app.get('/exercise', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/exercise.html'));
    });

    // Render index.html
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

}