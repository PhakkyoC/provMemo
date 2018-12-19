import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ onClick, flipped, text }) => (
    <li onClick={onClick}>
        {text}
    </li>
)

Card.propTypes = {
    onClick: PropTypes.func.isRequired,
    flipped: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Card