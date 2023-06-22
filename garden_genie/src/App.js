import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home/Home.js'
import Multiform from './components/Form/Multiform.js'
import Results from './components/Results/Results.js'
import PlantInfo from './components/PlantInfo/PlantInfo.js'


function App() {

  const navigate = useNavigate();
  const handleFormSubmit = (values) => {
    navigate("/results", { state: values });
  };

  const handleLogoClick = () => {
    navigate("/");
  };
  
  const handleResultsClick = () => {
    navigate("/plant-info");
  };

  return (
    <Routes>
      <Route path='/' element={<Home handleLogoClick={handleLogoClick}/>}></Route>
      <Route path='form' element={<Multiform onFormSubmit={handleFormSubmit} handleLogoClick={handleLogoClick}/>}></Route>
      <Route path='results' element={<Results handleResultsClick={handleResultsClick} handleLogoClick={handleLogoClick}
      />}></Route>
      <Route path='plant-info' element={<PlantInfo handleLogoClick={handleLogoClick}/>}></Route>

    </Routes>
  );
}

export default App;
