const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

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
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    res.send("passed");
  }
);

module.exports = router;
