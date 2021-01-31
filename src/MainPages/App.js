import React from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import Cards from "./HowItWorks";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Guidelines from "./Guidelines";
import HomeQuar from "./HomeQuar";
import Trans from "./Transnum";
import Container from "react-bootstrap/Container";
import Line from "./Stats-Charts/Linechart";
import Ocean from "./Ocean";
import Slot from "../SlotBooking/SlotBooking";
import Records from "../Slots/index";
import Payment from "../NewwPay/index";
import Home from "./HomePage";
import ContactUs from "./Contactus";
import Trash from "../TrashForm/TrashF";

function App() {
  return (
    <div
      className="App"
      style={{
        fontFamily: "Ubuntu,sans-serif",
        backgroundColor: "white",
        textAlign: "center"
      }}
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <Parallax pages={4} ref={(ref) => (this.parallax = ref)}>
              {/* /* First Layer */}
              <ParallaxLayer
                offset={0}
                speed={1}
                style={{ backgroundColor: "#d1c4e9" }}
              />
              <ParallaxLayer offset={0} speed={0.5}>
                <Home />
              </ParallaxLayer>

              {/* Second Layer */}
              <ParallaxLayer
                offset={0.9999}
                speed={1}
                style={{ backgroundColor: "#9575cd" }}
              />

              <ParallaxLayer offset={0.95} speed={0.5}>
                <span onClick={() => this.parallax.scrollTo(0.95)}>
                  <Trans />
                </span>
              </ParallaxLayer>

              {/* Third Layer */}

              <ParallaxLayer
                offset={1}
                speed={1}
                style={{ backgroundColor: "#673ab7" }}
              />

              <ParallaxLayer offset={1.2} speed={0.5}>
                <span onClick={() => this.parallax.scrollTo(1.2)}>
                  <br />
                  <br /> <br /> <HomeQuar />
                </span>
              </ParallaxLayer>

              {/* Fourth Layer */}

              <ParallaxLayer
                offset={1.9999}
                speed={1}
                style={{ backgroundColor: "#651fff" }}
              />

              <ParallaxLayer offset={1.98} speed={0.5}>
                <span onClick={() => this.parallax.scrollTo(1.98)}>
                  <br />
                  <br /> <br /> <Ocean />
                </span>
              </ParallaxLayer>

              <ParallaxLayer offset={1.98} speed={1}>
                <div style={{ float: "left" }}>
                  <br />
                  <img
                    src="https://www.flaticon.com/svg/static/icons/svg/1326/1326001.svg"
                    alt=""
                    width="10%"
                    height="10%"
                    style={{ opacity: "50%" }}
                  />
                </div>
              </ParallaxLayer>

              <ParallaxLayer offset={1.98} speed={0.2}>
                <div style={{ float: "right" }}>
                  <img
                    src="https://freesvg.org/img/Jellyfish-Silhouette.png"
                    alt=""
                    width="10%"
                    height="10%"
                    style={{ transform: "rotate(180deg)" }}
                  />
                </div>
              </ParallaxLayer>

              <ParallaxLayer offset={1.8} speed={-0.5}>
                <div style={{ float: "left" }}>
                  <img
                    src="https://freesvg.org/img/Jellyfish-Silhouette.png"
                    alt=""
                    width="10%"
                    height="10%"
                    style={{ transform: "rotate(180deg)" }}
                  />
                </div>
              </ParallaxLayer>

              <ParallaxLayer offset={1.95} speed={-0.5}>
                <div style={{ float: "right" }}>
                  <img
                    src="https://www.flaticon.com/svg/static/icons/svg/1326/1326001.svg"
                    alt=""
                    width="10%"
                    height="10%"
                    style={{ opacity: "80%" }}
                  />
                </div>
              </ParallaxLayer>

              <ParallaxLayer offset={1.95} speed={0.5}>
                <div style={{ float: "right" }}>
                  <img
                    src="https://www.flaticon.com/svg/static/icons/svg/2907/2907404.svg"
                    alt=""
                    width="10%"
                    height="10%"
                    style={{ opacity: "80%" }}
                  />
                </div>
              </ParallaxLayer>

              <ParallaxLayer offset={1.99} speed={-0.5}>
                <span Onclick={() => this.parallax.scrollTo(1.99)}>
                  <br />
                  <br />
                  <br />
                  <div style={{ float: "left" }}>
                    <img
                      src=" https://www.flaticon.com/svg/static/icons/svg/2739/2739383.svg"
                      alt=" "
                      style={{ transform: "rotate(90deg)" }}
                    />
                  </div>
                </span>
              </ParallaxLayer>

              <ParallaxLayer offset={1.98} speed={-0.2}>
                <span Onclick={() => this.parallax.scrollTo(1.999)}>
                  <br />
                  <img
                    src="https://www.flaticon.com/svg/static/icons/svg/2877/2877506.svg"
                    alt=" "
                    width="10%"
                    height="10%"
                  />
                </span>
              </ParallaxLayer>

              {/* Fifth Layer */}

              <ParallaxLayer
                offset={2}
                speed={1}
                style={{ backgroundColor: "#3d5afe" }}
              />

              <ParallaxLayer offset={2} speed={1}>
                <Container>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <Line />
                </Container>{" "}
              </ParallaxLayer>

              {/* Sixth Layer */}
              <ParallaxLayer
                offset={2.98}
                speed={1}
                style={{ backgroundColor: "#00b0ff" }}
              />

              <ParallaxLayer offset={2.98} speed={0.8}>
                <span Onclick={() => this.parallax.scrollTo(2.98)}>
                  <Cards />
                </span>
              </ParallaxLayer>

              {/* Seventh Layer */}
              <ParallaxLayer
                offset={3.1}
                speed={1}
                style={{
                  backgroundImage:
                    "url(https://cdn.dribbble.com/users/2153028/screenshots/10763670/media/e3f411f09a4d25e3dd4ae37575a88e49.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"
                }}
              />
              <ParallaxLayer offset={3.2} speed={0.8}>
                <span Onclick={() => this.parallax.scrollTo(3.2)}>
                  <Container>
                    <h3 style={{ fontFamily: "Amatic SC", fontSize: "80px" }}>
                      Contact Us{" "}
                    </h3>
                    <ContactUs />
                  </Container>
                </span>
              </ParallaxLayer>
            </Parallax>
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/Guidelines">
            <Guidelines />{" "}
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/SlotBooking">
            <Records />
          </Route>
          <Route exact path="/Payment">
            <Container>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <Slot />
            </Container>
          </Route>
          <Route exact path="/TrashForms">
                <Trash/>
          </Route>
          <Route exact path="/PaymentPortal">
            <Payment />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;

/*Pictures links
Earth Punching corona : https://cdn.dribbble.com/users/1090020/screenshots/11463034/media/44c8a3e9547d0ab2ba1530ecad28ea82.png
Lady in the street : https://cdn.dribbble.com/users/2153028/screenshots/10763670/media/e3f411f09a4d25e3dd4ae37575a88e49.jpg
*/
