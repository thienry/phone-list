const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/auth")

const User = require("../models/User");

/**
 *  @route    GET api/auth
 *  @desc     Pega o usuário logado
 *  @access   Privado
 */
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user)
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});

/**
 *  @route    POST api/auth
 *  @desc     Autentica o usuário e pega o token
 *  @access   Público
 */
router.post(
  "/",
  [
    check("email", "Por Favor insira um email válido!").isEmail(),
    check("password", "Por Favor insira uma senha válida!").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) res.status(400).json({ errors: errors.array() });

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) res.status(400).json({ msg: "Usuário ou senha errada!" });

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) res.status(400).json({ msg: "Usuário ou senha errada!" })

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 36000
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error!");
    }
  }
);

module.exports = router;
