import React, {useState, useMemo, useContext} from "react";
import ReactCSSTransitionGroup from 'react-transition-group';
import ScoreContext from "../scoreContex";

export default function TriviaQuestion({quiz, handleSubmit, onChange, onScoreChange}){

    const [correctAnswer, setCorrectAnswer] = useState();
    const [selectedAnswer, setSelectedAnswer] = useState();
    const [questionIndex, setQuestionIndex] = useState(0);
    const totalScore = 10;
    const scoreContext = useContext(ScoreContext)

    const [attemptedAnswer, setAttemptedAnswer] = useState([false, false, false, false]);

    const allAnswers = useMemo( () => shuffle([
        quiz.correct_answer, ...quiz.incorrect_answers 
    ]), [quiz.question])
                                                                                                                                                                   
    const isCorrect = () => {
        console.log('green')
        scoreContext.setScore(scoreContext.score + 1)
    };

    const isNotCorrect = () => {
        console.log('red')
    };

    const handleGuess = (userAnswer, index) => {
        attemptedAnswer[index] = true;
        setAttemptedAnswer([...attemptedAnswer])
        console.log(attemptedAnswer)
        if(userAnswer === quiz.correct_answer){
            console.log('correct', userAnswer)
            isCorrect();
        } else {
            console.log('incorrect, correct answer = ' , quiz.correct_answer)
            isNotCorrect();
        }   
    }

    const specialCharacters = (str) => {
        return str.replaceAll('&quot;', "''").replaceAll('&#039;', "'");
    }

    return(
        <>
            <div className='card'>
                <h2>{specialCharacters(quiz.question)}</h2>
                <form onSubmit={handleSubmit} className="answers">
                    {allAnswers.map((answer, index) => (
                        <div
                         key={`${index}`} 
                         className={'answer ' + (attemptedAnswer[index] ? 'tried' : 'not-tried') + " " + (quiz.correct_answer === answer ? 'correct' : 'incorrect')}>
                        
                            <input id={`${index}`} type="radio" name="answers" value={answer} onChange={() => handleGuess(answer, index)}/>
                            <label htmlFor="answer">{answer}</label>
                        </div>
                    ))}
                </form>
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