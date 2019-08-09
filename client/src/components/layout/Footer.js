import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Footer = ({ icon, iconHeart, title, name }) => {
  return (
    <footer>
      <div className="footer">
        <div className="">
          <div className="grid-2 ">
            <div className="text-center">
              <h2>
                <i className={icon} /> {title}
              </h2>
            </div>
            <div className="text-center">
              <h2>Links</h2>
              <ul>
                <li>
                  <Link to="/sobre" style={{ color: "white" }}> Sobre o {title}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center">
        Feito com <i className={iconHeart} /> |{" "}
        <span className="footer-name">
          {" "}
          Desenvolvido por{" "}
          <a
            className="text-light"
            style={{ textDecoration: "none" }}
            href="htts://thiagotec.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {name}
          </a>
        </span>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  iconHeart: PropTypes.string,
  name: PropTypes.string
};

Footer.defaultProps = {
  title: "PhoneList",
  iconHeart: "fas fa-heart",
  icon: "fas fa-id-card-alt",
  name: "Thiago Moura"
};

export default Footer;
