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
  // db.User.find({ _id: userId })
  //   .then(user => {
  //     let userData = user.get({ plain: true });
  //     done(null, userData);
  //   })
  //   .catch(err => {
  //     done(err);
  //   });
  db.User.findOne({ _id: userId }, function(err, user) {
    console.log(user);
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
      // db.User.findOrCreate({
      //   where: { gid: profile.id, gname: profile.displayName }
      // }).then(([user, created]) => {
      //   let userData = user.get({ plain: true });
      //   console.log(userData);
      //   console.log("created:", created);
      //   return done(null, userData);
      // });
      db.User.findOne(
        { googleId: profile.id, googleName: profile.displayName },
        "_id",
        { upsert: true },
        function(err, user) {
          console.log(user);
          return done(null, user);
        }
      );
    }
  )
);
