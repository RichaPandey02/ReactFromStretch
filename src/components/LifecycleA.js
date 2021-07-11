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
     shouldComponentUpdate()
     {
         console.log('LifecycleA  shouldComponentUpdate')
         return true
     }
     getSnapshotBeforeUpdate(prevProps,prevState){
         console.log('LifeCycleA  getSnapshotBeforeUpdate ')
         return null
     }
     componentDidUpdate()
     {
         console.log('LifeCycleA  componentDidUpdate ')
     }
     changestate()
     {
         this.setState({
             name:'codevolution'
         })
     }
    render() {
        console.log('LifeCycleA render')
        return (
            
            <div>
                <button onClick={()=>this.changestate()}>ChangeState</button>
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifecycleA
