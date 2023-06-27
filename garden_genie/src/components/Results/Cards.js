

function Card(props) {

  //console.log('props.value:')
  //console.log(props.value)

  // const handleClick = () => {
  //    props.onClick(props.value)
  // }

  return (
    <div className="card" onClick={props.onClick} data-div-id={props.value}>
      <img
        src={props.imgSrc}
        className="card-img-top"
        alt={props.imgAlt}
      />
      <div className="card-body">
        <h3 className="card-title">{props.plantName}</h3>
      </div>
    </div>
  );
}

export default Card;
