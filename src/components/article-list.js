import React, {Component} from 'react';
import Article from './article';

export default class ArticleList extends Component {
    get articles() {
        return this.props.items.map(item => {
            return <li key={item.id}>
                <Article article = {item}/>
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
};
