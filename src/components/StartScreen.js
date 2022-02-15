import React from "react";
import logo from "../img/quizzer-logo.svg";

export default function StartScreen(props) {
    return (
        <div className="start__screen">
            <img className="start__logo" src={logo} alt="Quizzer logo" />
            <h1 className="start__title">Quizzer</h1>
            <p className="start__subtitle">Test your knowledge</p>
            <button
                className="start__button"
                onClick={() => props.startNewQuiz()}
            >
                Start new quiz
            </button>
        </div>
    );
}
