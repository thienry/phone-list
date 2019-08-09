import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alerts from "./components/layout/Alerts";

import ContactState from "./context/contact/contactState";
import AuthState from "./context/auth/authState";
import AlertState from "./context/alert/alertState";
import setAuthToken from "./utils/setAuthToken";

import PrivateRoute from "./components/routes/PrivateRoute";
import Footer from "./components/layout/Footer";

if (localStorage.token) setAuthToken(localStorage.token);

function App() {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <>
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <PrivateRoute exact path="/" component={Home} />
                  <Route exact path="/sobre" component={About} />
                  <Route exact path="/cadastro" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
              <Footer />
            </>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
