import React, {Component} from 'react';
import Article from './article';

export default class ArticleList extends Component {
    constructor(props){
        super(props);
        this.state = {
            openArticleId: null,
        }
    }
    get articles() {
        return this.props.items.map(item => {
            return <li key={item.id}>
                <Article
                    article = {item}
                    isOpen = {this.state.openArticleId === item.id}
                    onToggleOpen = {this.toggleOpenArticleId(item.id)}
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

    toggleOpenArticleId(openArticleId) {
        return () => {
            this.setState({openArticleId})
        }
    }
};
