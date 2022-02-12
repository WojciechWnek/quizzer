import "./App.css";
import React, { useState, useEffect } from "react";
import StartScreen from "./components/StartScreen";
import { DEFAULT_QUIZ_LENGTH, API_URL } from "./config";
import GetApi from "./api";
import Quiz from "./components/Quiz";
import { combineAnswers, shuffleArray } from "./utils";

function App() {
    const [quiz, setQuiz] = useState();
    const [newQuiz, setNewQuiz] = useState();

    const startNewQuiz = () => {
        setNewQuiz(true);
    };

    const checkAnswers = () => {};

    useEffect(() => {
        if (newQuiz) return;
        async function fetchData() {
            const questions = await GetApi(API_URL);
            shapeData(questions);
        }

        fetchData();
    }, [newQuiz]);

    function shapeData(data) {
        setQuiz(
            data.map((question, index) => {
                const schuffledAnswers = shuffleArray(
                    combineAnswers(
                        question.correct_answer,
                        question.incorrect_answers
                    )
                ).map((elem, index) => ({
                    answer: elem,
                    id: index,
                    selected: false,
                }));
                return {
                    ...question,
                    id: index,
                    allAnswers: [...schuffledAnswers],
                };
            })
        );
    }

    const [selectedAnswer, setSelectedAnswer] = useState(quiz);
    function select(questionId, answerId) {
        setQuiz((prevQuiz) => {
            return prevQuiz.map((question) => {
                return question.id === questionId
                    ? {
                          ...question,
                          allAnswers: question.allAnswers.map((answer) => {
                              return answer.id === answerId
                                  ? {
                                        ...answer,
                                        selected: !answer.selected,
                                    }
                                  : { ...answer, selected: false };
                          }),
                      }
                    : question;
            });
        });
        console.log("question: ", questionId, "ansewer: ", answerId);
    }

    return (
        <div className="App">
            {!newQuiz ? (
                <StartScreen startNewQuiz={startNewQuiz} />
            ) : (
                <Quiz
                    checkAnswers={checkAnswers}
                    questions={quiz}
                    select={select}
                />
            )}
            {console.log("App", quiz)}
        </div>
    );
}

export default App;
