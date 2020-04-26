/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionDark() {
  return (
    <>
      <div className="section">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Daily Quote</h2>
              <p className="description">
                <i><strong>"</strong>Today, you are opening yourself up to be <strong>strong</strong> and <strong>physical</strong>. your desire to change stems from your ability to adapy quickly to new situations. As your <strong>freaky, wild-card self</strong> is yearning to come to the forefront, allow it to <strong>shock</strong> and <strong>amaze</strong> you. Your biggest challenge today will be allow things from the <strong>past</strong> to fade and allow the <strong>future</strong> to be born out of their ruins. <strong>Anxiety is an addiction</strong> like any other. You feel stress. Feel better. Stress. Feel better. Clench. <strong>Release</strong>. Let today be a day to <strong>rejuvenate</strong> and prepare yourself for the future.<strong>"</strong></i>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionDark;
