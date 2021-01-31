import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HoverCard from "react-png-hovercard";
import Button from "react-bootstrap/Button";

function Card() {
  return (
    <div style={{ fontFamily: "Ubuntu,sans-serif", fontWeight: "bold" }}>
      <Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2 style={{ fontFamily: "Ubuntu,sans-serif", fontWeight: "bold" }}>
          How it works?
        </h2>
        <br />
        <Row>
          <Col sm>
            <HoverCard
              className="note"
              front={
                <div className="Front">
                  <img
                    src="./Images/1.jpg"
                    alt=""
                    className="Image"
                    width="80%"
                    style={{
                      objectFit: "cover",
                      marginTop: "40px",
                      textAlign: "center"
                    }}
                  />
                </div>
              }
              back={
                <div className="Back">
                  <h3
                    className="title"
                    style={{ textAlign: "center", fontWeight: "inherit" }}
                  >
                    <br /> Book your Slot
                  </h3>
                </div>
              }
              maxWidth={200}
              animationSpeed={500}
              height={200}
              margin={10}
            />
          </Col>
          <Col sm>
            <HoverCard
              className="note"
              front={
                <div className="Front">
                  <img
                    src="./Images/3.jpg"
                    alt=""
                    className="Image"
                    width="80%"
                    style={{ marginTop: "40px", textAlign: "center" }}
                  />
                </div>
              }
              back={
                <div className="Back">
                  <h3
                    className="title"
                    style={{
                      marginTop: "40px",
                      marginLeft: "5px",
                      textAlign: "center",
                      fontWeight: "inherit"
                    }}
                  >
                    {" "}
                    Get your Bags{" "}
                  </h3>{" "}
                </div>
              }
              maxWidth={200}
              animationSpeed={500}
              height={200}
              margin={10}
            />
          </Col>

          <Col sm>
            <HoverCard
              className="note"
              front={
                <div className="Front" style={{ alignItems: "center" }}>
                  <br />
                  <br />
                  <img
                    src="./Images/2.jpg"
                    alt=""
                    className="Image"
                    width="90%"
                    style={{
                      objectFit: "cover",
                      paddingLeft: "3px",
                      alignItems: "center"
                    }}
                  />
                </div>
              }
              back={
                <div className="Back">
                  <h3
                    className="tilte"
                    style={{
                      marginTop: "40px",
                      textAlign: "center",
                      fontWeight: "inherit"
                    }}
                  >
                    Have your bags picked
                  </h3>
                </div>
              }
              maxWidth={200}
              animationSpeed={500}
              height={200}
              margin={10}
            />
          </Col>
          <Col sm>
            <HoverCard
              className="note"
              front={
                <div className="Front">
                  <br />
                  <img
                    src="./Images/4.jpg"
                    alt=""
                    className="Image"
                    width="90%"
                    style={{
                      objectFit: "cover",
                      marginTop: "40px",
                      textAlign: "center"
                    }}
                  />
                </div>
              }
              back={
                <div className="Back">
                  <h3
                    className="title"
                    style={{
                      marginTop: "40px",
                      marginLeft: "40px",
                      textAlign: "center",
                      fontWeight: "inherit"
                    }}
                  >
                    {" "}
                    Relax{" "}
                  </h3>
                </div>
              }
              maxWidth={200}
              animationSpeed={500}
              height={200}
              margin={10}
            />
          </Col>
        </Row>
        <br />
        <Link to="/Guidelines">
          <Button variant="success">Waste We Collect & other Guidelines</Button>
        </Link>
        <br />
        <br />
        <br />
      </Container>
    </div>
  );
}

export default Card;
