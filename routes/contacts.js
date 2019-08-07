const express = require("express");
const router = express.Router();

/**
 *  @route    GET api/contacts
 *  @desc     Pega todos os contatos do usuário
 *  @access   Privado
 */
router.get("/", (req, res) => {
  res.send("Pega todos os contatos");
});

/**
 *  @route    POST api/contacts
 *  @desc     Adiciona um novo contato
 *  @access   Privado
 */
router.post("/", (req, res) => {
  res.send("Adiciona um novo contato");
});

/**
 *  @route    PUT api/contacts/:id
 *  @desc     Atualiza um contato
 *  @access   Privado
 */
router.put("/:id", (req, res) => {
  res.send("Atualiza um contato");
});

/**
 *  @route    DELETE api/contacts/:id
 *  @desc     Apaga um contato
 *  @access   Privado
 */
router.delete("/:id", (req, res) => {
  res.send("Apaga um contato");
});

module.exports = router;
