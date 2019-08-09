const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

// Conecta com o banco de dados
connectDB();

//Inicializa o CORS na API
app.use(cors());

// Inicializa o Middleware
app.use(express.json({ extended: false }));

// Define as rotas da API
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/users", require("./routes/users"));

// Serve ativos estáticos na produção
if (process.env.NODE_ENV === "production") {
  // Defini pasta estática
  app.use(express.static("client/build"));

  app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "client", "build", "index.html")));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}`));
