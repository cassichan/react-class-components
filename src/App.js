import React, { Component } from "react";
import "./App.css";
import ClassTurnedToFunctionalComponent from "./ClassTurnedToFunctionalComponent";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";

let count = 1

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <ClassTurnedToFunctionalComponent anotherCount={count}/>
          <FunctionalComponent count={count}/>
          {/* <ClassComponent count={count}/> */}
          <br />
          Components go here
        </header>
      </div>
    );
  }
}

export default App;
