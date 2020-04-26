
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import firebase from "firebase";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import BenefitsPage from "views/examples/BenefitsPage";
import FailedLogin from "views/examples/FailedLogin";
import Login from "views/examples/Login";
// others

const firebaseConfig = {
  apiKey: "AIzaSyAzwtcbD_MevuxHTR8LZ4sn_dAzeIOJ0ZU",
  authDomain: "coronica.firebaseapp.com",
  databaseURL: "https://coronica.firebaseio.com",
  projectId: "coronica",
  storageBucket: "coronica.appspot.com",
  messagingSenderId: "193366513135",
  appId: "1:193366513135:web:e320c8312095cfcb3ad21a",
  measurementId: "G-NY3RHG344C"
};
// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} firebase={app}/>}
      />
      <Route
        path="/pricing-page"
        render={(props) => <BenefitsPage {...props} />}
      />
      <Route
        path="/failed-login"
        render={(props) => <FailedLogin {...props} />}
      />
      <Route
        path="/login"
        render={(props) => <Login {...props} />}
      />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
