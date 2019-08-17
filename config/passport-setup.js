const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");

const db = require("../client/models");

const googleRedirect = process.env.PORT
  ? "/auth/google/redirect"
  : "http://localhost:3001/auth/google/redirect";

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((userId, done) => {
  db.User.findOne({ _id: userId }, function(err, user) {
    if (err) console.error(err);
    done(null, user);
  });
});

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

      db.User.findOneAndUpdate(
        { googleId: profile.id },
        { $setOnInsert: { googleName: profile.displayName } },
        { new: true, upsert: true, returnNewDocument: true, useFindAndModify: false },
        (err, doc) => {
          if (err) console.error(err);
          return done(null, doc);
        }
      );
    }
  )
);
