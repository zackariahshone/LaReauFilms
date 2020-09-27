const path = require("path");

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/index.html"));
    })
    app.get('/ourwork', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/studio.html"));
    })
    app.get('/services', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/services.html"));
    })
    app.get('/about', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/whoAmI.html"));
    })
    app.get('/contact', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/html/contact.html"));
    })

}