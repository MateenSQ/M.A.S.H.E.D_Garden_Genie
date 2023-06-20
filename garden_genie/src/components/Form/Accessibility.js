import React from "react";
import { Form } from "react-bootstrap";

const Accessibility = ({ handleChange }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Mobility</h2>
      
      <Form.Group controlId = "accessibility" className="w-75 mt-4">
        <Form.Check
        value="yes"
        type="radio"
          label="Do you have any mobility difficulties?"
          onChange={handleChange("accessibility")}
          checked={accessibility === "yes"}

        >
       {/* <div className="form-check"> 
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label className="form-check-label" htmlFor="flexRadioDefault1">
    Yes
  </label>
 </div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
  <label className="form-check-label" htmlFor="flexRadioDefault2">
    Default checked radio
  </label>
</div> */}

          {/* { <option>Yes</option>
          <option>No</option> } */}
        </Form.Check>
      </Form.Group>
    </div>
  );
};

export default Accessibility;
