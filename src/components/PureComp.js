import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
    render() {
       console.log('pure componenet')
        return (
            <div>
                pure comp {this.props.name}
            </div>
        )
    }
}

export default PureComp
