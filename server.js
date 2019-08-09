const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Conecta com o banco de dados
connectDB();

//Inicializa o CORS na API
app.use(cors());

// Inicializa o Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) =>
  res.json({ msg: "Bem vindo à API da aplicação PHONE LIST" })
);

// Define as rotas da API
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/users", require("./routes/users"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}`));
