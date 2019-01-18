import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from '../comment/index'
import showOrHideElem from '../../decorators/show-or-hide-elem'
import PropTypes from 'prop-types'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import './style.css'
import CommentForm from '../comment-form'
import { loadComments } from '../../store/ac'
import {
  commentsLoadingSelector,
  commentsLoadedSelector
} from '../../selectors'
import Loader from '../common/loader'

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    isShow: PropTypes.bool.isRequired,
    toggleHideShow: PropTypes.func.isRequired
  }

  // static defaultProps = {
  //     comments: [],
  // };

  constructor(props) {
    super(props)

    this.onToggle = () => {
      this.props.toggleHideShow()
      if (!this.props.loaded) {
        this.props.loadComments(this.props.id)
      }
    }
  }

  get commentsBody() {
    const { isShow, id, loading, loaded } = this.props
    if (!isShow) return null

    if (loading) return <Loader />
    if (!loaded) return <Loader />

    const body = this.props.comments.map((commentId) => {
      return (
        <li key={commentId} className="test--comments-list__item">
          <Comment id={commentId} />
        </li>
      )
    })

    return (
      <div>
        <ul className="test--comments__body">{body}</ul>
        <CommentForm articleId={id} />
      </div>
    )
  }

  render() {
    const { isShow } = this.props
    const buttonTitle = isShow ? `Hide Comments` : `Show Comments`

    return (
      <div>
        <button onClick={this.onToggle} className={`test--comments__button`}>
          {buttonTitle}
        </button>

        <CSSTransitionGroup
          transitionName="comments"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {this.commentsBody}
        </CSSTransitionGroup>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loading: commentsLoadingSelector(state, ownProps),
    loaded: commentsLoadedSelector(state, ownProps)
  }
}

export default connect(
  mapStateToProps,
  {
    loadComments
  }
)(showOrHideElem(CommentList))
