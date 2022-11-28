import React, {useState} from "react";
import TriviaSearchform from "./TriviaSearchform";
import TriviaQuestion from "./TriviaQuestion";

export default function TriviaResults({quizes}){

    const [values, setValues] = useState({
    })

    const [countCorrectAnswer, setCountCorrectAnswer] = useState();
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const allQuestions = quizes;
    console.log(allQuestions)

    // const handleGuess = (isCorrect) => {


    //     setCountCorrectAnswer(countCorrectAnswer + 1)
    // }

    const handleChange = (evt) => {
        setValues({
            ...values,
            [evt.target.name]: evt.target.value
        })
    }

    const isCorrect = () => {
        // setIsAnswerCorrect(true)
        console.log('green')
        
    };
    const isNotCorrect = () => {
        // setIsAnswerCorrect(true)
        console.log('red')
    };

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

    
    const quiz = allQuestions[currentQuestion];

    const handleSubmit = (evt) => {
        evt.preventDefault()
        // props.onSubmit(values)
    }

    return(
        // <ReactCSSTransitionGroup>
            <div className="grid">
                {/* {quizes.map((quiz, index) => { */}
                    {/* return( */}
                        <h2> Question {currentQuestion}</h2>
                        <div key={currentQuestion} className="grid-item">
                            <TriviaQuestion quiz={quiz} onChange={handleGuess} />
                            <button className="advance" onClick={() => setCurrentQuestion(currentQuestion + 1)}> Next </button>
                        </div>
                    {/* ) */}
                {/* })} */}
            </div>
    //     </ReactCSSTransitionGroup>
    )
}

TriviaResults.defaultProps = {
    quizes: []
}