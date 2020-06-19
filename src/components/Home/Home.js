import React from 'react'
import Context from '../../context/Context'

export default function Home( {bgcolor, }) {
    
    const [ name, setName, ] = React.useState('')
    const [ car, setCar, ] = React.useState('')

    
    const { setUser, } = React.useContext(Context)
    
    return (
        <div style={{
            padding: '1rem',
            backgroundColor: bgcolor
        }}>
            <input type="text" placeholder="Name" onChange={e => setName(e.target.value)}/>
            <input type="text" placeholder="Car" onChange={e => setCar(e.target.value)} />
            <button 
                disabled={ name === ''  || car === ''}
                onClick={() => setUser({ name, car })}
            >
                Change!
            </button>
        </div>
    )
}
