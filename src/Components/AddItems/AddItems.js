
import React, { Component } from 'react'
import './AddItems.css'

class AddItems extends Component {
    state = {
        name: '',
        age: '',

    }
    handlChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value,
        })
    }
    handlSubmit = (e) => {
        e.preventDefault();

        if (e.target.name.value === '' || e.target.age.value === '' ) {
            return false
        }
        else {
            this.props.addItem(this.state)
            this.setState({
                name: '',
                age: '',
                
            })
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handlSubmit}>
                    <input type = "text" placeholder = "Enter Name..." onChange={this.handlChange} id="name" value={this.state.name} autoComplete="none" />
                    <input type="number" placeholder="Enter Age..." onChange={this.handlChange} id="age" value={this.state.age} />
                    <input type= "submit" value="Add Todo" />
                </form>
            </div>
        );
        
    }
}

export default AddItems