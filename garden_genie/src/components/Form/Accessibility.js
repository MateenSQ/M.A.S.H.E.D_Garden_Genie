import React from "react";
import { Form } from "react-bootstrap";

const Accessibility = ({ handleChange, values }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Mobility</h2>
      <p>Do you have any mobility difficulties?</p>
      <Form.Group controlId="accessibility" className="w-75 mt-4">
        <Form.Check
          value="yes"
          type="radio"
          label="Yes"
          onChange={handleChange("accessibility")}
          checked={values.accessibility === "yes"}
          aria-labelledby="Radio button choice for yes"
          required  // Add the required attribute
        />
        <Form.Check
          value="no"
          type="radio"
          label="No"
          onChange={handleChange("accessibility")}
          checked={values.accessibility === "no"}
          aria-labelledby="Radio button choice for no"
          required  // Add the required attribute
        />
      </Form.Group>
    </div>
  );
};

export default Accessibility;