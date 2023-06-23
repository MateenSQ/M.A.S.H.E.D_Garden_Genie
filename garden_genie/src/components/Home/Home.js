import logo from '../../images/Logo.png';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Home.css'

function Home() {

    return (
      <div className="home">
        <h2>Welcome to</h2>
        <img src={logo} alt='Logo' className="logo img-fluid"/>
        <p>Making your gardening dreams bloom!</p>
        <Link to="form">
          <button id="get_started" aria-label="Button that leads to Form">Get started</button>
        </Link>
        </div>
    );
  }
  
export default Home;