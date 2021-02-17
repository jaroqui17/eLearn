import React from 'react';
import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter, } from './redux/actions';
import store from './redux/store';



const ReduxApp = (props) => {

    const increase = () => {
        props.increaseCounter();
    };
    
    const decrease = () => {
        props.decreaseCounter();
    };

    return(
        <div className='ReduxApp'>
            <div>Count: {props.count}</div>
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        count: state.test.count,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increaseCounter: () => dispatch(increaseCounter()),
        decreaseCounter: () => dispatch(decreaseCounter()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxApp)