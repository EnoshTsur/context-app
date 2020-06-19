import React from 'react'
import Context from '../../context/Context'
import ContainerView from './ContainerView'

export default function Container({ home, about }) {

    const [ backgroundColor, setBackgroundColor ] = React.useState('blue')
    
    const { index, } = React.useContext(Context)


    return (
        <>
            <ContainerView setBackgroundColor={setBackgroundColor} />
           {
               index === 0 ? home(backgroundColor) : about(backgroundColor)
           } 
        </>
    )
}
