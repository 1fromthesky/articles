import React from 'react';
import Article from './article';
import accordion from '../decorators/accordion';

export class ArticleList extends React.Component {
    get items() {
        return this.props.articles.map(item => {
            return <li key={item.id} className="test--article-list__item">
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
                {this.items}
            </ul>
        );
    }
}

export default accordion(ArticleList);