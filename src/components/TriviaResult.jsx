import React, {useState} from "react";
import TriviaSearchform from "./TriviaSearchform";
import TriviaQuestion from "./TriviaQuestion";
import ScoreContext from "../scoreContex";
import { useContext } from "react";

export default function TriviaResults({quizes}){
    const [values, setValues] = useState({})
    const [scoreboard, setScoreboard] = useState(0);

    const [countCorrectAnswer, setCountCorrectAnswer] = useState();
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const scoreContext = useContext(ScoreContext);

    const allQuestions = quizes;
    console.log(allQuestions)


    const handleChange = (evt) => {
        setValues({
            ...values,
            [evt.target.name]: evt.target.value
        })
    }

    const handleGuess = (userAnswer) => {
        // onGuess(userAnswer === quiz.correct_answer)
        if(userAnswer === quiz.correct_answer){
            console.log('correct', userAnswer)
            // isCorrect();
            // setScore(score + 1);
            // console.log(score)
        } else {
            // console.log('incorrect, correct answer = ' , quiz.correct_answer)
            // isNotCorrect();
        }  
    }

    const onScoreChange = (scoreDelta) => {
        console.log('onScoreChange() is trivia result', scoreDelta)
        setScoreboard(scoreboard + scoreDelta)
    }

    const nextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1)
        if(currentQuestion >= 0){
            //final screen
            console.log('no more questions')
        }
    }

    
    const quiz = allQuestions[currentQuestion];

    const handleSubmit = (evt) => {
        evt.preventDefault()
        // props.onSubmit(values)
    }

    return(
        // <ReactCSSTransitionGroup>
            <div className="grid">
                <h2> Question {currentQuestion}</h2>
                <div key={currentQuestion} className="grid-item">
                    <TriviaQuestion quiz={quiz} onChange={handleGuess} onScoreChange={onScoreChange} />
                    <button className="advance" onClick={nextQuestion}> Next </button>
                </div>
                <div className="score">Score: {scoreContext.score}</div>
            </div>
    //     </ReactCSSTransitionGroup>
    )
}

TriviaResults.defaultProps = {
    quizes: []
}