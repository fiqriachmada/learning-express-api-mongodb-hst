var mongoose = require("mongoose");
var Schema = mongoose.Schema();
const config = {
  autoIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectionString =
  "mongodb+srv://db_trial:-5$!ZsWsmZ6!h6t@cluster0.ac7qt.mongodb.net/testing?retryWrites=true&w=majority";
mongoose
  .connect(connectionString, config)
  .then(() => console.log("Connected mongo db"))
  .catch((err) => console.log("Cannot connect mongo db" + err));

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const userRoute = require("./route/route.js");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("/api", userRoute);

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});
