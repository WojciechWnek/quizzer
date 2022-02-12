import React from "react";
import Answer from "./Answer";
import { nanoid } from "nanoid";
import { combineAnswers, shuffleArray } from "../utils";

export default function Question(props) {
    const answers = props.singleQuestion.allAnswers.map((answerObject) => {
        // console.log("answer", answerObject);
        return (
            <Answer
                key={nanoid()}
                answers={answerObject}
                select={(answerId) =>
                    props.select(props.singleQuestion.id, answerId)
                }
            />
        );
    });
    // console.log(props.singleQuestion.allAnswers);
    return (
        <div>
            <h3>{props.singleQuestion.question}</h3>
            <div className="answers">{answers}</div>
            <hr />
        </div>
    );
}
