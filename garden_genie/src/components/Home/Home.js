import logo from '../../images/Logo.png';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Home.css'

function Home(props) {


   
    return (
      <div className="home">
        <h2 className="welcome">Welcome to</h2>
        <div className="logo-container"> 
        <img src={logo} alt='garden genie ogo' className="logo img-fluid" id="welcome-logo" onClick={props.handleLogoClick}/>
        </div>
        <p class= "home-title">Making your gardening dreams bloom!</p>
        <Link to="form">
          <button id="get_started" class="centered-button btn btn-primary btn-lg larger-button green-button" data-toggle="button" aria-pressed="false" aria-label="Button that leads to Form" >Get started</button>
        </Link>
       </div>
    );
  }
  
export default Home;