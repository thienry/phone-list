const express = require("express");
const router = express.Router();

/**
 *  @route    GET api/auth
 *  @desc     Pega o usuário logado
 *  @access   Privado
 */
router.get("/", (req, res) => {
  res.send("Pega o usuário logado");
});

/**
 *  @route    POST api/auth
 *  @desc     Autentica o usuário e pega o token
 *  @access   Público
 */
router.post("/", (req, res) => {
  res.send("Loga o usuário");
});

module.exports = router;
