import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API_KEY } from "../constants";
import TriviaResults from "../components/TriviaResult";
import TriviaSearchform from "../components/TriviaSearchform";

const USER_ANSWERS_KEY = "userAnswers"

export default function Search(props){

    const [searchParams, setSearchParams] = useSearchParams()
    console.log('SearchParams', searchParams)
    const [quizes, setQuizes] = useState([])

       
   const ctg = searchParams.get('category')
   const D = searchParams.get('difficulty')

    useEffect(() => {
        const existingAnswers = localStorage.getItem(USER_ANSWERS_KEY)
        console.log(existingAnswers)

        if(existingAnswers){
            setQuizes(JSON.parse(existingAnswers))
        } else {
            if(ctg){
                findQuizes(ctg , D)
            }
        }
        
    },[])


    //   localStorage.setItem(USER_ANSWERS_KEY, JSON.stringify(values))

    // https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple
   // ${API_KEY}amount=10&category=${ctg}&difficulty=${dfc}&type=multiple
   
   const findQuizes = (ctg, D) => {
        
        console.log('searching for articles matching: ',  ctg, D)
        // fetch(`${API_KEY}amount=10&category=9&difficulty=hard&type=multiple`)
        fetch(`${API_KEY}amount=10&category=${ctg}&difficulty=${D}&type=multiple`)
        .then((response) => response.json())
        .then((data) => {
            console.log('Questions', data);
            setQuizes(data.results)
            localStorage.setItem(USER_ANSWERS_KEY, JSON.stringify(data.results))
        })
    }

    const handleSearch = (values) => {
        setSearchParams(values)
        findQuizes(values.category , values.difficulty)
    }

    return(
        <>
            <TriviaSearchform category={ctg} difficulty={D} onSubmit={handleSearch} />
            <TriviaResults quizes={quizes} />
        </>
    )
}