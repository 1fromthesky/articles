import React, { Component } from 'react'
import CommentsPagination from '../components/comments-pagination'
import { Route } from 'react-router-dom'

class CommentsRoute extends Component {
  commentsPage = ({ match }) => {
    return (
      <CommentsPagination key={match.params.page} page={match.params.page} />
    )
  }

  render() {
    return (
      <div>
        <Route path="/comments/:page" render={this.commentsPage} />
      </div>
    )
  }
}

export default CommentsRoute
