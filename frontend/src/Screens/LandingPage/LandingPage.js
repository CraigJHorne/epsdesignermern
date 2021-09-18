import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const history = useHistory();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      history.push("/mydesignpacks");
    }
  }, [history]);

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">EPS Kit Designer</h1>
              <p className="subtitle">Create your perfect design</p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
