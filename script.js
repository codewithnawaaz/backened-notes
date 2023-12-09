// const a = 18;
// const b = 20;
// const c = a + b;

// module.exports = c;

// npm test ....
// var oneLinerJoke = require("one-liner-joke");
// console.log(oneLinerJoke.getRandomJoke());
// var figlet = require("figlet");
// figlet("ADIL", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });
// sheekte hai express
const express = require("express");
const app = express();
app.use(function (req, res, next) {
  next();
});

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/profile/:username", function (req, res) {
  res.send(`hello this is form ${req.params.username}`);
});
app.get("/contact", function (req, res) {
  res.send("hey i m from contact");
});
app.listen(3000);
