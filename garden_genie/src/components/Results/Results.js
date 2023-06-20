import logo from "../../images/Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Results.css";

function Results() {
  return (
    <div className="home">
      All the results
      <img src={logo} alt="Logo" className="logo img-fluid" />;
    </div>
  );
}

export default Results;
