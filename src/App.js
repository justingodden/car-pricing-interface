import React, { useContext } from 'react'
import './App.css';
import ContentBody from './components/ContentBody';
import { CarContext } from './context/CarContext';

function App() {
  const [car] = useContext(CarContext)

  function handleClick() {
        console.log(JSON.stringify(car))
    }

  return (
    <div className="app">
      <div className="top-bar">
        <h1>Machine Learning Car Valuation</h1>
        <h2 className="carValue">Car Price: £{car.carValue}</h2>
      </div>
      <ContentBody />
      <button className="submitButton" onClick={handleClick}>
          <h2>Predict Car Value</h2>
        </button>

    </div>
  );
}

export default App;
