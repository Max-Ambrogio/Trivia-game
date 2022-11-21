import React, {useState} from "react";
import TriviaSearchform from "./TriviaSearchform";
import TriviaQuestion from "./TriviaQuestion";
// import ReactCSSTransitionGroup from 'react-transition-group';
// import styled from "styled-components"
// const Questions = styled.div`
//     padding: 2%;
//     background-color:#4444;
//     border-radius: 15px;


//     > h2{
//         color:#76499;

//     }

//     > input{
//         padding: 10px;
//     }

// `


export default function TriviaResults({quizes}){

    const [values, setValues] = useState({
    })

    const [countCorrectAnswer, setCountCorrectAnswer] = useState();
    const [currentQuestion, setCurrentQuestion] = useState(1)
    const allQuestions = [];


    


    const handleGuess = (isCorrect) => {


        setCountCorrectAnswer(countCorrectAnswer + 1)
    }

    const handleChange = (evt) => {
        setValues({
            ...values,
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        // props.onSubmit(values)
    }

    return(
        <ReactCSSTransitionGroup>
            <div className="grid">
                {quizes.map((quiz, index) => {
                    return(
                        <div key={`${index}`} className="grid-item">
                            <TriviaQuestion quiz={quiz} onGuess={handleGuess} />
                        </div>
                    )
                })}

            </div>
        </ReactCSSTransitionGroup>
    )
}

TriviaResults.defaultProps = {
    quizes: []
}