const express = require("express");

const app = express();

app.get("/", (req, res) =>
  res.json({ msg: "Bem vindo à API da aplicação PHONE LIST" })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}`));
