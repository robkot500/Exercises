import React, { Component } from 'react'
import Display from './Display'
import Form from './Form'

class Header extends Component {
    state = {
        cars: [
            { name: 'volvo', color: 'red', age: 3, id: 1 },
            { name: 'fiat', color: 'white', age: 2, id: 2 },
            { name: 'toyota', color: 'silver', age: 5, id: 3 }
        ]
    }
    deleteCars = (id) => {
        const newCars = this.state.cars.filter(car => {
            return (
                car.id !== id
            )
        })
        this.setState({
            ...this.state,
            cars: newCars
        })
    }
    addCars = (newCar) => {
        newCar.id = new Date().getTime()
        const newCars = {
            ...this.state,
            cars: [...this.state.cars, newCar]
        }
        this.setState(newCars)

    }

    render() {
        return (
            <div>
                <Display deleteCars={this.deleteCars} cars={this.state.cars} />
                <Form addCars={this.addCars} />
            </div>
        )
    }
}

export default Header
