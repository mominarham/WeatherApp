import React, { Component } from 'react'

export default class Onemore extends Component {
    state = {
        name : 'arham',
        age : 3
    }

    changed= (e)=>{
        this.setState({[e.target.name]:e.target.value})
        console.log(e.target.value)
    }
    render() {
        return (
            <div>
            <form>
                name  <input type='text' name= 'name'  value={this.state.name}  onChange= {this.changed} />
                age <input type='text' name='age' value = {this.state.age} onChange= {this.changed} />
            </form>
            </div>
        )
    }
}
