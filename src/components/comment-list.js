import React from 'react';
import Comment from './comment';
import showOrHideElem from '../decorators/show-or-hide-elem';

class CommentList extends React.Component {
    static defaultProps = {
        comments:[]
    };

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
    }

    render() {
        const {isShow} = this.props;
        const buttonTitle = isShow ? `Hide Comments` : `Show Comments`;

        return (
            <div>
                <button onClick = {this.onToggle}>
                    {buttonTitle}
                </button>
                {this.commentsBody}
            </div>
        );
    }
}

export default showOrHideElem(CommentList);
