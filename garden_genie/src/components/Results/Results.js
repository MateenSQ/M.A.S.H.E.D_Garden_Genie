import logo from "../../images/Logo.png";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./Results.css";
import Card from './Cards.js'

function Results(props) {

/*
Making a filter based on time

user inputs:
- minimum
- moderate
- noTimeConstraints

Database choices:
- Watering
- Maintenance

1. Get information from database
  - async function that get uses fetch() ✔

2. Compare userInput to database information
  - The data recieved from the database will enter a state variable - it will become objects within an array
    - Depending on the user input, we need to find plants that have specific properties
    -

3. Return plants index that go through filter for further selection

*/


// console.log(props.plants[0].Properties.Maintenance)
// const plantsArray = props.plants;
// console.log(plantsArray);
// for (let i=0; i<props.plants.length; i++) {
//     
//     console.log(i);
//     console.log(props.plants[i].Properties.Maintenance);
// }
console.log(props.plants.filter((item) => {return item.Properties.Maintenance === 'Low'}));

// function filterTime() {
//   let filteredArray = []

//   let time = props.values.time
  
//     if (time === 'minimum') {

//       filteredArray = props.plants.filter((item) => {
//           return item.Properties.Maintenance === 'Low'
//         }),
//         console.log(filteredArray);
//     }
//     return filteredArray;
// }

  // filterTime();

  /*  
                                  Watering              Maintenance                  
  minimum = Low && Low
  moderate
  
  */


  return (

    <div className="home">
        <img src={logo} alt="Logo" className="logo img-fluid" />
        <div className="header">
          <h5>Presenting your personalised gardening findings</h5>
        </div>
     
      <div className="row align-items-center">
        <div className="card-group">

          <Card 
          imgSrc="https://www.almanac.com/sites/default/files/styles/or/public/image_nodes/sunflower-1627193_1920.jpg?itok=td7mL8qA"
          imgAlt="..."
          plantName="Sunflower"
          onClick={props.handleResultsClick}
          />

          <Card 
          imgSrc="https://cdn.shopify.com/s/files/1/0513/3428/3424/products/oldenglish1.jpg?v=1631357610"
          imgAlt="..."
          plantName="Lavender"
          onClick={props.handleResultsClick}
          />      

          <Card 
          imgSrc="https://www.muddytrowel.com/wp-content/uploads/2022/07/hydrangea-blue-2-e1657704030437.jpg"
          imgAlt="..."
          plantName="Hydrangea"
          onClick={props.handleResultsClick}
          />

        </div>
      </div>

    </div>
    

  );
}

/*
<div className="card">
            <img
              src="https://www.muddytrowel.com/wp-content/uploads/2022/07/hydrangea-blue-2-e1657704030437.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h3 className="card-title">Hydrangea</h3>

              <Link to="plant-info" className="btn btn-primary stretched-link">Go to plant</Link>

            </div>
          </div>
*/




export default Results;
