import React, {Component} from 'react';

export default class Article extends Component {
    get articleBody() {
        const {article, isOpen} = this.props;
        if (!isOpen) return null;
        return <section>{article.text}</section>;
    }

    render() {
        const {article, isOpen, onToggleOpen} = this.props;
        const buttonTitle = isOpen ? `open` : `close`;
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={onToggleOpen}>
                    {buttonTitle}
                </button>
                {this.articleBody}
            </div>
        );
    }
};
