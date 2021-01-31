import React from "react";
import Entry from "./Entry";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import emojipedia from "../emojipedia";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import "../dope.css";

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      img={emojiTerm.img}
      name={emojiTerm.name}
      add={emojiTerm.add}
      city={emojiTerm.city}
      cont={emojiTerm.cont}
    />
  );
}

function Records() {
  const [search, setSearch] = useState("");
  const filteredcards = emojipedia.filter((cards) => {
    return cards.city.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
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
      <h1>
        <span
          className="slot"
          style={{ fontFamily: "Amatic SC,sans serif", fontSize: "80px" }}
        >
          Slot Booking
        </span>
      </h1>
      <div className="form">
        <form className="formsearch">
          <input
            className="inputbox"
            type="search"
            placeholder="Enter Location"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="bt1">
            Search
          </button>
        </form>
      </div>

      <Container fluid>
        <div className="classbox">
          {<dl className="dictionary">{filteredcards.map(createEntry)}</dl>}
        </div>
      </Container>
    </div>
  );
}

export default Records;
