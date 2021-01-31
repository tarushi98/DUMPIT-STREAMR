import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
function Ocean() {
  return (
    <div>
      <br />
      <br />
      <br />
      <Container>
        <Jumbotron>
          <h2 style={{ fontFamily: "Amatic SC", fontSize: "50px" }}>
            {" "}
            Impact on Oceans{" "}
          </h2>
          <h3 style={{ fontFamily: "Ubuntu,sans-serif", fontWeight: "bold" }}>
            {" "}
            Around 75 percent of used masks and other pandemic-related waste
            such as gloves and personal protective equipment (PPE) are expected
            to end up in landfills or float on the seas.
          </h3>
          <br />
          <h3 style={{ textAlign: "right" }}> -UN via ASEAN POST </h3>
        </Jumbotron>
      </Container>
    </div>
  );
}
export default Ocean;
