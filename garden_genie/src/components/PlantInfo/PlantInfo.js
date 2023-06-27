import logo from "../../images/Logo.png";
import "./PlantInfo.css";
import { Link, useParams } from "react-router-dom";

/*

1. When the user clicks on each card, it takes them to the relevant plant info
  -On click, we get the id of the plant they have clicked on

2. We use that id to navigate to the path with the id as a query

3. We use the params hook from React Router to grab the id from the url of the plant info page and use it to display the relevant information

*/

function PlantInfo(props) {
  const { plantid } = useParams();

  let plantIndex = 0;

  for (let i = 0; i < props.plants.length; i++) {
    if (props.plants[i]._id === plantid) {
      plantIndex = i;
    }
  }

  const plant = props.plants[plantIndex];

  console.log(plant);

  return (
    <div className="home">
      <img
        src={logo}
        alt="Logo"
        className="logo img-fluid"
        onClick={props.handleLogoClick}
      />
      <div className="row-align-items-center ">
        <div className="card-group">
          <div className="card">
            <img
              src={plant.CardInfo.Image}
              className="card-img-top"
              alt={plant.CardInfo.Name}
            />
            <div className="card-body">
              <h3 id="card-title">{plant.CardInfo.Name}</h3>
              <ul className="card-info">
                <li>When To Plant: {plant.InfoPage.WhenToPlant}</li>
                <li>Sun Requirements: {plant.InfoPage.SunRequirements}</li>
                <li>Soil Conditions: {plant.InfoPage.SoilConditions}</li>
                <li>Watering Frequency: {plant.InfoPage.WateringFrequency}</li>
                <li>Outdoor Planting: {plant.InfoPage.OutdoorPlanting}</li>
                <li>Indoor Planting: {plant.InfoPage.IndoorPlanting}</li>
                <li>Harvesting: {plant.InfoPage.Harvesting}</li>
                <li>Common Problems: {plant.InfoPage.CommonProblems}</li>
                <li>Mulching: {plant.InfoPage.Mulching}</li>
                <li>Feeding: {plant.InfoPage.Feeding}</li>
                <li>Pruning: {plant.InfoPage.Pruning}</li>
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
