import React, { Component } from "react";

class QuizEnd extends Component {
  handleResetClick() {
    this.props.resetClickHandler();
  }
  render() {
    return (
      <div>
        <p>Thanks for answering!</p>
        <p className="bg-light p-2 shadow text-dark rounded shadow">
          {this.props.Name}'s total score is {this.props.totalScore}
        </p>
        <button
          onClick={this.handleResetClick.bind(this)}
          className="btn btn-danger"
        >
          Reset Quiz
        </button>
      </div>
    );
  }
}

export default QuizEnd;
