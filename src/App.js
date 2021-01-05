import React, { useContext, useState } from 'react'
import './App.css';
import ContentBody from './components/ContentBody';
import { CarContext } from './context/CarContext';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core'

// const carPostData
function App() {
  const [car] = useContext(CarContext)
  const [price, setPrice] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleClick() {
    setLoading(true)
    await axios.post('https://jgcarpricingapp.herokuapp.com/', car).
      then(res => {
        setPrice(res.data)
        setLoading(false)
      }).
        catch(err => {
          alert("Please enter correct details")
          setLoading(false)
        })
      }

  return (
    <div className="app">
      <div className="top-bar">
        <h1>Machine Learning Car Valuation</h1>
        {
          loading ? <CircularProgress style={{marginTop:'20px'}}/> : <h2 className="carValue">{`Car Price: £${price}`}</h2>
        }
      </div>
      <ContentBody />
      <button className="submitButton" onClick={handleClick}>
          <h2>Predict Car Value</h2>
        </button>

    </div>
  );
}

export default App;
