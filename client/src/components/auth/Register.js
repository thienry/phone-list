import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

const Register = ({ icon, title }) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors } = authContext;

  useEffect(() => {
    if (error === "Usuário já existente") {
      setAlert(error, "danger");
      clearErrors();
    }
  }, [error]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { name, email, password, confirmPassword } = user;

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    if (name === "" || email === "" || password === "") {
      setAlert("Por Favor insira os dados.", "danger");
    } else if (password !== confirmPassword) {
      setAlert("Senhas não podem ser diferentes.", "danger");
    } else {
      register({ name, email, password });
    }
  };

  return (
    <div className="form-container">
      <div>
        <h1>
          <i className={icon} /> <span className="text-primary">{title}</span>
          <p className="lead" style={{ textAlign: "center" }}>
            Cadastro
          </p>
        </h1>
      </div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
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
            required
            minLength="6"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirme a Senha: </label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <h5 style={{ float: "right", marginBottom: "15px" }}>
          <Link to="/login">já tem uma conta? Faça login</Link>
        </h5>
        <input
          type="submit"
          value="CADASTRAR"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

Register.defaultProps = {
  icon: "fas fa-id-card-alt",
  title: "PhoneList"
};

export default Register;
