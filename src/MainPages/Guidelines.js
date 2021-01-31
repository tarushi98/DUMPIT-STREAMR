import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Guidelines() {
  return (
    <div
      className="Something"
      style={{
        fontFamily: "Ubuntu,sans-serif",
        backgroundColor: "white",
        textAlign: "center"
      }}
    >
      <Navbar bg="light">
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
        <h2> Biomedical Waste </h2> <br />
        <p style={{ textAlign: "left" }}>
          {" "}
          Biomedical waste (BMW) is any waste produced during the diagnosis,
          treatment, or immunization of human or animal research activities
          pertaining thereto or in the production or testing of biological or in
          health camps.{" "}
        </p>
        <br />
        <h2> Waste we collect </h2> <br />
        <p style={{ textAlign: "left" }}>
          {" "}
          The BMW is collected and treated as per the recent guidelines issued
          by the Government of India in March 2016.{" "}
        </p>
        <br />
        <Row>
          <Col sm={2}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACrQAAAq0BwFUTdwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAALmSURBVHic7ZtPSBRRHMc/s7RRuEkhhG2FgR02ZbskRIRCdOgWegsvnfTQZaGDiEGHoGtQQlC3oD90qVvHDQxWOhTYhru2GyiiWFSbrkK66usws+4GM+OszsxP4n3gMbC/33vv+77z9rfs4WcopQgawzA6gLfAUY9TvgOXlFKTwakyiQS9gUU33g+PldsdkJZ/2BfGJoAB0HMentxzT7x+E8be1+YETVgGAHDwAJw6sX1OmBhONcD63t4BYkAUSFjPGeBng/ucBDr2R6H5kHviUhnWKgBMArMN7tMCtAEVIG89l4HbjvVEKWU7gBFA/SdjxOmcbjegCegDmoAeoD8ej5NKpWiOrcPvW66vop7NTfiUh6Vlb/nNMTibgEgjJXrWvD3338B8CYDnwBiwArxWSq3YTXOsAdaEpwCGYRhAfzKZZGhoCNZnYN67AaHwEViF9OctA94ppR5tNy2sn8E9izZAWoA02gC/FtrYgNKie86PX+D210MpM8eN0qK5l1/4ZkDvABzrgrkF+/hEDlq7YHDYeY3BYTNnImcfn1sw9+gd2L3eKr4ZkM3D6hoUpu3juYL55rJTLmtMmTm5gn28MG3ukc3vVm0NXQOkBUijDZAWII02QFqANNoAaQHSaAOkBUijDZAWII02QFqANNoAaQHSaAOkBUijDZAWII02QFqANNoAaQHSaAOkBUijDZAWII02QFqANNoAaQHSaAOkBUijDZAWII02QFqANNoAvxZqOWI9D+8sXh+r5jYa3wm+9Qw9ewC5IiQT9vHLF+HFKFw457zGw7sw/sHMtSOZgFeP4czp3eut4psBiXZzOBGJwLWr7mu0HTeHG31XGtfmhq4B0gKk0QZ4zFMAtQ6zzWDU+EBdP4KnpmivRbAIkMlkSKfTtLeOwzbNEaHyB5iDr98g82Xr06KnuU4NhXWjqVwu3+js7Kwg3wDpdUwAUQ9n82RA9erHgZdAaQ8c0GmULI1xr+f6C+oAxW00rLIUAAAAAElFTkSuQmCC" />
          </Col>
          <Col>
            {" "}
            <h3 style={{ textAlign: "left" }}>Yellow Waste </h3>
            <p style={{ textAlign: "left" }}>
              {" "}
              Includes Dicarded Medicines , Chemical Waste, Chemical Liquid
              Waste,etc.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm={2}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABLFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////s7OwqKioAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AADdAABFAAD/AAAFAAASAAAaGhqIiIiZhISZAACXAABmAABcAAB2Dg5kDg4TAwNGRkb/////3NzFFxe8Gxs0Bwf1AADiAADfAAD3AADhAABCAAAEAADZAADJAAACAABUAABTAADKAADYAABEAAAjAAC8AACrAAA0AAAuAADIAAC2AAA/AAC3AADHAADQAACjAAD8AACeAADXAAD9AAD+AADRAABFRUX/29szBwcTExPGxsbdmJjaAgKlFxeRFRUNAgJCmIkhAAAAInRSTlMAMvHwMWVmNra7wuns0tbtNYeGDV+jQkEFT/rPBhqp76gZEWUgMgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkCxIHDzv/Hb5fAAABJ0lEQVRYw+3XV1PCQBSG4VgSCQgWwK7oR7OBDQuCothoiopgr/z//8DM7g4sGicLl3rem5Mhe54JuYum/VZPL5r19Wudp0NK7woIhkRBGF0B4YgobA8MOEyna9BtSnkQXRRF4ZHvuIdcTtMx3AaMoONG2wCvz/BjaXlltVUsvtYsHpNurG9swm/4vN//hYGtxHZEoZ3dPct3QoAEJPfFyVSaz3RK/HCQVAIOM0fs+HH2hO+dZs/YPM9cKAE55Nn5AoocKKLAZh45AggggAACCCCAAAL+L1DCJTt/hTIHyrhm8wYlJeC2wvfuqjV+Uaves/lQeVQC7PrDgI6nxLMa8GL5KTyG17f3kH0fn191jP/cn5icUv/onJ6xeAJtdi6gth6YX2htNQAugtFhbQ8yhQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0xMS0xOFQwNzoxNTo1OSswMDowMM0A0IsAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMTEtMThUMDc6MTU6NTkrMDA6MDC8XWg3AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==" />
          </Col>
          <Col>
            {" "}
            <h3 style={{ textAlign: "left" }}>Red Waste </h3>
            <p style={{ textAlign: "left" }}> Includes Contaminated Waste. </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm={2}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAG7AAABuwE67OPiAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAJNQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKxUt3AAAADB0Uk5TAAECAwULEhQaHyAhIigqLzVCQ0VIVFhcZ2h6o6WprLO3uLm9wc3Q0dXg6evv8/n89lG/vQAAAO9JREFUWMPtl8kSgjAQRFHcRVBRDLgGF0AF+/+/zjIBJVWowavzLj3VkFeQ2xjGO+wznpxtoz4MJdgPAh+HQc4B/k8CXoz8u8DecL7jCjEuxXhBrDx6vLlRryVAbQJF0F6wFWJfgZVGlRgrtmh/+OdvVN8JCUoCs5M33YbMRjcvOqaWYJsNRTq3pSyWN0fkMNtqCRLMRHo4yeIET+QMCQlIQAISkIAEJCABCf5XcMRYpIu9LPZwRY5x1BKM5jKbniUHy2vKYT6ifeGzgCHUFYSVq/AU6aSvxSTFtELQivSXzqhV9WG99VXv+HXde526A1kDor0Ip9dLAAAAAElFTkSuQmCC" />
          </Col>
          <Col>
            {" "}
            <h3 style={{ textAlign: "left" }}>White Waste </h3>
            <p style={{ textAlign: "left" }}>
              {" "}
              Includes waste sharp including metals.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm={2}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABLFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////s7OwqKioAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGzwAY90AH0UAcv8AAgUACBIaGhqIiIiEjpkARJkARJcALmYAKVwUYXoUWWgEERRGRkb////c7P8hocwmqMQKLjYAbvUAZeIAZN8AbvcAZeEAHkIAAgQAYdkAWskAAQIAJlQAJVMAWsoAYdgAHkQAECMAVLwATKsAFzQAFS4AWcgAUbYAHD8AUrcAWccAXdAASaMAcfwAR54AYNcAcf0Acv4AXdFFRUXb6/8KLTUTExPGxsaYt90CZtogkasdgpcDDA6kOgkTAAAAInRSTlMAMvHwMWVmNra7wuns0tbtNYeGDV+jQkEFT/rPBhqp76gZEWUgMgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkCxIHERJp7hnsAAABJ0lEQVRYw+3XV1PCQBSG4VgSCQgWwK7oR7OBDQuCothoiopgr/z//8DM7g4sGicLl3rem5Mhe54JuYum/VZPL5r19Wudp0NK7woIhkRBGF0B4YgobA8MOEyna9BtSnkQXRRF4ZHvuIdcTtMx3AaMoONG2wCvz/BjaXlltVUsvtYsHpNurG9swm/4vN//hYGtxHZEoZ3dPct3QoAEJPfFyVSaz3RK/HCQVAIOM0fs+HH2hO+dZs/YPM9cKAE55Nn5AoocKKLAZh45AggggAACCCCAAAL+L1DCJTt/hTIHyrhm8wYlJeC2wvfuqjV+Uaves/lQeVQC7PrDgI6nxLMa8GL5KTyG17f3kH0fn191jP/cn5icUv/onJ6xeAJtdi6gth6YX2htNQAugtFhbQ8yhQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0xMS0xOFQwNzoxNzoxOCswMDowMOvIBfgAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMTEtMThUMDc6MTc6MTgrMDA6MDCalb1EAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==" />
          </Col>
          <Col>
            {" "}
            <h3 style={{ textAlign: "left" }}>Blue Waste </h3>
            <p style={{ textAlign: "left" }}>
              {" "}
              Includes Glassware and Metallic Body Parts.
            </p>
          </Col>
        </Row>
        <br />
        <p style={{ textAlign: "left" }}>
          {" "}
          As per the guidelines, a record of the waste disposed is to be
          maintained by the treatment plants. So the details of the
          person/institution submitting the waste will be given to the treatment
          plant for their records.For more details, click{" "}
          <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5784295/">
            {" "}
            here{" "}
          </a>{" "}
          .{" "}
        </p>
      </Container>
    </div>
  );
}
