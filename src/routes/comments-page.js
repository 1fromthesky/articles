import React, { Component } from 'react'
import CommentsPage from '../components/comments-pagination'
import { Route } from 'react-router-dom'
import Comments from '../components/comment'

class ArticlesRoute extends Component {
  render() {
    return (
      <div>
        <Route
          path="/comments"
          exact
          render={() => <h2>Please select a page of comments</h2>}
        />
      </div>
    )
  }
}

export default ArticlesRoute
