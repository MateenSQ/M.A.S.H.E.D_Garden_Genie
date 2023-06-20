import logo from "../../images/Logo.png";
import "./PlantInfo.css";

function PlantInfo() {
  return (
    <div className="home">
      <img src={logo} alt="Logo" className="logo img-fluid" />;
      <h5>Plants Plants Plants</h5>
      <div className="row align-items-center ">
        <div className="card-group">
          <div className="card">
            <img
              src="https://www.almanac.com/sites/default/files/styles/or/public/image_nodes/sunflower-1627193_1920.jpg?itok=td7mL8qA"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h3 className="card-title">Sunflower</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlantInfo;
