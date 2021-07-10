import React from 'react'

function Childcomp(props) {
    return (
        <div>
            <button onClick={()=>props.greetParent('child')}>click</button>
        </div>
    )
}

export default Childcomp
