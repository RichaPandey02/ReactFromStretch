import React, { Component, PureComponent } from 'react'
import RegCom from '../RegCom'
import MemoComp from './MemoComp'
import PureComp from './PureComp'

export class ParentComp1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'richa'
        }
    }
    componentDidMount()
    {
        setInterval(()=>{
            this.setState({
               name:'vishwas'
            })
        },2000)
    }
    
    render() {
        console.log('*************Parent comp1 ************');
        return (
            
            <div>
                parent com {this.state.name}
                {/* <PureComp name={this.state.name}/>
                <RegCom name={this.state.name}/> */}
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp1
