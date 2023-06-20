import React from "react";
import { Form } from "react-bootstrap";

const Region = ({ handleChange }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Region</h2>
      
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="What is your location?"
          as="select"
          onChange={handleChange("region")}
          name="region"
        >
          <option>North</option>
          <option>Midlands</option>
          <option>South</option>
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default Region;
