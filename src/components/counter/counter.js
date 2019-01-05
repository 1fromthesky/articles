import React from 'react';
import {connect} from 'react-redux';
import {incrementAC} from '../../store/ac'

class Counter extends React.Component {
    onClick = () => {
        this.props.increment();
    };

    render() {
        return (
            <div>
                <h1>{this.props.count}</h1>
                <button onClick={this.onClick}>Increase</button>
            </div>
        )
    }
}

const mapStateProps = (state) => {
    return {
        count: state.count
    }
};

const mapDispatchToProps = {
    increment: incrementAC
};
    export default connect(mapStateProps, mapDispatchToProps)(Counter);
