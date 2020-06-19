import React from 'react'

export default function ContainerView({ setBackgroundColor, }) {
    const [ color, setColor, ] = React.useState('')

    return (
        <div>
            <input type="text" onChange={e => setColor(e.target.value)}/>
            <button 
                onClick={() => setBackgroundColor(color)}
                disabled={ color === ''}
            >
                 Change color
            </button>
        </div>
    )
}
