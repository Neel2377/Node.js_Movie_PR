const express = require('express');
const router = express.Router();
const authController = require('../controllers/authcontroller');

router.get('/', authController.login);

router.post('/', authController.loginPost);

router.post("/auth", (req, res) => {
  const { username, password } = req.body;

  if (username === "test" && password === "1234") {
    req.session.username = username;
    res.render("pages/home", {
      session: req.session,
      message: "Login successful!",
      messageType: "success"
    });
  } else {
    res.render("pages/home", {
      session: req.session,
      message: "Invalid username or password",
      messageType: "danger"
    });
  }
});

router.post("/auth/signup", (req, res) => {
  const { username, email, password } = req.body;
  if (username && email && password) {
    res.render("pages/home", {
      session: req.session,
      message: "Account created successfully!",
      messageType: "success"
    });
  } else {
    res.render("pages/home", {
      session: req.session,
      message: "Signup failed. Try again.",
      messageType: "danger"
    });
  }
});

router.post('/signup', authController.signup);

router.get('/logout', authController.logout);

module.exports = router;
