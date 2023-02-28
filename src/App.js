import React, { useState } from 'react';
import './App.css';
import { LoginScreen } from './ui/login/login_screen';

function App() {
  const [state, setState] = useState(2);

  return (
    <div className="App">
      <LoginScreen name={"Duy"} age={state} />
      <button onClick={() => { setState((prev) => ++prev) }}>+</button>
    </div>
  );
}


export default App;
