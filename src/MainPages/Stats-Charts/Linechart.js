import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Chart from "react-apexcharts";

class LineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "line"
        },
        stroke: {
          curve: "smooth"
        },
        xaxis: {
          categories: [2018, 2019, 2020, 2021, 2022]
        }
      },
      series: [
        {
          name: "Expected Graph",
          data: [530, 600, 900, 963, 1100]
        },
        {
          name: "If we do something about it",
          data: [530, 600, 900, 850, 600]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

class Line extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Container>
            <h2
              style={{
                fontFamily: "Amatic SC",
                fontSize: "70px",
                color: "black",fontWeight:"bold"
              }}
            >
              {" "}
              Bending the Curve{" "}
            </h2>
            <br />
            <br />
            <div
              class="bars"
              style={{ paddingLeft: "25%", paddingRight: "45%" }}
            >
              <LineChart />

              <br />
            </div>
            <h3 style={{ textAlign: "left",fontFamily:"Ubuntu,sans-serif", fontWeight:"bold"}}>
              {" "}
              If we change the way we treat waste then our charts could go way
              down by 2022 and that's what we at DUMP IT aim to do !{" "}
            </h3>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Line;
