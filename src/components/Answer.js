import React from "react";

export default function Answer(props) {
    // console.log(props.answers, "id", props.id);
    // console.log(props.answers);
    const styles = {
        backgroundColor: props.answers.selected ? "#D6DBF5" : "transparent",
    };
    return (
        <div>
            <button
                // className="answer-button"
                style={styles}
                onClick={() => props.select(props.answers.id)}
            >
                {props.answers.answer}
            </button>
        </div>
    );
}
