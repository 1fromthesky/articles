import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {commentSelector} from "../../selectors/index";

 class Comments extends React.PureComponent {
    static propTypes = {
        id: PropTypes.string.isRequired,
        comment: PropTypes.shape({
            user: PropTypes.string,
            text: PropTypes.string
        }),
    };

    render() {
        const {user, text} = this.props.comment;
        return (
            <div>
                <h4>{user}</h4>
                <section>{text}</section>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        comment: commentSelector(state, ownProps)
    }
};

export default connect(mapStateToProps)(Comments);
