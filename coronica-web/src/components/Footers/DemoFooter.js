
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href=""
                  target="_blank"
                >
                  Coronica
                </a>
              </li>
              <li>
                <a
                  href=""
                  target="_blank"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href=""
                  target="_blank"
                >
                  Devpost
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Team Coronica
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
