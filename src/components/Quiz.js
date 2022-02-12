import React, { useState } from "react";
import Question from "./Question";
import { nanoid } from "nanoid";

export default function Quiz(props) {
    console.log(props.questions);
    function select(questionId, id) {
        console.log(questionId, id);

        // console.log("foo");
    }

    const questions = props.questions.map((question, index) => {
        // console.log( question);
        return (
            <Question
                id={"Question " + index}
                key={nanoid()}
                singleQuestion={question}
                select={select}
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
