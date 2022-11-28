import React, {useState, useMemo} from "react";
import ReactCSSTransitionGroup from 'react-transition-group';

export default function TriviaQuestion({quiz, handleSubmit, onChange}){

    const [correctAnswer, setCorrectAnswer] = useState();
    const [selectedAnswer, setSelectedAnswer] = useState();
    const [questionIndex, setQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const totalScore = 10;




    const allAnswers = useMemo( () => shuffle([
        quiz.correct_answer, ...quiz.incorrect_answers 
    ]), [quiz.question])

    // const selectAnswer = (userAnswer) => {
    //     setSelectedAnswer(userAnswer);
    //     // long-way
    //     // if(userAnswer === quiz.correct_answer){
    //     //     onGuess(true);
    //     // } else {
    //     //     onGuess(false);
    //     // }

    //     console.log("clicked", userAnswer)
        
    // }

    // const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

    const isCorrect = () => {
        // setIsAnswerCorrect(true)
        console.log('green')
        setScore(score + 1);
        console.log(score)
        
    };
    const isNotCorrect = () => {
        // setIsAnswerCorrect(true)
        console.log('red')
    };

    const handleGuess = (userAnswer) => {
        // onGuess(userAnswer === quiz.correct_answer)
        if(userAnswer === quiz.correct_answer){
            console.log('correct', userAnswer)
            isCorrect();
        } else {
            console.log('incorrect, correct answer = ' , quiz.correct_answer)
            isNotCorrect();
        }  
        
    }

    const finalScore = totalScore[score] 

    // CorrectAnswers();

    return(
        <>
            <div className='card'>
                <h2>{decodeURI(quiz.question)}</h2>
                <form onSubmit={handleSubmit} className="answers">
                    {allAnswers.map((answer, index) => (
                        <div key={`${index}`} className="answer">
                            <input id={`${index}`} type="radio" name="answers" value={answer} onChange={() => handleGuess(answer)}/>
                            <label htmlFor="answer">{answer}</label>
                            
                        </div>
                    ))}
                </form>
                <div className="score">
                    <h2>Score</h2>
                    <p>{score} / 10</p>
                </div>
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