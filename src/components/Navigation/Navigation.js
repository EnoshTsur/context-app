import React from 'react'
import Context from '../../context/Context'

export default function Navigation({ render, }) {
   
    const { setIndex, } = React.useContext(Context)
   
    return (
        <>
          { render(setIndex) }  
        </>
    )
}
