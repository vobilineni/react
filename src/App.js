import React, { Component } from 'react';
import './styles/App.css';

class App extends Component {
  render() {
      var myStyle ={
          fontSize: 100,
          color: '#F00'
      }
      var i = 1;
    return (
      <div>
          <h1 style ={myStyle}>{i === 1 ? 'true':'false'}</h1>
      </div>
    );
  }
}

export default App;
