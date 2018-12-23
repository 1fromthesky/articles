import React from 'react';

export default class Article extends React.PureComponent {
    constructor(props) {
        super(props);

        this.onToggle = () => {
            this.props.toggleOpenClose(this.props.article.id);
        };
    }

    get articleBody() {
        const {article, isOpen} = this.props;
        if (!isOpen) return null;
        return <section>{article.text}</section>;
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
};
