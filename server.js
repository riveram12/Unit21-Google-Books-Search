const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes/apiRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./client/public"));

// require("dotenv").config();

mongoose.connect(
  "mongodb+srv://riveram2:Luna%40Nyc12@cluster0.t6g9u.mongodb.net/Unit21?retryWrites=true&w=majority",
  {
    // MONGODB_URI= "mongodb+srv://riveram2:Luna%40Nyc12@cluster0.t6g9u.mongodb.net/Unit21?retryWrites=true&w=majority",
    useNewUrlParser: true,
    useFindAndModify: false,
  }
);
// console.log(MONGODB_URI);

// Define API routes here
app.use("/api", routes);

// serve HTML files
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, () => {
  console.log();
});
