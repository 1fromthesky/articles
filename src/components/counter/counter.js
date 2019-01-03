import React from 'react';
import {connect} from 'react-redux';

class Counter extends React.Component {
    onClick = () => {
        this.props.dispatch({
           type: `INCREMENT`
        });
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


export default connect(mapStateProps)(Counter);
