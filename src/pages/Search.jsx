import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API_KEY } from "../constants";
import TriviaResults from "../components/TriviaResult";
import TriviaSearchform from "../components/TriviaSearchform";


export default function Search(props){

    const [searchParams, setSearchParams] = useSearchParams()
    console.log('SearchParams', searchParams)
    const [quizes, setQuizes] = useState({})

    // https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple
   // ${API_KEY}amount=10&category=${ctg}&difficulty=${dfc}&type=multiple

   const ctg = searchParams.get('category')
   const D = searchParams.get('difficulty')


    useEffect(()=> {

        // console.log('searching for articles matching: ')
        // fetch(`${API_KEY}amount=10&category=${ctg}&difficulty=${D}&type=multiple`)
        fetch(`${API_KEY}amount=10&category=9&difficulty=hard&type=multiple`)
        .then((response) => response.json())
        .then((data) => {
            console.log('Questions', data);
            setQuizes(data.results)
        })
    }, [ctg, D])

    const handleSearch = (values) => {
        setSearchParams({values})
    }

    return(
        <>
            <TriviaSearchform />
            <TriviaResults quizes={quizes} />
        </>
    )
}