const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();
const routes = require('./routes/routes.js');
require("./routes/htmlroutes.js")(app);
app.use(express.urlencoded({
    extend: true
}));
app.use(express.json());

app.use(routes);
app.use(express.static('public'));

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });