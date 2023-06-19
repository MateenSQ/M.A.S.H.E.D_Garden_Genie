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
          <option>Yes</option>
          <option>No</option>
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default Accessibility;
