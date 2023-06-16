import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.js'
import Form from './components/Form/Form.js'
import Results from './components/Results/Results.js'
import PlantInfo from './components/PlantInfo/PlantInfo.js'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='form' element={<Form />}></Route>
      <Route path='results' element={<Results />}></Route>
      <Route path='plant-info' element={<PlantInfo />}></Route>
    </Routes>
  );
}

export default App;