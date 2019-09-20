import React from 'react';

import './App.css';

import Comp1 from './Components/Comp1';
import Comp2 from './Components/Comp2';

class App extends React.Component {

  constructor()
  {
    super();
    this.state={Welcome:"Hello"};// define the initial state because you are using getDerivedStateFromProps
    console.log('Main component constructor.')
  }
  static getDerivedStateFromProps(props,state)
  {
    console.log(' Main component getDerivedStateFromProps.');
    return null;
  }

  render(){
    console.log("Main component Render.");
  return (
    <div > 
    <Comp1/>
    <Comp2/>
    </div>
  );
  }
}

export default App;
