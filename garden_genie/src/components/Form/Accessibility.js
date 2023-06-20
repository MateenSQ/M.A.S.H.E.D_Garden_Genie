import React from "react";
import { Form } from "react-bootstrap";

const Accessibility = ({ handleChange }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Mobility</h2>
      
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="Do you have any mobility difficulties?"
          as="select"
          onChange={handleChange("mobility")}
          name="mobility"
        >
        <div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label className="form-check-label" htmlFor="flexRadioDefault1">
    Default radio
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
  <label className="form-check-label" htmlFor="flexRadioDefault2">
    Default checked radio
  </label>
</div>

          {/* { <option>Yes</option>
          <option>No</option> } */}
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default Accessibility;
