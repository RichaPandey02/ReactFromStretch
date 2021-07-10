import React,{ Component} from 'react'
class Message extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             Message:'welcome visitor'
        }
       
    }
    clickhandler()
    {
        this.setState({
            Message:'thank you for subscribing'
        })
    }
   
    render()
    {
        return(
            <div>
                <h1>{this.state.Message}</h1>
                <button onClick={()=>this.clickhandler()}>click</button>
            </div>
        )
    }
}
export default Message
