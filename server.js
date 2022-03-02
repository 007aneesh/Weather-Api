var express = require("express");
var bodyParser = require("body-parser");
var weather = require("openweather-apis");

//init app
var app = express();

//set the template engine
app.set("view engine", "ejs");

//fetch the data from request
app.use(bodyParser.urlencoded({ extended: false }));

//default pageload
app.get("/", function (req, res) {
  res.render("index", { temp: null });
});

app.post("/", function (req, res) {
  weather.setCity(req.body.city);
  weather.setAPPID("c8fcf1597671bf20ed9c86efffce8ddd");
  weather.getAllWeather(function (err, temp) {
    console.log(temp);
    res.render("index", { temp: temp });
  });
});

app.listen(3000, function () {
  console.log("server running at 3000! ");
});
