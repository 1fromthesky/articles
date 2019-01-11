import React from 'react';
import {connect} from 'react-redux';
import Article from '../article/index';
import accordion from '../../decorators/accordion';
import PropTypes from 'prop-types';
import {filteredArticleSelector} from "../../selectors/index";


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
        return this.props.articles.map(article => {
            return <li key={article.id} className="test--article-list__item">
                <Article
                    article = {article}
                    isOpen = {this.props.openItemId === article.id}
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
        articles: filteredArticleSelector(state)
    }
};

export default connect(
    mapStateToProps
    )(accordion(ArticleList));
