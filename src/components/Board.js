import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

class Board extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { cards, onCardClick } = this.props;
        return(
            <ul>{cards.map((card, index) => (
                    <Card key={index} {...card} onClick={() => onCardClick(index)} />
                ))}
            </ul>
        )
    }
}
Board.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            value: PropTypes.string.isRequired,
            code : PropTypes.string.isRequired,
            image : PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    onCardClick: PropTypes.func.isRequired,
}

export default Board