import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  render() {
    return (
      <div>
        <h1>My first React App!</h1>
        <p>Welcome :)</p>
        <Ninjas name="David" age="25" belt="black" />
        <Ninjas name="Daisy" age="33" belt="black" />
      </div>
    );
  }
}

export default App;
