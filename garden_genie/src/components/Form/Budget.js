import React from "react";
import { Form } from "react-bootstrap";

const Budget = ({ handleChange }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Budget</h2>
      
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="What is your total budget?"
          as="select"
          onChange={handleChange("budget")}
          name="budget"
        >
          <option>Below £50</option>
          <option>£50 to £100</option>
          <option>£100 to £200</option>
          <option>£200 +</option>
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default Budget;
