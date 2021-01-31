import React, { useRef } from "react";
import Checkout from "react-stripe-checkout";
import { Card, Button, Container, Row, Col, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./styles.css";

function Payment() {
  const time = useRef(0);
  const timer = useRef(null);

  function onToken(token) {
    clearInterval(timer.current);
    alert(`Time to fill out form: ${time.current / 1000} seconds`);
    time.current = 0;
  }

  function onOpened() {
    timer.current = setInterval(() => {
      time.current += 1000;
    }, 1000);
  }

  return (
    <div className="Payment">
      <Navbar bg="dark">
        <Link to="/">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://www.flaticon.com/svg/static/icons/svg/3648/3648931.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Dump It
          </Navbar.Brand>
        </Link>
      </Navbar>
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
        <Row>
          <Col md={6}>
            <Card
              style={{
                boxShadow: "5px 6px 5px 5px #a3a3a3",
                width: "600px",
                marginLeft: "10px",
                marginTop: "20px"
              }}
            >
              <Card.Body>
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/kQhtdgD/image.png"
                  style={{
                    width: "200px",
                    float: "left",
                    height: "180px",
                    height: "150px",
                    paddingLeft: "10px",
                    paddingRight: "20px",
                    marginTop: "30px"
                  }}
                />

                <Card.Title
                  style={{
                    paddingTop: "40px",
                    fontFamily: "Montserrat",
                    fontWeight: "800",
                    fontSize: "25px"
                  }}
                >
                  House
                </Card.Title>
                <Card.Text style={{ fontFamily: "Montserrat" }}>
                  For houses with a people capacity of 4-8. Please follow the
                  disposal guidelines before giving us waste.
                </Card.Text>
                <Button
                  type="submit"
                  onClick={() => {
                    alert("sent");
                  }}
                  style={{
                    backgroundColor: "#7094db",
                    outline: "0",
                    boxShadow: " 0 0 10px 2px rgba(0, 0, 0, 0.1)",
                    borderRadius: "2px",
                    padding: "8px 18px",
                    border: "0",
                    color: "#fff",
                    marginBottom: "20px"
                  }}
                >
                  Book
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card
              style={{
                boxShadow: "5px 6px 5px 5px #a3a3a3",
                width: "600px",
                marginLeft: "80px",
                marginTop: "20px"
              }}
            >
              <Card.Body style={{ paddingBottom: "6px" }}>
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/CHS7QTQ/image.png"
                  style={{
                    width: "200px",
                    float: "left",
                    height: "180px",
                    height: "150px",
                    paddingLeft: "10px",
                    paddingRight: "20px",
                    marginTop: "30px"
                  }}
                />
                <Card.Title
                  style={{
                    paddingTop: "40px",
                    fontFamily: "Montserrat",
                    fontWeight: "800",
                    fontSize: "25px"
                  }}
                >
                  Hospitals and Clinics
                </Card.Title>
                <Card.Text style={{ fontFamily: "Montserrat" }}>
                  For large hospitals , ideally disposal after a week, please
                  follow disposal guidelines
                </Card.Text>
                <Checkout
                  name="DUMP-IT"
                  description="Subscription For DUMP-IT"
                  label="BOOK"
                  panelLabel="Yet Another Form"
                  email="already-know-this@email.com"
                  amount={10000}
                  currency="INR"
                  shippingAddress
                  billingAddress
                  stripeKey="pk_test_P7PboXILJ38t21Eq4S9rw0Uq"
                  token={onToken}
                  opened={onOpened}
                  style={{
                    backgroundColor: "#7094db",
                    outline: "0",
                    boxShadow: " 0 0 10px 2px rgba(0, 0, 0, 0.1)",
                    borderRadius: "2px",
                    padding: "8px 18px",
                    border: "0",
                    color: "#fff",
                    marginBottom: "20px"
                  }}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Payment;
