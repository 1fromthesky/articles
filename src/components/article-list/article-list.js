import React from 'react';
import {connect} from 'react-redux';
import Article from '../article/index';
import accordion from '../../decorators/accordion';
import PropTypes from 'prop-types';
import {filterArticleSelector} from "../../selectors/index";


export class ArticleList extends React.Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
        // articles: PropTypes.arrayOf(PropTypes.shape({
        //     id: PropTypes.string,
        //     title: PropTypes.string,
        //     date: PropTypes.string,
        //     text: PropTypes.string,
        //     comments: PropTypes.array
        // }))
    };

    get items() {
        return this.props.articles.map(articleId => {
            return <li key={articleId} className="test--article-list__item">
                <Article
                    id = {articleId}
                    isOpen = {this.props.openItemId === articleId}
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
    return {
        articles: filterArticleSelector(state)
    }
};

export default connect(
    mapStateToProps
    )(accordion(ArticleList));
