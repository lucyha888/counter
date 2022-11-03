import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [color, setColor] = useState("black")
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    if (counter > 0) {
      setColor("green")
    }
    if (counter < 0) {
      setColor("red")
    }
    if (counter === 0) {
      setColor("black")
    }
  }, [counter]) 
  const handleIncrease = () => {
    setCounter(counter + 1) 
  }
  const handleDecrease = () => {
    setCounter(counter - 1)
  }
  const handleReset = () => {
    setCounter(0)
  }
  return (
  <div classNameName="App">
       <div className="container">
          <h1>Counter</h1>
          <span id="value" style={{color:color}}>{counter}</span>
       <div className="btn-group">
          <button className="decrease" onClick={handleDecrease}>DECREASE</button>
          <button className="reset" onClick={handleReset}>RESET</button>
          <button className="increase" onClick={handleIncrease}>INCREASE</button>
      </div>
    </div>
  </div>
  );
}

export default App;
