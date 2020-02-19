import React from 'react'
import styled from 'styled-components'

const StyledRow = styled.span`
  @import url('https://fonts.googleapis.com/css?family=Mansalva&display=swap');
  font-family: 'Mansalva', cursive;
  font-size: 1.5rem;
  width: 100%;
  height: 25%;
  color: #313131;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-style: oblique;
  & > * {
    margin: 5px 0;
  }
`

function Row(props) {
  return (
    <StyledRow>
      <h2>{props.label}</h2>
      {props.children}
    </StyledRow>
  )
}

export default Row
