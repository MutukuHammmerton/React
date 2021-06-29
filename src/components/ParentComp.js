import React, { Component, PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComponent'
import MemoComp from './MemoComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Hammerton'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name : 'Hammerton'
            })
        }, 2000)
    }
    
    render() {
        console.log('****parent Component  render ******')
        return (
            <div>
                Parent Component
                <MemoComp name= {this.state.name}/>
                {/* <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp> */}
            </div>
        )
    }
}

export default ParentComp
