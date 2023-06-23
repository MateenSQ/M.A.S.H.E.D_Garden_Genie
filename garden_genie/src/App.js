import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home/Home.js'
import Multiform from './components/Form/Multiform.js'
import Results from './components/Results/Results.js'
import PlantInfo from './components/PlantInfo/PlantInfo.js'


function App() {

  const [plants, setPlants] = useState([])

  const [values, setValues] = useState({
    time: "",
    space: "",
    region: "",
    accessibility: "",
    budget: "",
  });

  const navigate = useNavigate();

  const handleFormSubmit = (values) => {
    navigate("/results", { state: values });
  };
  
  const handleResultsClick = () => {
    navigate("/plant-info");
  };

  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='form' element={<Multiform onFormSubmit={handleFormSubmit} values={values} setValues={setValues} plants={plants} setPlants={setPlants}/>}></Route>
      <Route path='results' element={<Results handleResultsClick={handleResultsClick} plants={plants} setPlants={setPlants}/>}></Route>
      <Route path='plant-info' element={<PlantInfo />}></Route>
    </Routes>
  );
}

export default App;
