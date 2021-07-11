import React, { Component } from 'react'

export class RegCom extends Component {
    
    render() {
        console.log('Regular comp')
       
        return (
            <div>
                reg com {this.props.name}
            </div>
        )
    }
}

export default RegCom
