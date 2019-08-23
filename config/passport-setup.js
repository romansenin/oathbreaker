const passport = require("passport");
const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20");

// Load User model
const User = require("../client/models/User");

const googleRedirect = process.env.PORT
  ? "/auth/google/redirect"
  : "http://localhost:3001/auth/google/redirect";

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((userId, done) => {
  User.findOne({ _id: userId }, function(err, user) {
    if (err) console.error(err);
    done(null, user);
  });
});

passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    // Match user
    User.findOne({ email })
      .then(user => {
        if (!user)
          return done(null, false, { message: "That email is not registered" });

        // Match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) return done(null, user);
          else return done(null, false, { message: "Password incorrect" });
        });
      })
      .catch(err => console.log(err));
  })
);

passport.use(
  new GoogleStrategy(
    {
      // options for the google strategy
      clientID: process.env.googleClientID,
      clientSecret: process.env.googleClientSecret,
      callbackURL: googleRedirect
    },
    (accessToken, refreshToken, profile, done) => {
      // passport callback function

      User.findOneAndUpdate(
        { googleId: profile.id },
        { $set: { displayName: profile.displayName } },
        {
          new: true,
          upsert: true,
          returnNewDocument: true,
          useFindAndModify: false
        },
        (err, user) => {
          if (err) console.error(err);
          return done(null, user);
        }
      );
    }
  )
);
