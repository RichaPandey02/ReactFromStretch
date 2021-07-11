import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

 class LifecycleA extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'richa pandey'
         }
         console.log('LifeCycleA constructor')
     }
     static getDerivedStateFromProps(props,state){
        console.log('LifecycleA  getDerivedStateFromProps')
        return null
     }
     componentDidMount()
     {
         console.log('LifeCycleA  componentDidMount')
     }
     
    render() {
        console.log('LifeCycleA render')
        return (
            
            <div>
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifecycleA
