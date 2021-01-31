import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ContactForm = (props) => {
  const initialFieldValues = {
    fullName: "",
    mobile: "",
    email: "",
    address: "",
    pincode: "",
    state: "",
    slottime: ""
  };

  var [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    if (props.currentId === "") setValues({ ...initialFieldValues });
    else
      setValues({
        ...props.contactObjects[props.currentId]
      });
  }, [props.currentId, props.contactObjects]);

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
  };

  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      <div className="form-group input-group">
        <div className="input-group-prepend"></div>
        <input
          className="form-control"
          name="fullName"
          placeholder="Full Name"
          value={values.fullName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-row">
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">📲</div>
          </div>

          <input
            className="form-control"
            name="mobile"
            placeholder="Mobile"
            value={values.mobile}
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">✉️</div>
          </div>
          <input
            className="form-control"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div className="form-group">
        <textarea
          maxLength="20"
          type="text"
          className="form-control"
          name="address"
          placeholder="Address"
          value={values.address}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="row">
        <div className="form-group input-group col-md-4">
          <input
            required
            className="form-control"
            name="pincode"
            placeholder="Pincode"
            value={values.pincode}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-8">
          <input
            required
            className="form-control"
            name="state"
            placeholder="State"
            value={values.state}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-group input-group">
        <label
          HTMLfor="slot-time"
          style={{ float: "left", marginRight: "30px", paddingTop: "10px" }}
        >
          Pick a Slot
        </label>
        <input
          required
          type="datetime-local"
          name="slottime"
          className="form-control"
          value={values.slottime}
          onChange={handleInputChange}
          style={{ width: "75%", marginBottom: "2 0px" }}
        ></input>
      </div>
      <div className="form-group">
        <Link to="/TrashForms">
          <input
            type="submit"
            value={props.currentId === "" ? "Save" : "Update"}
            className="btn btn-primary btn-block"
          />
        </Link>
      </div>
    </form>
  );
};

export default ContactForm;
