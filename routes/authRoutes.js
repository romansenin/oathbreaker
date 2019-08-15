const passport = require("passport");
const axios = require("axios");
const router = require("express").Router();

// auth logout
router.get("/auth/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.get("/auth/test", (req, res) => {
  res.send("hi");
});

// auth with google
router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile"],
    prompt: "select_account"
  })
);

// callback route for google to redirect to
router.get(
  "/auth/google/redirect",
  passport.authenticate("google"),
  (req, res) => {
    res.redirect("/chooseAllegiance");
  }
);

module.exports = router;
