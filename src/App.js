import React, {useEffect, useState} from 'react';
import './App.css';
import {LoginScreen} from './screens/login/login_screen';

function App() {
  const [state, setState] = useState(2);
  useEffect(() => {alert("useEffect!")}, []);

  return (
    <div className="App">
      <LoginScreen name={"Duy"} age={state}/>
      <button onClick={() => {setState((prev) => ++prev)}}>+</button>
    </div>
  );
}

/**
 * 
 * @param {number} _ 
 * @returns
 */
const Screen = (_) => {
  return <></>
};


export default App;
