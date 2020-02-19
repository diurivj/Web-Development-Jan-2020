import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  @import url('https://fonts.googleapis.com/css?family=Vibes&display=swap');
  font-family: 'Vibes', cursive;
  width: 100%;
  outline: none;
  border: none;
  height: 50%;
  font-size: ${props => props.fontSize || '2rem'};
  text-align: center;
  background: #e5d8c6;
`

function Input({ name, value, onChange, fontSize }) {
  return (
    <StyledInput
      fontSize={fontSize}
      name={name}
      value={value === 'true' ? '✅' : value === 'false' ? '🚫' : value}
      onChange={onChange}
    />
  )
}

export default Input
