import React, { Component } from 'react'

class Form extends Component {
    state = {
        cars: [
            { name: null, color: null, age: null }
        ]
    }
    render() {
        const handleChange = (e) => {
            this.setState({
                ...this.state,
                [e.target.id]: e.target.value
            })
        }
        const handleSubmit = (e) => {
            e.preventDefault();
            this.props.addCars(this.state)

        }
        return (
            <div>
                <form onSubmit={handleSubmit} action="submit">
                    <label htmlFor="name">name</label>
                    <input onChange={handleChange} id='name' type="text" />
                    <label htmlFor="color">color</label>
                    <input onChange={handleChange} id='color' type="text" />
                    <label htmlFor="age">age</label>
                    <input onChange={handleChange} id='age' type="text" />
                    <button>ADD</button>
                </form>
            </div>
        )
    }
}

export default Form
