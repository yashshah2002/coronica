
import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import LandingPageHeader from "components/Headers/LandingPageHeader";
import SectionCarousel from "views/index-sections/SectionCarousel";
import SectionDark from "views/index-sections/SectionDark";
import SectionProgress from "views/index-sections/SectionProgress";


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
        <SectionDark />
        <SectionProgress />
        <DemoFooter />
      </div>
    </>
  );
}

export default Login;
