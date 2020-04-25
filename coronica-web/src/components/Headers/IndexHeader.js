
/*eslint-disable*/
import React from "react";
import TextLoop from "react-text-loop";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/antoine-barres.jpg") + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
                <TextLoop>
                  <h1 className="presentation-title">Feeling Sad?</h1>
                  <h1 className="presentation-title">Feeling Isolated?</h1>
                  <h1 className="presentation-title">Feeling Lonely?</h1>
                  <h1 className="presentation-title">Feeling Lost?</h1>
                </TextLoop>
              <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
              Get Coronica and track your habits to improve your life quality!
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
          }}
        />
        <h6 className="category category-absolute">
          Designed and coded at EarthXHack 2020
        </h6>
      </div>
    </>
  );
}

export default IndexHeader;
