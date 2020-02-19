import React from 'react'

function Profile({ bgColor, name, lastname, occupation }) {
  return (
    <section
      style={{
        width: '100%',
        height: '33%',
        backgroundColor: bgColor || 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly'
      }}
    >
      <div>
        <h2>Name</h2>
        <p>{name}</p>
      </div>
      <div>
        <h2>Lastname</h2>
        <p>{lastname}</p>
      </div>
      <div>
        <h2>Occupation</h2>
        <p>{occupation}</p>
      </div>
    </section>
  )
}

export default Profile
