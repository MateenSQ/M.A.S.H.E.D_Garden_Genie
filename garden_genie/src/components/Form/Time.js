import React from "react";
import { Form } from "react-bootstrap";

const Time = ({ handleChange }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Time</h2>
      
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="How much time do you have to maintain a garden?"
          as="select"
          onChange={handleChange("time")}
          name="time"
        >
          <option>Minimum (1 to 2 hours per week)</option>
          <option>Moderate (2 to 4 hours per week)</option>
          <option>I don't have time costraints</option>
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default Time;
