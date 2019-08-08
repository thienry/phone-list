import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ icon, title }) => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log("Envio do Login!");
  };

  return (
    <div className="form-container">
      <div>
        <h1>
          <i className={icon} /> <span className="text-primary">{title}</span>
          <p className="lead" style={{ textAlign: "center" }}>
            Login
          </p>
        </h1>
      </div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" value={email} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha: </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <h5 style={{ float: "right", marginBottom: "15px" }}>
          <Link to="/cadastro">Não tem uma conta? Inscreva-se</Link>
        </h5>
        <input
          type="submit"
          value="LOGIN"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

Login.defaultProps = {
  icon: "fas fa-id-card-alt",
  title: "PhoneList"
};

export default Login;
