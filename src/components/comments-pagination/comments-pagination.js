import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Comment from '../comment/index'
import Loader from '../common/loader'
import { loadCommentsPage } from '../../store/ac'
import {
  getPageCommentsId,
  getPageCommentsLoading,
  getPageCommentsLoaded
} from '../../selectors'

class CommentsPagination extends Component {
  static propTypes = {
    page: PropTypes.string.isRequired
  }

  get commentsBody() {
    const { comments, loading, loaded } = this.props
    console.log(this.props)
    if (loading) return <Loader />
    if (!loaded) return <Loader />

    const body = comments.map((commentId) => {
      return (
        <li key={commentId}>
          <Comment id={commentId} />
        </li>
      )
    })

    return <ul>{body}</ul>
  }

  render() {
    // if (!this.props.comments) return null
    return this.commentsBody
  }

  componentDidMount() {
    const { page } = this.props
    if (Number.isInteger(+page)) {
      this.props.loadCommentsPage(page)
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    comments: getPageCommentsId(state, ownProps),
    loading: getPageCommentsLoading(state),
    loaded: getPageCommentsLoaded(state)
  }
}

export default connect(
  mapStateToProps,
  { loadCommentsPage }
)(CommentsPagination)
