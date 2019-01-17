import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import CommentList from '../comment-list/comment-list'
import PropTypes from 'prop-types'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import './style.css'
import { deleteArticleAC, loadArticle } from '../../store/ac'
import { articleSelector } from '../../selectors'
import Loader from '../common/loader'

class Article extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    article: PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      comments: PropTypes.array
    }),
    isOpen: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      error: null
    }

    this.onDeleteArticle = () => {
      this.props.dispatchDeleteArticle(this.props.article.id)
    }

    this.onToggle = () => {
      this.props.toggleOpenClose(this.props.article.id)
    }
  }

  get articleBody() {
    const { article, isOpen } = this.props

    if (!isOpen) return null

    if (this.props.article.loading) return <Loader />

    return (
      <section key={article.id} className="test--article__body">
        {article.text}
        {this.state.error ? null : (
          <CommentList comments={article.comments} id={article.id} />
        )}
      </section>
    )
  }

  render() {
    const { article, isOpen } = this.props
    const buttonTitle = isOpen ? `close` : `open`

    if (!article) return null

    return (
      <div>
        <h3>{article.title}</h3>

        <button onClick={this.onToggle} className={`test--article__button`}>
          {buttonTitle}
        </button>

        <button
          onClick={this.onDeleteArticle}
          className={`test--article-delete__button`}
        >
          Delete me
        </button>

        <CSSTransitionGroup
          transitionName="article"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {this.articleBody}
        </CSSTransitionGroup>
      </div>
    )
  }

  componentDidMount() {
    const { loadArticle, id, article } = this.props
    if (!article || (!article.loading && !article.text)) {
      loadArticle(id)
    }
  }

  componentDidCatch(error) {
    this.setState({ error })
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    article: articleSelector(state, ownProps)
  }
}

export default connect(
  mapStateToProps,
  { dispatchDeleteArticle: deleteArticleAC, loadArticle }
)(Article)
