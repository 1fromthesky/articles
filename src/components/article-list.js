import React from 'react';
import Article from './article';
import accordion from '../decorators/accordion';

class ArticleList extends React.Component {
    get articles() {
        return this.props.items.map(item => {
            return <li key={item.id}>
                <Article
                    article = {item}
                    isOpen = {this.props.openItemId === item.id}
                    toggleOpenClose = {this.props.toggleOpenCloseItem}
                />
            </li>;
        });
    }

    render() {
        return (
            <ul>
                {this.articles}
            </ul>
        );
    }
}

export default accordion(ArticleList);