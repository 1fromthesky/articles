import React from 'react'
import { connect } from 'react-redux'
import Loader from '../common/loader'
import accordion from '../../decorators/accordion'
import PropTypes from 'prop-types'
import {
  filteredArticleSelector,
  articlesLoadingSelector,
  articlesLoadedSelector
} from '../../selectors'
import { loadAllArticlesAC } from '../../store/ac'
import { NavLink } from 'react-router-dom'

export class ArticleList extends React.Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    fetchData: PropTypes.func,

    //from accordion decorator
    openItemId: PropTypes.string,
    toggleOpenCloseItem: PropTypes.func.isRequired
  }

  get items() {
    return this.props.articles.map((article) => {
      return (
        <li key={article.id} className="test--article-list__item">
          {/* <Article
            article={article}
            isOpen={this.props.openItemId === article.id}
            toggleOpenClose={this.props.toggleOpenCloseItem}
          /> */}

          <NavLink
            activeStyle={{ color: `red` }}
            to={`/articles/${article.id}`}
          >
            {article.title}
          </NavLink>
        </li>
      )
    })
  }

  render() {
    if (this.props.loading) return <Loader />

    return <ul>{this.items}</ul>
  }

  componentDidMount() {
    !this.props.loaded && this.props.fetchData && this.props.fetchData()
  }
}

const mapStateToProps = (state) => {
  return {
    articles: filteredArticleSelector(state),
    loading: articlesLoadingSelector(state),
    loaded: articlesLoadedSelector(state)
  }
}

export default connect(
  mapStateToProps,
  {
    fetchData: loadAllArticlesAC
  }
)(accordion(ArticleList))
