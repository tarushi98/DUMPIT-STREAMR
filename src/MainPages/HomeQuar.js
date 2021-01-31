import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";

function HomeQuar() {
  return (
    <div>
      <br />
      <br />
      <Container>
        <Row>
          <Col sm={4}>
            <Jumbotron>
              <h3
                style={{ fontFamily: "Ubuntu,sans-serif", fontWeight: "bold" }}
              >
                As people all over the world are following Home Quarantine, the
                amount of Bio Medical Waste being produced in households has
                increased by a substainate amount.{" "}
              </h3>
            </Jumbotron>
          </Col>

          <Col sm={6} style={{ paddingLeft: "5em" }}>
            <img
              src="https://cdn.dribbble.com/users/63407/screenshots/11562105/media/1f04ce05d3e697387c4746f02195cdbd.png"
              height="50%"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeQuar;
