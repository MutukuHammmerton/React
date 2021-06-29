import React, { Component } from 'react'

class ClassClick extends Component {
    clickHanlder() {
        console.log('clicked the button')
    }
     render() {
        return (
            <div>
                <button onclick={this.clickHanlder}>Click me</button>
            </div>
        )
    }
}

export default ClassClick
