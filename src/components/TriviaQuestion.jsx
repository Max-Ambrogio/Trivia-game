import React from "react";

export default function TriviaQuestion({quiz, handleSubmit}){

    const allAnswers = shuffle([
        quiz.correct_answer, ...quiz.incorrect_answers 
    ])



    return(
        <>
            <h2>{decodeURI(quiz.question)}</h2>
            <form onSubmit={handleSubmit} className="answers">
                {allAnswers.map((answer, index) => (
                    <div key={`${index}`} className="answer">
                        <input id={`${index}`} type="radio" name="answers" value={answer}/>
                        <label htmlFor="answer">{answer}</label>
                    </div>
                ))}
            </form>
        </>
    )
}

TriviaQuestion.defaultProps = {
    quiz: {
        incorrect_answers:[],
    },
    handleSubmit: () => {}
}    

function shuffle(unshuffled) {
        return unshuffled
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
        }