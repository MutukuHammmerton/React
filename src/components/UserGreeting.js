import React, { Component } from 'react'

 class UserGreeting extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedIn: true
         }
     }
     
    render() {
        //conditional statement 1
        return(
            this.state.isLoggedIn ?
            <div>Welcome Hammerton</div> :
            (<div>Welcome Guest</div>)
        )

          //conditional statement 2
        // let message
        // if(this.state.isLoggedIn) {
        //     message = <div>Welcome Hammerton</div>
        // }else {
        //     message = <div>Welcome GUest</div> 
        // }
         
        //conditional statement 3
        // return <div> {message}</div>
        // if(this.state.isLoggedIn) {
        //     return (
        //         <div> welcome Hammerton</div>
        //     )
        // }else {
        //     return (
        //     <div>Welcome Guest</div>
        //     )
        // }

       //conditional statement 4
      return  this.state.isLoggedIn && <div> Welcome Hammerton</div>
    }
}

export default UserGreeting
