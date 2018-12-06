import React, { Component } from "react";
import FirstScreen from "./Components/FirstScreen";
import SecondScreen from "./Components/SecondScreen";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goToSecond: false
    };
  }

  handleValue = () => {
    this.setState({ goToSecond: true });
  };

  render() {
    return (
      <div className="assignment">
        {this.state.goToSecond ? (
          <SecondScreen />
        ) : (
          <FirstScreen Signal={() => this.handleValue()} />
        )}
      </div>
    );
  }
}

export default App;
