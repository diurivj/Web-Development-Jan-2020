import React from 'react'

function Form({ bgColor, name, lastname, occupation, handleInputs }) {
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
      <input
        onChange={handleInputs}
        type="text"
        name="name"
        placeholder="Name"
        value={name}
      />
      <input
        onChange={handleInputs}
        type="text"
        name="lastname"
        placeholder="Lastname"
        value={lastname}
      />
      <input
        onChange={handleInputs}
        type="text"
        name="occupation"
        placeholder="Occupation"
        value={occupation}
      />
    </section>
  )
}

export default Form
