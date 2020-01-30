require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect(
  process.env.DB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("conectado a la base de datos");
  }
);

const app = express();

// function myFakeMiddleware(req, res, next) {
//   console.log("hola desde el middleware inutil");
//   next();
// }
function createUser(req, res, next) {
  req.user = {
    username: "Icha",
    role: "TA"
  };
  next();
}
function checkPatroncito(req, res, next) {
  if (req.user.role === "Patroncito") {
    next();
  } else {
    res.send("Que buscas aki o ke?");
  }
}

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(myFakeMiddleware);
app.use(createUser);

app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);

const PORT = process.env.PORT;

app.get(
  "/fake",
  /*myFakeMiddleware,*/ (req, res) => {
    res.send("fake");
  }
);

app.use("/", /* myFakeMiddleware, */ require("./routes"));
app.use("/private", checkPatroncito, require("./routes/privateRoutes"));
app.use("/", require("./routes/artistsRoutes"));
app.use("/", require("./routes/albumRoutes"));

app.listen(PORT || 3000, () => {
  console.log(`server on: http://localhost:${PORT}`);
});
