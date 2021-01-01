
import './App.css';
import ContentBody from './components/ContentBody';

function App() {
  return (
    <div className="app">

      <div className="top-bar">
        <h1>Machine Learning Car Valuation</h1>
        <h2 className="carValue">Car Price: £1000</h2>
      </div>

      <ContentBody />
      
      <button className="submitButton">
          <h2>Predict Car Value</h2>
        </button>

    </div>
  );
}

export default App;
