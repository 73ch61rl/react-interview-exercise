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
        <h4>In idiomatic TypeScript, implement what is shown in the gif below</h4>
        <img src={gif} width={'90%'} />
      </div>
    );
  }
}

export default App;
