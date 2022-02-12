export function combineAnswers(correctAnswer, incorrectAnswers) {
    const allAnswers = incorrectAnswers.concat(correctAnswer);
    return allAnswers;
}

export function shuffleArray(arr) {
    return arr.sort(() => 0.5 - Math.random());
}
