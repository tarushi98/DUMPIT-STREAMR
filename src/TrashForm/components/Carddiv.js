import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { StreamR } from "./Streamr";
import { Link } from "react-router-dom";

class Carddiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workDays: []
    };
  }
  handleCheckboxChange = (event) => {
    let newArray = [...this.state.workDays, event.target.id];
    if (this.state.workDays.includes(event.target.id)) {
      newArray = newArray.filter((day) => day !== event.target.id);
    }
    this.setState({
      workDays: newArray
    });
  };
  render() {
    console.log(this.state.workDays);

    return (
      <Container fluid style={{ backgroundColor: "#E3E3E3 " }}>
        <Row>
          <Col xs={6}>
            <Row>
              <p
                className="title"
                style={{
                  fontFamily: "David Serif",
                  marginLeft: "auto",
                  marginRight: "auto",
                  fontSize: "30px",
                  marginBottom: "20px",
                  paddingTop: "40px",
                  fontWeight: "bolder"
                }}
              >
                Select your Waste type and <br /> Earn some data coins while at
                it !
              </p>
            </Row>
            <Row style={{ paddingTop: "60px" }}>
              <Col xs={3}>
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="waste sharp including metals"
                  value="waste sharp including metals"
                  onChange={this.handleCheckboxChange}
                />
                <label
                  className="custom-control-label"
                  htmlFor="waste sharp including metals"
                ></label>
                <img
                  src="https://i.ibb.co/KDBgxy7/white.png"
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                  alt=""
                />
                <b>
                  {" "}
                  <p
                    ClassName="top"
                    style={{
                      fontFamily: "Montserrat",
                      marginLeft: "auto",
                      marginRight: "auto",
                      fontSize: "18px",
                      textAlign: "center"
                    }}
                  >
                    Waste sharps including Metals{" "}
                  </p>{" "}
                </b>
                <p
                  ClassName="bottom"
                  style={{
                    fontFamily: "Montserrat",
                    marginLeft: "auto",
                    marginRight: "auto",
                    fontSize: "15px",
                    textAlign: "center"
                  }}
                >
                  Ex-Needles, syringes with fixed needles, needles from needle
                  tip cutter
                </p>
              </Col>
              <Col xs={3}>
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="Contaminated Wastes (Recyclable)"
                  value="Contaminated Wastes (Recyclable)"
                  onChange={this.handleCheckboxChange}
                />
                <label
                  className="custom-control-label"
                  htmlFor="Contaminated Wastes (Recyclable)"
                ></label>
                <img
                  src="https://i.ibb.co/BCy8Cms/red.png"
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                  alt=""
                />
                <b>
                  {" "}
                  <p
                    style={{
                      fontFamily: "Montserrat",
                      marginLeft: "auto",
                      marginRight: "auto",
                      fontSize: "18px",
                      textAlign: "center"
                    }}
                  >
                    Contaminated Wastes (Recyclable)
                  </p>{" "}
                </b>
                <p
                  style={{
                    fontFamily: "Montserrat",
                    marginLeft: "auto",
                    marginRight: "auto",
                    fontSize: "15px",
                    textAlign: "center"
                  }}
                >
                  Ex-Wastes generated from disposable items such as tubing,
                  bottles, intravenous tubes{" "}
                </p>
              </Col>
              <Col xs={3}>
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="Solid/Chemical Wastes"
                  value="Solid/Chemical Wastes"
                  onChange={this.handleCheckboxChange}
                />
                <label
                  className="custom-control-label"
                  htmlFor="Solid/Chemical Wastes"
                ></label>

                <img
                  src="https://i.ibb.co/1XKVdwJ/yellow.png"
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                  alt=""
                />
                <b>
                  {" "}
                  <p
                    style={{
                      fontFamily: "Montserrat",
                      marginLeft: "auto",
                      marginRight: "auto",
                      fontSize: "18px",
                      textAlign: "center"
                    }}
                  >
                    Solid/Chemical Wastes{" "}
                  </p>{" "}
                </b>
                <p
                  style={{
                    fontFamily: "Montserrat",
                    marginLeft: "auto",
                    marginRight: "auto",
                    fontSize: "15px",
                    textAlign: "center"
                  }}
                >
                  Ex-Items contaminated with blood, body fluids like dressings,
                  plaster casts.
                </p>
              </Col>
              <Col xs={3}>
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="Glassware"
                  value="Glassware"
                  onChange={this.handleCheckboxChange}
                />
                <label
                  className="custom-control-label"
                  htmlFor="Glassware"
                ></label>

                <img
                  src="https://i.ibb.co/fYrK5TN/blue.png"
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                  alt=""
                />
                <b>
                  {" "}
                  <p
                    style={{
                      fontFamily: "Montserrat",
                      marginLeft: "auto",
                      marginRight: "auto",
                      fontSize: "18px",
                      textAlign: "center"
                    }}
                  >
                    Glassware
                  </p>{" "}
                </b>
                <p
                  style={{
                    fontFamily: "Montserrat",
                    marginLeft: "auto",
                    marginRight: "auto",
                    fontSize: "15px",
                    textAlign: "center"
                  }}
                >
                  Ex-Broken or discarded and contaminated glass including
                  medicine vials{" "}
                </p>
              </Col>
            </Row>
          </Col>
          <Col xs={6}>
            <img
              src="https://s2.gifyu.com/images/11e3f535b37e6f8699.gif"
              alt=""
            />
          </Col>
        </Row>
        <br />
        <div id="submitbtn">
          <p style={{ textAlign: "center" }}>
            <Button
              variant="success"
              onClick={() => StreamR(this.state.workDays)}
            >
              {" "}
              SUBMIT{" "}
            </Button>
          </p>
        </div>
        <br />
        <div id="wait"></div>
        <div id="member-earnings"></div>
        <Link to="/PaymentPortal">
          <Button>Proceed to Payment</Button>
        </Link>
      </Container>
    );
  }
}

export default Carddiv;
