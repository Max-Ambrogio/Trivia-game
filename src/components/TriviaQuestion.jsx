import React, {useState, useMemo} from "react";
import ReactCSSTransitionGroup from 'react-transition-group';

export default function TriviaQuestion({quiz, handleSubmit, onGuess}){

    const [correctAnswer, setCorrectAnswer] = useState();
    const [selectedAnswer, setSelectedAnswer] = useState();


    const allAnswers = useMemo( () => shuffle([
        quiz.correct_answer, ...quiz.incorrect_answers 
    ]), [quiz.question])


    const CorrectAnswers = () => {
        console.log(quiz.correct_answer);

    }


    const selectAnswer = (userAnswer) => {
        setSelectedAnswer(userAnswer);
        // long-way
        // if(userAnswer === quiz.correct_answer){
        //     onGuess(true);
        // } else {
        //     onGuess(false);
        // }

        console.log("clicked", userAnswer)
        
        onGuess(userAnswer === quiz.correct_answer)
    }

    // CorrectAnswers();

    return(
        <>
            <div className="card">
                <h2>{decodeURI(quiz.question)}</h2>
                <form onSubmit={handleSubmit} className="answers">
                    {allAnswers.map((answer, index) => (
                        <div key={`${index}`} className="answer">
                            <input id={`${index}`} type="radio" name="answers" value={answer} onChange={() => selectAnswer(answer)}/>
                            <label htmlFor="answer">{answer}</label>
                        </div>
                    ))}
                </form>
                <button onClick={() => setCurrentQuestion(currentQuesstion + 1)}>Advance</button>
            </div>
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