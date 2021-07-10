import React, { Component } from 'react'

 class Eventbind extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              Message:'hello'
         }
         this.clickHandler=this.clickHandler.bind(this);
     }
     clickHandler()
     {
this.setState({
    Message:'GoodBye!'
})
     }
     
    render() {
        return (
            <div>
                <h1>{this.state.Message}</h1>
                <button onClick={this.clickHandler}>Click</button>
                
            </div>
        )
    }
}

export default Eventbind
