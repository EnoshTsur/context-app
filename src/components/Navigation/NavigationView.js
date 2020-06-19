import React from 'react'

export default function NavigationView({ setIndex, }) {
    return (
        <div>
            <button onClick={() => setIndex(0)}>
                Home
            </button>

            <button onClick={() => setIndex(1)}>
                About
            </button>
        </div>
    )
}
