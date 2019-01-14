import React from 'react'
import { connect } from 'react-redux'
import Comment from '../comment/index'
import showOrHideElem from '../../decorators/show-or-hide-elem'
import PropTypes from 'prop-types'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import './style.css'
import CommentForm from '../comment-form'
import {
  loadAllComments,
  commentsLoadingSelector,
  commentsLoadedSelector
} from '../../store/ac'

class CommentList extends React.Component {
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
    }
  }

  get commentsBody() {
    const { isShow } = this.props
    if (!isShow) return null

    const body = this.props.comments.map((commentId) => {
      return (
        <li key={commentId} className="test--comments-list__item">
          <Comment id={commentId} />
        </li>
      )
    })

    return <ul className="test--comments__body">{body}</ul>
  }

  render() {
    const { isShow, articleId } = this.props
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

          <CommentForm articleId={articleId} />
        </CSSTransitionGroup>
      </div>
    )
  }

  componentDidMount() {
    this.props.loadAllComments()
  }
}

const mapStateToProps = (state) => {
  return {
    loading: commentsLoadingSelector(state),
    loaded: commentsLoadedSelector(state)
  }
}

export default connect(
  mapStateToProps,
  {
    loadAllComments
  }
)(showOrHideElem(CommentList))
