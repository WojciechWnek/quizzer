import React from "react";
import Answer from "./Answer";
import { nanoid } from "nanoid";
import { combineAnswers, shuffleArray } from "../utils";

export default function Question(props) {
    const correctAnswer = props.singleQuestion.correct_answer;
    const incorrectAnswers = props.singleQuestion.incorrect_answers;
    const shuffledAnswers = shuffleArray(
        combineAnswers(correctAnswer, incorrectAnswers)
    );

    const answers = shuffledAnswers.map((answer, index) => {
        return (
            <Answer
                id={"Answer " + index}
                key={nanoid()}
                answers={answer}
                select={(answerId) => props.select(props.id, answerId)}
            />
        );
    });

    return (
        <div>
            <h3>{props.singleQuestion.question}</h3>
            <div className="answers">{answers}</div>
            <hr />
        </div>
    );
}
