const express = require("express");
const mongoose = require("mongoose");

const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget-tracker", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});
mongoose.connection.on("connected", () => {
    console.log("Mongoose is Connected.");
});
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`Now listening on: ${PORT}!`);
});