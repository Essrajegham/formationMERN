import React from 'react';
import './App.css';
import Component1 from './Components/Component1.jsx'
import Component2 from './Components/Component2.jsx'
import Propos1    from  './Components/Propos1.jsx'


function App() {
  return (
    <div className="App">
      <Component1 />
      <Component2 />
      <Propos1 name="essra"  age="23" email="essraossw@gmail.com" />
      <br />

      <Propos1 name="Mh" age="24"/>
      <br />

      <Propos1 name="ess" />



    </div>
  );
}

export default App;
