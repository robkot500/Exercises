import React, { useState } from 'react'

function Form(props) {

    const person = {
        name: null,
        surname: null,
        occupation: null
    }
    const [state, setState] = useState(person)

    const handleChange = (e) => {
        setState({
            ...state, [e.target.id]: e.target.value
        })

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addPerson(state)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} action="submit">
                <label htmlFor="name">name</label>
                <input id='name' onChange={handleChange} type="text" />
                <label htmlFor="surname">surname</label>
                <input id='surname' onChange={handleChange} type="text" />
                <label htmlFor="occupation">occupation</label>
                <input id='occupation' onChange={handleChange} type="text" />
                <button >ADD</button>
            </form>
        </div>
    )
}

export default Form
