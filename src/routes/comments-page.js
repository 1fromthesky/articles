import React, { Component } from 'react'
import CommentsPagination from '../components/comments-pagination'
import { Route, Redirect } from 'react-router-dom'

class CommentsRoute extends Component {
  commentsPage = ({ match }) => {
    return (
      <CommentsPagination key={match.params.page} page={match.params.page} />
    )
  }

  render() {
    const { match } = this.props
    if (match.isExact) {
      return <Redirect to="/comments/1" />
    }
    return (
      <div>
        <Route path="/comments/:page" render={this.commentsPage} />
      </div>
    )
  }
}

export default CommentsRoute
