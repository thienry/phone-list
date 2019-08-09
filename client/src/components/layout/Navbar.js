import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";

const Navbar = ({ title, icon, iconLogout, location }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const authLinks = (
    <>
      <li style={{ color: "white" }}>Olá {user && user.name}</li>
      <li>
        <a href="#!" onClick={onLogout}>
          <i className={iconLogout} /> <span className="hide-sm">Sair</span>
        </a>
      </li>
    </>
  );

  const guestLinks = (
    <>
      {location.pathname === "/login" ? (
        <li>
          <Link to="/cadastro">Cadastro</Link>
        </li>
      ) : (
        <li>
          <Link to="/login" >Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar">
      <h1>
        <Link to="/">
          <i className={icon} /> {title}
        </Link>
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  iconLogout: PropTypes.string,
  location: PropTypes.object.isRequired
};

Navbar.defaultProps = {
  title: "PhoneList",
  icon: "fas fa-id-card-alt",
  iconLogout: "fas fa-sign-out-alt"
};

export default withRouter(Navbar);
