import React, {useState} from "react";

export default function TriviaSearchform(props){
    const [values, setValues] = useState({
        category: '9',
        difficulty: 'Easy',
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
            <select name="category" value={values.category}> 
                <option value="9" onChange={handleChange}>Gneral Knowledge</option>
                <option value="10" onChange={handleChange}>Entertainment: Books</option>
                <option value="11" onChange={handleChange}>Entertainment: Film</option>
                <option value="12" onChange={handleChange}>Entertainment: Music</option>
                <option value="13" onChange={handleChange}>Entertainment: Musiclas & Theatres</option>
                <option value="14" onChange={handleChange}>Entertainment: Television</option>
                <option value="15" onChange={handleChange}>Entertainment: Video Games</option>
                <option value="16" onChange={handleChange}>Entertainment: Board Games</option>
                <option value="17" onChange={handleChange}>Science & Nature</option>
                <option value="18" onChange={handleChange}>Science: Computers</option>
                <option value="19" onChange={handleChange}>Science: Mathematics</option>
                <option value="20" onChange={handleChange}>Mythology</option>
                <option value="21" onChange={handleChange}>Sports</option>
                <option value="22" onChange={handleChange}>Geography</option>
                <option value="23" onChange={handleChange}>History</option>
                <option value="24" onChange={handleChange}>Politics</option>
                <option value="25" onChange={handleChange}>Art</option>
                <option value="26" onChange={handleChange}>Celebrities</option>
                <option value="27" onChange={handleChange}>Animals</option>
                <option value="28" onChange={handleChange}>Vehicles</option>
                <option value="29" onChange={handleChange}>Entertainment: Comics</option>
                <option value="30" onChange={handleChange}>Science: Gadgets</option>
                <option value="31" onChange={handleChange}>Entertainemnt: Japanese Animae & Manga</option>
                <option value="32" onChange={handleChange}>Entertainment: Cartoon & Animation</option>
            </select>
            <select name="difficulty" value={values.difficulty}>
                <option onChange={handleChange} value={values.easy}>Easy</option>
                <option onChange={handleChange} value={values.medium}>Medium</option>
                <option onChange={handleChange} value={values.hard}>Hard</option>
            </select>
            <button onSubmit={handleSubmit} type="submit">Submit</button>
        </form>
    )
}