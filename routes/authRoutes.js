const passport = require("passport");
const router = require("express").Router();

// auth logout
router.get("/auth/logout", (req, res) => {
  req.logout();
  res.redirect("/");
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

// sends user data to the front end
router.get("/session", (req, res) => {
  res.status(200).json(req.user);
});

router.post("/register", (req, res) => {
  console.log(req.body);
  res.send('hello');
});

module.exports = router;
