import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // incorrectAnswer: false
    };
  }
  handleClick(button_text) {
    setTimeout(() => {
      this.props.showNextQuestionHandler();
    }, 1000);

    if (button_text === this.props.quiz_question.answer) {
      this.props.manageScore(5);
    }
  }
  render() {
    return (
      <div className="m-4 p-2">
        <main>
          <section>
            <p className="bg-dark p-4 text-white shadow">
              {this.props.quiz_question.id}.&nbsp;
              {this.props.quiz_question.instruction_text}
            </p>
          </section>
          <section className="buttons">
            <div className="answer-option-buttons w-100 d-flex justify-content-between flex-wrap flex-column">
              {this.props.quiz_question.answer_options.map((v, i) => (
                <QuizQuestionButton
                  key={i}
                  button_text={v}
                  button_num={i}
                  id={i}
                  clickHandler={this.handleClick.bind(this)}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default QuizQuestion;
