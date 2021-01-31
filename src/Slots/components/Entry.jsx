import React from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "../dope.css";

function Entry(props) {
  return (
    <div className="blog-card">
      <div className="meta">
        <div className="photo">
          <img src={props.img} alt="" />
        </div>
        <ul className="details">
          <h3>
            <i class="fa fa-volume-control-phone" aria-hidden="true"></i>
            &nbsp;&nbsp;Contact Us
          </h3>
          <li className="cont">{props.cont}</li>
          <li className="tags"> </li>
        </ul>
      </div>
      <div className="description">
        <h1>{props.name}</h1>
        <h2>{props.city}</h2>
        <p> {props.add}</p>
        <p class="read-more">
          <Link to="/Payment">
            <a>Book Now&rarr;</a>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Entry;
