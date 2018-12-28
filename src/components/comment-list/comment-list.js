import React from 'react';
import Comment from '../comment/index';
import showOrHideElem from '../../decorators/show-or-hide-elem';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './style.css';

class CommentList extends React.Component {
    static propTypes = {
        comments: PropTypes.array.isRequired,
        isShow: PropTypes.bool.isRequired,
        toggleHideShow: PropTypes.func.isRequired
    };

    // static defaultProps = {
    //     comments: [],
    // };

    constructor(props) {
        super(props);

        this.onToggle = () => {
            this.props.toggleHideShow();
        }
    }

    get commentsBody() {
        const {isShow} = this.props;
        if (!isShow) return null;

        const body = this.props.comments.map(item => {
            return (
                <li key={item.id}>
                    <Comment
                        {...item}
                    />
                </li>
            );
        });

        return <ul>{body}</ul>;
    };

    render() {
        const {isShow} = this.props;
        const buttonTitle = isShow ? `Hide Comments` : `Show Comments`;

        return (
            <div>
                <button onClick = {this.onToggle}>
                    {buttonTitle}
                </button>
                <CSSTransitionGroup
                    transitionName="comments"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >
                    {this.commentsBody}
                </CSSTransitionGroup>
            </div>
        );
    }
}

export default showOrHideElem(CommentList);
