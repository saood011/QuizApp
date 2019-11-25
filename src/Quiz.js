import React, { Component } from "react";
import QuizQuestion from "./QuizQuestion";
import QuizEnd from "./QuizEnd";
import EnterName from "./Name";
let quizData = require("./quiz_data.json");

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz_position: 1,
      quiz_score: 0,
      full_name: "",
      Password: ""
    };
  }
  showNextQuestion() {
    this.setState({ quiz_position: this.state.quiz_position + 1 });
  }
  manageScore(increasedBy) {
    this.setState({ quiz_score: this.state.quiz_score + increasedBy });
  }
  handleResetClick() {
    this.setState({ quiz_position: 1 });
    this.setState({ quiz_score: 0 });
    this.setState({ full_name: "" });
  }
  enterName = (name, password) => {
    this.setState({ full_name: name, Password: password });
  };
  render() {
    const isQuizEnd =
      this.state.quiz_position - 1 === quizData.quiz_questions.length;
    return (
      <div className="QuizQuestion bg-transparent">
        {
          <div className="position-absolute score d-flex bg-info btn btn-info ">
            <p className="w-75">
              {this.state.full_name.split(" ")[0] || "Your "} Score:
            </p>{" "}
            <p className="w-25">{this.state.quiz_score}</p>
          </div>
        }
        {isQuizEnd ? (
          <QuizEnd
            resetClickHandler={this.handleResetClick.bind(this)}
            totalScore={this.state.quiz_score}
            Name={this.state.full_name}
          />
        ) : this.state.full_name && this.state.Password === "1234" ? (
          <QuizQuestion
            quiz_question={
              quizData.quiz_questions[this.state.quiz_position - 1]
            }
            showNextQuestionHandler={this.showNextQuestion.bind(this)}
            manageScore={this.manageScore.bind(this)}
          />
        ) : (
          <EnterName enterName={this.enterName} />
        )}
      </div>
    );
  }
}

export default Quiz;
