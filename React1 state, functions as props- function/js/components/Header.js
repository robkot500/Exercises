import React, { useState } from 'react'
import Display from './Displey'
import Form from './Form'

function Header() {
    const allPersons = [
        { name: 'John', surname: 'Lenon', occupation: 'musician', id: 1 },
        { name: 'Tom', surname: 'Hanks', occupation: 'actor', id: 2 },
        { name: 'Bob', surname: 'Dylan', occupation: 'musician', id: 3 }
    ]

    const [persons, setPersons] = useState(allPersons)

    const deletePerson = (id) => {
        const newPersons = persons.filter(person => {
            return (
                id !== person.id
            )
        })
        setPersons(newPersons)
    }
    const addPerson = (person) => {
        person.id = new Date().getTime();
        const newPersons = [...persons, person]
        setPersons(newPersons)

    }

    return (
        <>
            <Display deletePerson={deletePerson} persons={persons} />
            <Form addPerson={addPerson} />
        </>
    )
}

export default Header
