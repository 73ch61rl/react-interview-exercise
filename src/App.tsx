import * as React from 'react';
import './App.css';

const gif = require('./example.gif');

interface AppState {

}

class App extends React.Component<{}, AppState> {
  render() {
    return (
      <div className="AppContainer">
        <h1>React Exercise</h1>
        <h4>In idiomatic TypeScript and React, implement what is shown in the gif below</h4>
        <h4>Exact styling is not top priority, you should aim for the functionality</h4>
        <h5>(Screen recorder stuff of course excluded, the controls and the red click circles)</h5>
        <img src={gif} width={'90%'} />
      </div>
    );
  }
}

export default App;
