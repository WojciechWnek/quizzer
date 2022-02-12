import "./App.css";
import React, { useState, useEffect } from "react";
import StartScreen from "./components/StartScreen";
import { DEFAULT_QUIZ_LENGTH, API_URL } from "./config";
import GetApi from "./api";
import Quiz from "./components/Quiz";

function App() {
    const [quiz, setQuiz] = useState();
    const [newQuiz, setNewQuiz] = useState();

    // setSelectedAnswer((prevAnswers) => {
    //     return prevAnswers.map((question) => {
    //         return { ...question, selected: false };
    //     });
    // });

    // console.log("App", quiz);

    const startNewQuiz = () => {
        setNewQuiz(true);
        // setNewQuiz((prevNewQuiz) => !prevNewQuiz);
    };

    const checkAnswers = () => {};

    useEffect(() => {
        if (newQuiz) return;
        async function fetchData() {
            const questions = await GetApi(API_URL);

            setQuiz(
                questions.map((question, index) => {
                    return { ...question, id: index };
                })
            );
        }

        fetchData();
    }, [newQuiz]);

    return (
        <div className="App">
            {!newQuiz ? (
                <StartScreen startNewQuiz={startNewQuiz} />
            ) : (
                <Quiz checkAnswers={checkAnswers} questions={quiz} />
            )}
            {console.log("App", quiz)}
        </div>
    );
}

export default App;
