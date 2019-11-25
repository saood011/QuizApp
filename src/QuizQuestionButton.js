import React, { Component } from "react";

class QuizQuestionButton extends Component {
  handleClick(e) {
    this.props.clickHandler(this.props.button_text);
    var id = e.target.id;
    setTimeout(() => {
      document.getElementById(id).style.background = "white";
    }, 500);
    document.getElementById(id).style.background = "#006680";
  }

  render() {
    var buttonBullets = ["A.", "B.", "C.", "D."];
    return (
      <div>
        <button
          className={`btn w-100 border border-dark text-left ${
            true ? "btn-light" : "btn-light"
          }`}
          onClick={this.handleClick.bind(this)}
          id={this.props.id}
        >
          {buttonBullets[this.props.button_num]} {this.props.button_text}
        </button>
      </div>
    );
  }
}

export default QuizQuestionButton;
