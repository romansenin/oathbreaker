const passport = require("passport");
const router = require("express").Router();
const bcrypt = require("bcryptjs");

const User = require("../client/models/User");

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

router.post("/register", (req, res) => {
  const { displayName, email, password } = req.body;

  User.findOne({ email })
    .then(user => {
      if (user)
        res.status(200).json({ error_msg: "Email is already registered" });
      else {
        bcrypt.genSalt(10, (err, salt) => {
          if (err) throw err;
          bcrypt.hash(password, salt, (err, hashedPassword) => {
            if (err) throw err;
            // Create new User object with hashed password
            const newUser = new User({
              displayName,
              email,
              password: hashedPassword
            });
            newUser
              .save()
              .then(user => {
                res.status(200).end();
              })
              .catch(err => console.log(err));
          });
        });
      }
    })
    .catch(err => console.log(err));
});

router.post("/auth/local", (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then(user => {
      if (!user)
        res.status(200).json({ error_msg: "That email is not registered" });
      // Match password
      else
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch)
            res.status(200).json({ success_msg: "You are now logged in!" });
          else res.status(200).json({ error_msg: "Password incorrect" });
        });
    })
    .catch(err => console.log(err));

  // passport.authenticate("local", {
  //   successRedirect: "/chooseAllegiance"
  // })(req, res, next);
});

// sends user data to the front end
router.get("/session", (req, res) => {
  res.status(200).json(req.user);
});

module.exports = router;
