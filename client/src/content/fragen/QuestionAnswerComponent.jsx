import React from "react";

const QuestionAnswerComponent = ({ props }) => {
  return (
    <>
      <h2>{props.question}</h2>
      <br />
      <p>{props.answer}</p>
    </>
  );
};

export default QuestionAnswerComponent;
