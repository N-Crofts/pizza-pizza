import React, {Component} from 'react'

class Navbar extends Component {
    render() {
        return (
          <div className="navbar">
            <a href="https://wdi11-pizza.herokuapp.com/#description">Our Story</a>
            <a href="https://wdi11-pizza.herokuapp.com/#menu">Menu</a>
            <h1>PIZZA-EXPRESS</h1>
            <a href="https://wdi11-pizza.herokuapp.com/#locations">Locations</a>
            <a href="https://wdi11-pizza.herokuapp.com/#contact">Contact</a>
          </div>
          
        )
    }
}

export default Navbar