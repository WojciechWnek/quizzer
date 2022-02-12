import React, { useState } from "react";
import Question from "./Question";
import { nanoid } from "nanoid";

export default function Quiz(props) {
    const questions = props.questions.map((question) => {
        // console.log(question);
        return (
            <Question
                key={nanoid()}
                singleQuestion={question}
                select={(questionId, answerId) =>
                    props.select(questionId, answerId)
                }
            />
        );
    });

    return (
        <div>
            {questions}
            <button onClick={() => props.checkAnswers()}>CHECK ANSWERS</button>
        </div>
    );
}
