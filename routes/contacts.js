const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Contact = require("../models/Contact");

/**
 *  @route    GET api/contacts
 *  @desc     Pega todos os contatos do usuário
 *  @access   Privado
 */
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});

/**
 *  @route    POST api/contacts
 *  @desc     Adiciona um novo contato
 *  @access   Privado
 */
router.post(
  "/",
  [
    auth,
    [
      check("name", "Nome é obrigatório")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) res.status(400).json({ errors: errors.array() });

    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id
      });

      const contact = await newContact.save();
      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error!");
    }
  }
);

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
