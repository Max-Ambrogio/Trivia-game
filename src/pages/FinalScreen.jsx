import React from "react";
import { useContext } from "react";
import ScoreContext from "../scoreContex";
import { useNavigate } from "react-router-dom";





export default function FinalScreen(props){
    const navigate = useNavigate();
    const scoreContext = useContext(ScoreContext);


    const handleClick = () => {
        navigate('/')
    }


    return(

        <>
        <div className="final-Screen">
            <div className="final-card">
                <h2>Congratulations!</h2>
                <p className="final-score">You scored: {scoreContext.score} / 10</p>
                <button className="reset" onClick={handleClick}>Play again?</button>
            </div>
        </div>
        </>
    )
}