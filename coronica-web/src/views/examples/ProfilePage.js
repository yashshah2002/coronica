import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import IndexNavbar from "components/Navbars/IndexNavbar";

function ProfilePage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <IndexNavbar />
      <ProfilePageHeader />
      <div className="section">
        <Container>
          <div className="title">
            <h3>Team Coronica</h3>
          </div>
          <p className="Description">The project was developed by <a href="https://harshasrikara.com">Harsha Srikara</a>, <a href="https://github.com/caitlin-tibbetts/coronica">Caitlin Tibbetts</a> and Afrida Tasnim at EarthXHack2020. We are a team of computer science students from the University of Texas at Dallas looking to build innovative applications that can make life easier for people living in an isolated manner during this quarantine. We were motivated to build Coronica after seeing the ways in which life has been affected by loneliness and lack of physical/emotional contact between people following the self-quarantine of the country due to the coronavirus. Our interests are to ensure that people do not get long term negative emotional or physical impacts and can continue to maintain their sense of livelihood</p>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default ProfilePage;
