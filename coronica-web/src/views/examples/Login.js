
import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import LandingPageHeader from "components/Headers/LandingPageHeader";


function Login(props) {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar loggedIn={true}/>
      <LandingPageHeader email={props.email}/>
      <div className="main">
        <DemoFooter />
      </div>
    </>
  );
}

export default Login;
