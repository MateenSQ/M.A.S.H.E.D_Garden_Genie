import React from "react";
import { Form } from "react-bootstrap";

const Budget = ({ handleChange }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Budget</h2>
      
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="Are you facing budget constraints that could limit your gardening??"
          as="select"
          onChange={handleChange("budget")}
          name="budget"
        >
          <option>Yes</option>
          <option>No</option>
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default Budget;
