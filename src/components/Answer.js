import React from "react";

export default function Answer(props) {
    // console.log(props.answers, "id", props.id);
    return (
        <div>
            <button
                className="answer-button"
                onClick={() => props.select(props.id)}
            >
                {props.answers}
            </button>
        </div>
    );
}
