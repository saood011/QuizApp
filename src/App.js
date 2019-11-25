import React, { Component } from "react";
import "./App.css";
import Quiz from "./Quiz";
class App extends Component {
  render() {
    return (
      <div className="text-left bg-transparent">
        <h2 className="p-3 shadow  logo  ">
          <p className="quiz-app bg-transparent text-white rounded p-2 border">
            Quiz App by Saood
          </p>
        </h2>
        <Quiz />
      </div>
    );
  }
}

export default App;
