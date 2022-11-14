import React, {useState} from "react";

export default function TriviaSearchform(props){
    const [values, setValues] = useState({
        category: props.category || "9",
        difficulty: props.difficulty || 'easy',
    })

    const handleChange = (evt) => {
        setValues({
            ...values,
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        props.onSubmit(values)
    }

    console.log('values', values)

    return(
        <form className="select" onSubmit={handleSubmit}>
            <select onChange={handleChange} name="category" value={values.category}> 
                <option value="9">General Knowledge</option>
                <option value="10">Entertainment: Books</option>
                <option value="11">Entertainment: Film</option>
                <option value="12">Entertainment: Music</option>
                <option value="13">Entertainment: Musiclas & Theatres</option>
                <option value="14">Entertainment: Television</option>
                <option value="15">Entertainment: Video Games</option>
                <option value="16">Entertainment: Board Games</option>
                <option value="17">Science & Nature</option>
                <option value="18">Science: Computers</option>
                <option value="19">Science: Mathematics</option>
                <option value="20">Mythology</option>
                <option value="21">Sports</option>
                <option value="22">Geography</option>
                <option value="23">History</option>
                <option value="24">Politics</option>
                <option value="25">Art</option>
                <option value="26">Celebrities</option>
                <option value="27">Animals</option>
                <option value="28">Vehicles</option>
                <option value="29">Entertainment: Comics</option>
                <option value="30">Science: Gadgets</option>
                <option value="31">Entertainemnt: Japanese Animae & Manga</option>
                <option value="32">Entertainment: Cartoon & Animation</option>
            </select>
            <select onChange={handleChange} name="difficulty" value={values.difficulty}>
                <option value={"easy"}>easy</option>
                <option value={"medium"}>medium</option>
                <option value={"hard"}>hard</option>
            </select>
            <button onSubmit={handleSubmit} type="submit">Submit</button>
        </form>
    )
}