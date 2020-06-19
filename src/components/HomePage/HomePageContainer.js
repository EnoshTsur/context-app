import { compose, } from 'redux'
import { connect, } from 'react-redux';
import HomePage from './HomePage'
import { setUser, } from '../../redux/actions'

function mapStateToProps(state) {
    return {
        user: state.userReducer.user
    }
}

function mapDispatchToProps(dispatch) {
    return { 
        setUser: user => dispatch(setUser(user))
    }
}

const Container = compose(
    connect(
        mapStateToProps, 
        mapDispatchToProps
   )
)(HomePage)

export default Container