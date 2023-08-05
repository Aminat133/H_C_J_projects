const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var isAuth = false;

function check(req, res, next) {
  const password = req.body["password"];
  if (password === "Mini") {
    isAuth = true;
  }
  next();
}
app.use(check);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/home.html");
});

app.post("/check", (req, res) => {
  if (isAuth == true) {
    res.sendFile(__dirname + "/secret.html");
    isAuth = false;
  }
  else {
    res.sendFile(__dirname + "/home.html");
  }
});

app.listen(3000, () => {
  console.log("server has started on port 3000");
});
