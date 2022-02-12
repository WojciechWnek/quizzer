import React from "react";

export default function StartScreen(props) {
    return (
        <section>
            <h1>Quizzer</h1>
            <p>Test your knowledge</p>
            <button onClick={() => props.startNewQuiz()}>START NEW QUIZ</button>
        </section>
    );
}
