import React from 'react'
import propTypes from 'prop-types'

// React functional component
const Card = ({ image, name, description }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  )
}

Card.proptypes = {
  name: propTypes.string,
  image: propTypes.string,
  description: propTypes.string
}

export default Card
