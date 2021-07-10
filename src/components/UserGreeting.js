import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:false
        }
    }
    
    render() {
    //     if(this.state.isLoggedIn)
    //     return(
    //         <h1>hello vishwas</h1>
    //     )
    //     else{
    //         return(
    //             <h1>welcome guest</h1>
    //         )
    //     }
      
    // }
    return this.state.isLoggedIn?(
    <div>welcome Vishwas</div>
    ):
    <div>welcome guest</div>
}}

export default UserGreeting
