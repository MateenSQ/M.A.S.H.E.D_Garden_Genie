import React from "react";
import { Form } from "react-bootstrap";

const Space = ({ handleChange }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Space</h2>
      
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="What type of space do you have available?"
          as="select"
          onChange={handleChange("space")}
          name="space"
        >
          <option>Indoors</option>
          <option>Outdoors pots</option>
          <option>Outdoors garden</option>
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default Space;
