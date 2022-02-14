import React from "react";

export default function StartScreen(props) {
    return (
        <div className="start__screen">
            <h1 className="start__title">Quizzer</h1>
            <p className="start__subtitle">Test your knowledge</p>
            <button
                className="start__button"
                onClick={() => props.startNewQuiz()}
            >
                START NEW QUIZ
            </button>
        </div>
    );
}
