import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props){
        super(props)
        this.changeSelect = this.changeSelect.bind(this)
    }

    changeSelect(event){
        alert(`El valor se ha cambiado a ${event.target.value}`)
        this.props.changeNombre(event.target.value)
    }
    render() {
        return (
            // <button onClick={this.props.onClick}>Click me!!</button>
            <div>
                <h1>My name is {this.props.name}</h1>
                <select onChange={this.changeSelect}>
                    <option value="Kevin">Kevin</option>
                    <option value="Ana">Ana</option>
                    <option value="Karen">Karen</option>
                    <option value="Alex">Alex</option>
                </select>
            </div>
        )
    }
}
