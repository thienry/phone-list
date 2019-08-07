const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const User = require("../models/User");

/**
 *  @route    POST api/users
 *  @desc     Registra um usuário
 *  @access   Público
 */
router.post(
  "/",
  [
    check("name", "Por favor digite o nome")
      .not()
      .isEmpty(),
    check("email", "Por favor digite um email válido").isEmail(),
    check(
      "password",
      "Por favor digite uma senha com 6 ou mais carateres"
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) res.status(400).json({ errors: errors.array() });

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) res.status(400).json({ msg: "Usuário já existente" });

      user = new User({
        name,
        email,
        password
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

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
