import React from "react";

export default function Answer(props) {
    const styles = {
        backgroundColor: btnColor(),
        borderColor: props.answers.selected ? "#D6DBF5" : "",
        opacity:
            props.checkQuiz.showAnswers && !props.answers.correct ? "0.6" : "",
    };
    function btnColor() {
        let color;
        if (
            props.checkQuiz.showAnswers &&
            props.answers.selected &&
            !props.answers.correct
        ) {
            color = "#F8BCBC";
        } else if (!props.checkQuiz.showAnswers && props.answers.selected) {
            color = "#D6DBF5";
        } else if (props.checkQuiz.showAnswers && props.answers.correct) {
            color = "#94D7A2";
        }

        return color;
    }

    return (
        <div>
            <button
                disabled={props.checkQuiz.showAnswers}
                style={styles}
                className="answer"
                onClick={() => props.select(props.answers.id)}
                dangerouslySetInnerHTML={{ __html: props.answers.answer }}
            ></button>
        </div>
    );
}
