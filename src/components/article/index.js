import React from 'react';
import CommentList from '../comment-list';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './style.css';

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
            <section key={article.id} className="test--article__body">
                {article.text}
                {this.state.error ? null : <CommentList comments = {article.comments}/>}
            </section>
        );
    }

    render() {
        const {article, isOpen} = this.props;
        const buttonTitle = isOpen ? `open` : `close`;
        return (
            <div>
                <h3>{article.title}</h3>
                <button
                    onClick={this.onToggle}
                    className = {`test--article__button`}
                >
                    {buttonTitle}
                </button>
                <CSSTransitionGroup
                    transitionName="article"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                    >
                    {this.articleBody}
                </CSSTransitionGroup>

            </div>
        );
    }

    componentDidCatch(error) {
        this.setState({error});
    }
};
