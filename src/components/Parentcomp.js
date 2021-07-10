import React, { Component } from 'react'
import Childcomp from './Childcomp'
class Parentcomp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           parentname:'parent'  
        }
        this.greetParent=this.greetParent.bind(this)
        
    }
    greetParent(childname)
    {
        alert(`hello ${this.state.parentname} from ${childname}`)
    }
    
    render() {
        return (
            <div>
             <Childcomp greetParent={this.greetParent}/>
            </div>
        )
    }
}

export default Parentcomp
