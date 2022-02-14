import "./App.css";
import React, { useState, useEffect } from "react";
import StartScreen from "./components/StartScreen";
import { API_URL } from "./config";
import GetApi from "./api";
import Quiz from "./components/Quiz";
import { combineAnswers, shuffleArray } from "./utils";

function App() {
    const [quiz, setQuiz] = useState();
    const [newQuiz, setNewQuiz] = useState();
    const [checkQuiz, setCheckQuiz] = useState({
        showAnswers: false,
        score: 0,
        correctAnswers: [],
    });

    const startNewQuiz = () => {
        setNewQuiz(true);
    };

    const checkAnswers = () => {
        const correctAnswers = quiz.map((question) => question.correct_answer);
        const selectedAnswers = quiz
            .map((question) =>
                question.allAnswers.filter((answer) => answer.selected)
            )
            .map((elem) => {
                return elem.length > 0 ? elem[0].answer : null;
            });
        const score = correctAnswers
            .map((answer, index) => {
                return answer === selectedAnswers[index] ? 1 : 0;
            })
            .reduce((a, b) => a + b);

        setCheckQuiz((prevQuiz) => {
            return {
                showAnswers: !prevQuiz.showAnswers,
                score: score,
                correctAnswers: correctAnswers,
            };
        });
        if (checkQuiz.showAnswers) {
            setNewQuiz(false);
        }
    };

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
                    correct: elem === question.correct_answer ? true : false,
                }));
                return {
                    ...question,
                    id: index,
                    allAnswers: [...schuffledAnswers],
                };
            })
        );
    }

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
    }

    return (
        <div className="App">
            {!newQuiz ? (
                <StartScreen startNewQuiz={startNewQuiz} />
            ) : (
                <Quiz
                    checkQuiz={checkQuiz}
                    checkAnswers={checkAnswers}
                    questions={quiz}
                    select={select}
                />
            )}
        </div>
    );
}

export default App;
