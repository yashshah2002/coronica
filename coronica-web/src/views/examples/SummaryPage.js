import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import IndexNavbar from "components/Navbars/IndexNavbar";

function SummaryPage() {
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
            <h3>Coronica</h3>
          </div>
          <p className="Description">
            Coronica is your in-home best friend and life coach when your real
            best friends and life coaches could put you in danger of COVID-19!
            We created Coronica because we understand that the COVID-19 crisis
            has led to unimaginable stress and tragedy for many members of our
            society, so we want to do our part in alleviating any of the
            unnecessary stress left in our lives.
          </p>
          <br />

          <div className="title">
            <h3>Features</h3>
          </div>
          <p className="Description">
          In order to do this, we created a mobile and web application combo aimed at helping users develop healthy habits during the quarantine. These recommendations come in many categories, all stemming from your daily mood. When a user opens the application, they will be prompted to sign up on a simple login form, and then they will be immediately asked to take inventory of their mood on a simple daily survey. Then, based on the response, users will be directed to a page with a list of activities to help with that mood, all with point values for finishing and a cute animation to show progress. There is also a destressing game on cookie clicker on board as well as a health inventory that both helps the user reflect on their current health and allows users with COVID-19 symptoms to opt into being shown on a heat map that shows where symptoms are most popping up on any given day (heat map is not yet implemented).
          </p>
          <br />

          <div className="title">
            <h3>Tech Stack</h3>
          </div>
          <p className="Description">
          For the mobile application, we used React Native for the front end and Firebase for the back end, specifically user authentication. For the web application, we used React connected to the same Firebase application to sync user authentication.
          </p>
          <br />


          <div className="title">
            <h3>Getting Started</h3>
          </div>
          <p className="Description">
          Clone the repo from <a href="https://github.com/caitlin-tibbetts/coronica">GitHub</a> and then navigate to that folder in a terminal.
          </p>
          <h3>Mobile App</h3>
          <p className="Description">
          Add a .env file with the configuration details from your Firebase project and make sure to set up Firebase email/password authentication. Navigate to coronica-app and run npm install & expo start
          </p>
          <h3>Web Application</h3>
          <p className="Description">
          naviagte inside coronica-web. Run npm install and npm start. Also view <a href="https://coronica.herokuapp.com/index">live website</a>
          </p>
          <br />

          <div className="title">
            <h3>Future Plans</h3>
          </div>
          <p className="Description">
          In the future, we hope to finish the heat map feature and add even more categories. We also want to add a way to compete with your friends for points as a way to further connect people during the COVID-19 crisis.
          </p>
          <br />
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default SummaryPage;
