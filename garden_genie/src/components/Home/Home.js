import logo from '../../images/Logo.png';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Home.css'

function Home() {

  async function getData() {
    const response = await fetch('https://eu-west-2.aws.data.mongodb-api.com/app/data-cvwbq/endpoint/data/v1/action/find', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'eS4s8jXGRxxbfFP8OTmsr5xEFfPErn8COw3o00fLD9JfusMg76NAtWPuN7QQi49C',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "dataSource": "MASHEDcluster",
        "database": "Gardening",
        "collection": "Plants"
      })
    });
    const data = await response.json();
    console.log(data);
  }

    return (
      <div className="home">
        <h2>Welcome to</h2>
        <img src={logo} alt='Logo' className="logo img-fluid"/>
        <p>Making your gardening dreams bloom!</p>
        <Link to="form">
          <button id="get_started" aria-label="Button that leads to Form">Get started</button>
        </Link>
        <button onClick={getData}>Button to get data</button>
        </div>
    );
  }
  
export default Home;