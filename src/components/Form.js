import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comment:'',
             topic:'React'
        }
    }
    handlerUsernameChanage = (event) => {
         this.setState({
             username:event.target.value
         })
    }
    handleCommentChange = (event) => {
        this.setState({
            comment:event.target.value
        })
    }
    handleTopicChange = (event) => {
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault()
    }
    
    render() {
        return (
           <form onSubmit={this.handleSubmit}>
               <div>
                   <label>Username</label>
                   <input 
                   type='text' 
                   value={this.state.username} 
                   onChange={this.handlerUsernameChanage}
                   />
                </div>
                <div>
                    <label>Comment</label>
                    <textarea 
                    value={this.state.comments}
                    onchange={this.handleCommentChange}></textarea>
                </div>
                <div>
                    <lable>Topic</lable>
                    <select value={this.state.topic} onChange = {this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angualar</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
           </form>
        )
    }
}

export default Form
