const express = require("express");
const app = express();
var mongoose = require("mongoose");
var cors = require("cors");
const port = 8000;
const workoutrouter = require("./Routes/workoutRouter");
app.use(express.json());
app.use(cors());

//mongoose connection
mongoose
  .connect(
    "mongodb+srv://mezbah-rafi:V0qzSo02fD7C3j3n@cluster0.opetx.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api", workoutrouter);
app.use((req, res, next) => {
  console.log("hi", Date.now());
  next();
});
app.get("/", (req, res) => {
  res.send("Hello Wd");
});

app.get("/first", (req, res) => {
  res.json({ hi: "hello" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
