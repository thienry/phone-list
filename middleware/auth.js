const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  // Pega o token do HEADER
  const token = req.header("x-auth-token");

  //Checa se não é o token
  if (!token) res.status(401).json({ msg: "Sem token, autorização negada!" });

  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token não é válido!" })
  }
};
