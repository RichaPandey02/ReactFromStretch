import React, { Component } from 'react'

 class RefsDemo extends Component {
     constructor(props) {
         super(props)
     
        
              this.inputref=React.createRef()
         
     }
     componentDidMount()
     {
         this.inputref.current.focus();
         console.log(this.inputref)
     }
     
    render() {
        return (
            <div>
                <input type="text" ref={this.inputref}/>
            </div>
        )
    }
}

export default RefsDemo
