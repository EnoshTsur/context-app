import React from 'react'

export default function HomePage({ user, setUser,}) {

    console.log(user)

    return (
        <div>
            <h1>{`${JSON.stringify(user)}`}</h1>
          <button 
            onClick={() => setUser({ name: "enosh"})}
           >
               Click
           </button> 
        </div>
    )
}
