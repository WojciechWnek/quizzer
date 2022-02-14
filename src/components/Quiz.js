import Question from "./Question";
import { nanoid } from "nanoid";

export default function Quiz(props) {
    const questions = props.questions.map((question) => {
        return (
            <Question
                key={nanoid()}
                checkQuiz={props.checkQuiz}
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
            <div className="footer">
                {props.checkQuiz.showAnswers && (
                    <p className="score">
                        You scored {props.checkQuiz.score}/
                        {props.checkQuiz.correctAnswers.length} correct answers
                    </p>
                )}
                <button
                    className="btn-check"
                    onClick={() => props.checkAnswers()}
                >
                    {props.checkQuiz.showAnswers
                        ? "Play again"
                        : "Check answers"}
                </button>
            </div>
        </div>
    );
}
