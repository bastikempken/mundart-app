import React from "react";
import { connect } from "react-redux";
import QuestionAnswerComponent from "./fragen/QuestionAnswerComponent";
import * as fragenConstants from "./fragen/QuestionConstants";

class FragenComponent extends React.Component {
  render() {
    return (
      <>
        <h1>Fragen</h1>
        <QuestionAnswerComponent props={fragenConstants.question_01} />
        <QuestionAnswerComponent props={fragenConstants.question_02} />
        <QuestionAnswerComponent props={fragenConstants.question_03} />
        <QuestionAnswerComponent props={fragenConstants.question_04} />
      </>
    );
  }
}

export default connect(
  undefined,
  undefined
)(FragenComponent);
