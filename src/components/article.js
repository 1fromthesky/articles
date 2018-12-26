import React from 'react';
import CommentList from './comment-list';

export default class Article extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
        };

        this.onToggle = () => {
            this.props.toggleOpenClose(this.props.article.id);
        };
    }

    get articleBody() {
        const {article, isOpen} = this.props;
        if (!isOpen) return null;
        return (
            <>
                <section>{article.text}</section>
            {this.state.error ? null : <CommentList comments = {article.comments}/>}
            </>
        );
    }

    render() {
        const {article, isOpen} = this.props;
        const buttonTitle = isOpen ? `open` : `close`;
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={this.onToggle}>
                    {buttonTitle}
                </button>
                {this.articleBody}
            </div>
        );
    }

    componentDidCatch(error) {
        this.setState({error});
    }
};
