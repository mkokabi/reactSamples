import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import MainMenu from './MainMenu';
import MyComponent from './MyComponenet';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <MainMenu isOpen={true} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <MyComponent default = {0}/>
      </div>
    );
  }
}

export default App;
