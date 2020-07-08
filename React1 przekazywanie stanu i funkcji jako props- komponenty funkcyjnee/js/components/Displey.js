import React from 'react'

function Displey(props) {

    const handleClick = (e) => {
        props.deletePerson(parseInt(e.target.id))
    }

    const displayPersons = props.persons.map(person => {
        return (
            <div key={person.id}>
                <h2>He is {person.name} {person.surname} and he is {person.occupation}.</h2>
                <button onClick={handleClick} id={person.id}>Delete</button>
            </div>
        )

    })

    return (
        <div>
            {displayPersons}
        </div>
    )
}

export default Displey
