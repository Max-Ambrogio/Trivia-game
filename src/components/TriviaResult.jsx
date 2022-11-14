import React, {useState} from "react";
import TriviaSearchform from "./TriviaSearchform";
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

const USER_ANSWERS_KEY = "userAnswers"

export default function TriviaResults({quizes}){

    const [values, setValues] = useState({
       
    })

    const handleChange = (evt) => {
        setValues({
            ...values,
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        // props.onSubmit(values)


        localStorage.setItem(USER_ANSWERS_KEY, JSON.stringify(values))
    }

    return(
        <div className="grid">
            {quizes.map((quiz, index) => {
                return(
                    <div key={`${index}`} className="grid-item">
                        <>
                            <h2>{quiz.question}</h2>
                            <form onSubmit={handleSubmit} className="answers">
                                <div className="answer">
                                    <input id="answer-1" type="radio" name="answers" value={quiz.incorrect_answers[0]}/>
                                    <label for="answer-1">{quiz.incorrect_answers[0]}</label>
                                </div>
                                <div className="answer">
                                    <input id="answer-2" type="radio" name="answers" value={quiz.incorrect_answers[1]}/>
                                    <label for="answer-1">{quiz.incorrect_answers[1]}</label>
                                </div>
                                <div className="answer">
                                    <input id="answer-3" type="radio" name="answers" value={quiz.incorrect_answers[2]}/>
                                    <label for="answer-1">{quiz.incorrect_answers[2]}</label>
                                </div>
                                <div className="answer">
                                    <input id="answer-4" type="radio" name="answers" value={quiz.correct_answer}/>
                                    <label for="answer-1">{quiz.correct_answer}</label>
                                </div>
                            </form>
                        </>
                    </div>
                )
            })}
            <button>Submit</button>
        </div>
    )
}

TriviaResults.defaultProps = {
    quiz: []
}