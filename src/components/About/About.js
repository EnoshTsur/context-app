import React from 'react'
import Context from '../../context/Context'

export default function About({ bgcolor }) {

    const { user} = React.useContext(Context)

    return (
        <div style={{
            padding: '1rem',
            backgroundColor: bgcolor
        }}>
            {
                Object.entries(user).map(([key, value]) => (
                    <h3 key={key}>
                        {`${key}: ${value}`}
                    </h3>
                ))
            }
        </div>
    )
}
