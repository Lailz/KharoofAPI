const express = require("express");
const passport = require("passport");

const { signin, signup } = require("../controllers/userController");

// Mini Express App
const router = express.Router();

router.post(
  "/signin",
  passport.authenticate("local", { session: false }), // TOMORRROOOOOW
  signin
);
router.post("/signup", signup);

module.exports = router;
