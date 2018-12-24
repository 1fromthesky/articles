import React from 'react';
import Comment from './comment';

export default class ComentList extends React.Component {
    get commentsBody() {
        return this.props.comments.map(item => {
            return (
                <li key={item.id}>
                    <Comment
                        {...item}
                    />
                </li>
            );
        });
    }

    render() {
        return (
            <ul>
                {this.commentsBody}
            </ul>
        );
    }
}