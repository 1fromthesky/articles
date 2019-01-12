import React from 'react'
import { connect } from 'react-redux'
import Article from '../article/index'
import Loader from '../common/loader'
import accordion from '../../decorators/accordion'
import PropTypes from 'prop-types'
import {
  filteredArticleSelector,
  articleLoadingSelector
} from '../../selectors'
import { loadArticlesAC } from '../../store/ac'

export class ArticleList extends React.Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    fetchData: PropTypes.func,

    //from accordion decorator
    openItemId: PropTypes.string,
    toggleOpenCloseItem: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetchData && this.props.fetchData()
  }

  get items() {
    return this.props.articles.map((article) => {
      return (
        <li key={article.id} className="test--article-list__item">
          <Article
            article={article}
            isOpen={this.props.openItemId === article.id}
            toggleOpenClose={this.props.toggleOpenCloseItem}
          />
        </li>
      )
    })
  }

  render() {
    if (this.props.loading) return <Loader />

    return <ul>{this.items}</ul>
  }
}

const mapStateToProps = (state) => {
  return {
    articles: filteredArticleSelector(state),
    loading: articleLoadingSelector(state)
  }
}

export default connect(
  mapStateToProps,
  {
    fetchData: loadArticlesAC
  }
)(accordion(ArticleList))
