import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './style.css'
class Counter extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        const {total } = this.props;
        return (
            <div>
                <div className="obj">
                    <button type="button" onClick={() => this.props.dispatch({ type: 'DECREMENT'})} >-</button>
                    <h5>{total}</h5>
                    <button type="button" onClick={() =>this.props.dispatch({ type: 'INCREMENT'})}>+</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({counterReducer: {total}}) => {
return { total}
}

export default connect(mapStateToProps)(Counter);



