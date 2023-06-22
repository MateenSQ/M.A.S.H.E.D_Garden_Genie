import { Link } from "react-router-dom";

function Card(props) {

    console.log(props)

  return (
<Link to="plant-info">
    <div className="card">
      <img
        src={props.imgSrc}
        className="card-img-top"
        alt={props.imgAlt}
      />
      <div className="card-body">
        <h3 className="card-title">{props.plantName}</h3>
      </div>
    </div>
</Link>
  );
}

export default Card;
