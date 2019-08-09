import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import AuthContext from "../../context/auth/authContext";

const Navbar = ({ title, icon, iconLogout }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
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
      <li>
        <Link to="/login">Login</Link>
      </li>
    </>
  );

  return (
    <div className="navbar">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  iconLogout: PropTypes.string
};

Navbar.defaultProps = {
  title: "PhoneList",
  icon: "fas fa-id-card-alt",
  iconLogout: "fas fa-sign-out-alt"
};

export default Navbar;
