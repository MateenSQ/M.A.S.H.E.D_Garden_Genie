import logo from "../../images/Logo.png";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./Results.css";

function Results() {
  return (
    <div className="home">
      <img src={logo} alt="Logo" className="logo img-fluid" />;
      <h5>Presenting your personalised gardening findings</h5>
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
          <div className="card">
            <img
              src="https://cdn.shopify.com/s/files/1/0513/3428/3424/products/oldenglish1.jpg?v=1631357610"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h3 className="card-title">Lavender</h3>
            </div>
          </div>
          <div className="card">
            <img
              src="https://www.muddytrowel.com/wp-content/uploads/2022/07/hydrangea-blue-2-e1657704030437.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h3 className="card-title">Hydrangea</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
