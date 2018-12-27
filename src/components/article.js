import React from 'react';
import CommentList from './comment-list';
import PropTypes from 'prop-types';

export default class Article extends React.PureComponent {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string,
            text: PropTypes.string,
            comments: PropTypes.array
        }),
        isOpen: PropTypes.bool.isRequired,
        toggleOpenClose: PropTypes.func.isRequired
    };

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
