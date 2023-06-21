import logo from "../../images/Logo.png";
import "./PlantInfo.css";
import { Link } from "react-router-dom";

function PlantInfo() {
  return (
    <div className="home">
      <img src={logo} alt="Logo" className="logo img-fluid" />;
      <h5>Plants Plants Plants</h5>
      <div className="row-align-items-center ">
        <div className="card-group">
          <div className="card">
            <img
              src="https://www.almanac.com/sites/default/files/styles/or/public/image_nodes/sunflower-1627193_1920.jpg?itok=td7mL8qA"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h3 id="card-title">Sunflower</h3>
              <ul className="card-info">
                <li>When To Plant</li>
                <li>Sun Requirements</li>
                <li>Soil Conditions</li>
                <li>Watering Frequency</li>
                <li>Outdoor Planting</li>
                <li>Indoor Planting</li>
                <li>Harvesting</li>
                <li>Common Problems</li>
                <li>Mulching</li>
                <li>Feeding</li>
                <li>Pruning</li>
              </ul>
            </div>
          </div>
        </div>
        <Link to="../results">
          <button id="get-started" aria-label="Button that leads to Form">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PlantInfo;
