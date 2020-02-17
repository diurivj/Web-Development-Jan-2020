import React from 'react'

function Counter({ counter, increment, decrement, bgColor }) {
  return (
    <section
      style={{
        width: '100%',
        height: '33%',
        backgroundColor: bgColor || 'white'
      }}
    >
      <h2>Counter:</h2>
      <h3>{counter}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </section>
  )
}

export default Counter
