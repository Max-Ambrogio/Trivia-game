import React, { useEffect, useRef,  useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API_KEY } from "../constants";
import TriviaResults from "../components/TriviaResult";
import TriviaSearchform from "../components/TriviaSearchform";

const USER_ANSWERS_KEY = "userAnswers"

export default function Search(props){

    const [searchParams, setSearchParams] = useSearchParams()
    console.log('SearchParams', searchParams)
    const [quizes, setQuizes] = useState([])
    const [isSearching, setIsSearching] = useState(false);
    const [error, setError] = useState('')

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

    const findQuizes = (ctg, D) => {
        
        console.log('searching for articles matching: ',  ctg, D)
        setIsSearching(true);

        fetch(`${API_KEY}amount=10&category=${ctg}&difficulty=${D}&type=multiple`)
        .then((response) => response.json())
        .then((data) => {
            console.log('Questions', data);
            setQuizes(data.results);
            if(data.results.length == 0){
                setError("No results found");
            } else {
                setQuizes([]);
                setError('');
            }
            setIsSearching(false);
            localStorage.setItem(USER_ANSWERS_KEY, JSON.stringify(data.results))
        })
    }

    const handleSearch = (values) => {
        setSearchParams(values)
        findQuizes(values.category , values.difficulty)
    }

    return(
        <>
            <TriviaSearchform isSearching={isSearching} category={ctg} difficulty={D} onSubmit={handleSearch} />

            {error && <p>Error! {error}</p>}


        </>
    )
}