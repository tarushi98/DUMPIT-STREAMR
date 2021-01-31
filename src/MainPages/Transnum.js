import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Spring } from "react-spring/renderprops";

function Trans() {
  return (
    <div>
      <br />
      <br />
      <h2 style={{ fontFamily: "Amatic SC", fontSize: "80px" }}>
        {" "}
        The Medical Health Epidemic{" "}
      </h2>
      <br />
      <br />
      <Row>
        <Col sm={6}>
          <img
            src="https://cdn.dribbble.com/users/85981/screenshots/11387523/media/63a57e1bf3f185ee78daf87bdf5ccf62.jpg"
            height="50%"
          />
        </Col>
        <Col sm={4}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Jumbotron>
            <Spring from={{ number: 0 }} to={{ number: 18000 }} delay={3600}>
              {(props) => (
                <div>
                  <h3
                    style={{
                      fontFamily: "Ubuntu,sans-serif",
                      fontWeight: "bold"
                    }}
                  >
                    India has generated over
                  </h3>{" "}
                  <h2 style={{ color: "red" }}>{props.number} Tonnes</h2>{" "}
                  <h3
                    style={{
                      fontFamily: "Ubuntu,sans-serif",
                      fontWeight: "bold"
                    }}
                  >
                    Of COVID-19 Related Bio-medical Waste In 4 Months, Experts
                    Call To Reduce, Reuse And Segregate{" "}
                  </h3>
                  <br />
                  <h3 style={{ textAlign: "right" }}>-NDTV</h3>
                </div>
              )}
            </Spring>
          </Jumbotron>
        </Col>
      </Row>
    </div>
  );
}

export default Trans;
