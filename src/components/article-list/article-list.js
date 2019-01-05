import React from 'react';
import {connect} from 'react-redux';
import Article from '../article/index';
import accordion from '../../decorators/accordion';
import PropTypes from 'prop-types';

export class ArticleList extends React.Component {
    static propTypes = {
        articles: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            date: PropTypes.string,
            text: PropTypes.string,
            comments: PropTypes.array
        }))
    };

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

const mapStateToProps = (state) => {
    const {
        selected,
        dateRange: { from, to }
    } = state.filters;

    const filteredArticles = state.articles.filter((article) => {
        const published = Date.parse(article.date);

        return (
            (!selected.length ||
                selected.find((selected) => selected.value === article.id)) &&
            (!from || !to || (published > from && published < to))
        )
    });

    return {
        articles: filteredArticles
    }
};

export default connect(
    mapStateToProps
    )(accordion(ArticleList));
