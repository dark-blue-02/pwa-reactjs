import React from 'react';
import './App.css';
import { LoginScreen } from './ui/login/login_screen';

function App() {

  return (
    <div className="App">
      <LoginScreen name={"Duy"} age={20} />
    </div>
  );
}


export default App;
