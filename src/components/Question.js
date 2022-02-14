import React from "react";
import Answer from "./Answer";
import { nanoid } from "nanoid";

export default function Question(props) {
    const answers = props.singleQuestion.allAnswers.map((answerObject) => {
        return (
            <Answer
                key={nanoid()}
                checkQuiz={props.checkQuiz}
                answers={answerObject}
                select={(answerId) =>
                    props.select(props.singleQuestion.id, answerId)
                }
            />
        );
    });

    return (
        <div>
            <h3
                dangerouslySetInnerHTML={{
                    __html: props.singleQuestion.question,
                }}
            ></h3>
            <div className="answers">{answers}</div>
            <hr />
        </div>
    );
}
