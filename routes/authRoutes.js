const passport = require("passport");

module.exports = function(app) {
  // auth logout
  app.get("/auth/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // auth with google
  app.get(
    "/auth/google",
    () => {console.log("in here")},
    passport.authenticate("google", {
      scope: ["profile"],
      prompt: "select_account"
    })
  );

  // callback route for google to redirect to
  app.get(
    "/auth/google/redirect",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/chooseAllegiance");
    }
  );
};