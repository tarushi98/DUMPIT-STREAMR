import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";



export default function Home() {
  return (
    <div className="Home">
      <Navbar bg="light">
        <Navbar.Brand href="./HomePage">
          <img
            alt=""
            src="https://www.flaticon.com/svg/static/icons/svg/3648/3648931.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Dump It
        </Navbar.Brand>
      </Navbar>
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
      {/* <div style={{float:"left"}}> */}
      <Row>
        <Col>
          <Jumbotron>
            <div style={{ fontFamily: "Amatic SC" }}>
              <h1 style={{ fontWeight: "bold", fontSize: "100px" }}>
                {" "}
                Dump It{" "}
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/3773/3773979.svg"
                  height="10%"
                  width="10%"
                />
              </h1>
              <br />
              <h3 style={{ fontWeight: "lighter", fontSize: "50px" }}>
                Your one stop for biomedical waste.{" "}
              </h3>
            </div>
            <br />
            <Link to="/SlotBooking">
              <Button variant="success">Book Your Slot </Button>
            </Link>
            <br />
          </Jumbotron>
          {/* </div> */}
        </Col>
        <Col>
          <img
            src="https://cdn.dribbble.com/users/948184/screenshots/10971368/media/96c46dacba50549a88db025773bd9494.gif"
            height="80% "
          />
        </Col>
      </Row>
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
      <br />
    </div>
  );
}
