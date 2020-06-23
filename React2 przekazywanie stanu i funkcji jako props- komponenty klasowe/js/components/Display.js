import React, { Component } from 'react'

class Display extends Component {
    render() {
        const handleClick = (id) => {
            this.props.deleteCars(id)
        }
        const allCars = this.props.cars.map(car => {
            return (
                <div key={car.id}>
                    <h2>{car.color} {car.name} is {car.age} years old</h2>
                    <button onClick={() => { handleClick(car.id) }} id={car.id}>Delete</button>
                </div>
            )
        })
        return (
            <div>
                {allCars}
            </div>
        )
    }
}

export default Display
