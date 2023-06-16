import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Route, Routes, Router } from 'react-router-dom';
import App from './App';
import Home from './components/Home/Home.js'
import Form from './components/Form/Form.js'
import Results from './components/Results/Results.js'
import PlantInfo from './components/PlantInfo/PlantInfo.js'

describe('Routing Tests', () => {
  it('renders the correct component for the / path', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Home page')).toBeInTheDocument();
  })

  it('renders the correct component for the /form path', () => {
    render(
      <MemoryRouter initialEntries={['/form']}>
        <Routes>
          <Route path='/form' element={<Form />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Foooooorm')).toBeInTheDocument();
  })

  it('renders the correct component for the /results path', () => {
    render(
      <MemoryRouter initialEntries={['/results']}>
        <Routes>
          <Route path='/results' element={<Results />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('All the results')).toBeInTheDocument();
  })

  it('renders the correct component for the /plant-info path', () => {
    render(
      <MemoryRouter initialEntries={['/plant-info']}>
        <Routes>
          <Route path='/plant-info' element={<PlantInfo />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Plants plants plants')).toBeInTheDocument();
  })

});
