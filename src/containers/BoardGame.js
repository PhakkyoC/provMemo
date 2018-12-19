import { connect } from 'react-redux'
import Board from '../components/Board'
import {
    getDeck,
} from '../Actions';

const mapDispatchToProps = dispatch => {
    return {
        onCardClick: id => {
            console.log(1);
        },
        getDeck: () =>{
            dispatch(getDeck)
        },
    }
}
const mapStateToProps = state => {
    return {
        cards: state.cards
    }
}
const BoardGame = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board);

export default BoardGame