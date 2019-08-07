const express = require("express");

const app = express();

app.get("/", (req, res) =>
  res.json({ msg: "Bem vindo à API da aplicação PHONE LIST" })
);

app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/users", require("./routes/users"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}`));
