require("dotenv").config();

// Load passport configurations
require("./config/passport-setup");

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const enforce = require("express-sslify");

// Routes
const authRoutes = require("./routes/authRoutes");
const apiRoutes = require("./routes/apiRoutes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
app.use(express.static("client/build"));
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000, // 24-hour session
    keys: [process.env.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
if (process.env.PORT) {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

// Connect to the Mongo DB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/Project3DB", {
    useNewUrlParser: true
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

// Use the routes
app.use(apiRoutes);
app.use(authRoutes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
