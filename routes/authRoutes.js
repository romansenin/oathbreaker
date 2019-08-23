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

// sends user data to the front end
router.get("/session", (req, res) => {
  res.status(200).json(req.user);
});

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
            console.log("hashed password: " + hashedPassword);
            const newUser = new User({ displayName, email, password: hashedPassword });
            newUser
              .save()
              .then(user => {
                console.log(user);
                res.status(200).json({
                  success_msg: "You are now registered and can log in"
                });
              })
              .catch(err => console.log(err));
          });
        });
      }
    })
    .catch(err => console.log(err));
});

module.exports = router;
