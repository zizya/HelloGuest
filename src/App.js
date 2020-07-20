import React, { Component } from 'react';

import  UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput'
import './App.css';

class App extends Component {
  state = {
    userData: [
      { name: 'Guest', hobby:'unknown' }
    ]
  };

  newNameChanger = (event) => {
    this.setState(
      {
        userData: [
          { name: event.target.value, hobby:'unknown'}
        ]
      }
    )
  }
  


 render(){
   const style ={
    width: '20%',
    boxShadow: '0px 2px 6px',
    margin: '16px auto'
   }
  return (
    <div className="App">
      <h1>Hello guest!</h1>
      <p style={style}>How can i speak to you?</p>
      <UserInput 
      name= {this.state.userData[0].name}
      changed={this.newNameChanger}
      />
      <UserOutput name ={this.state.userData[0].name}/>
      
    </div>
  );
  }
}

export default App;
