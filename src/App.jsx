import { useState } from 'react'
import axios from 'axios'
function App() {
  const [count, setCount] = useState(0)
  // const url= `https://api.openweathermap.org/data/2.5/weather?lat=27.708317&lon=85.3205817&appid=ef3c1546eda88e63b5d85489d47e17a7`
  
  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Kathmandu</p>
          </div>
          <div className="temp">
            <h1>50° Farenheit</h1>
          </div>
          <div className="description">
            <p>Sunny</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>55° Farenheit</p>
          </div>
          <div className="humidity">
            <p>70%</p>
          </div>
          <div className="wind">
            <p>15 MPH</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
