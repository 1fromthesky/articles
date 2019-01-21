import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Comment from '../comment/index'
import Loader from '../common/loader'
import { loadCommentsPage } from '../../store/ac'
import {
  getPageCommentsId,
  getPageCommentsLoading,
  getPageCommentsTotal
} from '../../selectors'
import { NavLink, Redirect } from 'react-router-dom'

class CommentsPagination extends Component {
  static propTypes = {
    page: PropTypes.string.isRequired
  }

  get commentsBody() {
    const { comments, loading } = this.props

    if (loading) return <Loader />
    if (!comments) return null

    const body = comments.map((commentId) => {
      return (
        <li key={commentId}>
          <Comment id={commentId} />
        </li>
      )
    })

    return <ul>{body}</ul>
  }

  get pages() {
    const { total, page } = this.props

    if (!total) return null
    if (page > total / 5)
      return <Redirect to={`/comments/${Math.floor(total / 5) + 1}`} />

    const pagesList = []
    for (let i = 0; i <= total / 5; i++) {
      const NumPage = i + 1
      pagesList.push(
        <span key={i}>
          <NavLink
            key={i}
            to={`/comments/${NumPage}`}
            activeStyle={{ color: `red` }}
          >
            page {NumPage}
          </NavLink>
          <span key={`s` + i}> </span>
        </span>
      )
    }
    return pagesList
  }

  render() {
    return (
      <div>
        {this.commentsBody}
        {this.pages}
      </div>
    )
  }

  componentDidMount() {
    const { page, comments, loading } = this.props
    if (Number.isInteger(+page) && !comments && !loading) {
      this.props.loadCommentsPage(page)
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    comments: getPageCommentsId(state, ownProps),
    loading: getPageCommentsLoading(state, ownProps),
    total: getPageCommentsTotal(state)
  }
}

export default connect(
  mapStateToProps,
  { loadCommentsPage }
)(CommentsPagination)
