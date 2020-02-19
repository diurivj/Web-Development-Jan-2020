import React from 'react'
import styled from 'styled-components'

export const StyledCard = styled.section`
  width: 350px;
  border: 1px solid black;
  border-radius: 25px;
`

function Card(props) {
  return (
    <StyledCard>
      <h2>Soy el hijo</h2>
      {props.children}
    </StyledCard>
  )
}

export default Card
