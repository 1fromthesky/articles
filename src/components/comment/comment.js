import React from 'react';
import PropTypes from 'prop-types';

export default class Comments extends React.PureComponent {
    static propTypes = {
        comment: PropTypes.shape({
            id: PropTypes.string,
            user: PropTypes.string,
            text: PropTypes.string
        }),
    };

    render() {
        const {user, text} = this.props;
        return (
            <div>
                <h4>{user}</h4>
                <section>{text}</section>
            </div>
        );
    }
}