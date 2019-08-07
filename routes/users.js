const express = require("express");
const router = express.Router();

/**
 *  @route    POST api/users
 *  @desc     Registra um usuário
 *  @access   Público
 */
router.post("/", (req, res) => {
  res.send("Registrar um usuário");
});

module.exports = router;