import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Comment from '../comment/index'
import Loader from '../common/loader'

class CommentsPagination extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired
  }
  render() {
    return <div>CommentsPage</div>
  }
}

export default connect()(CommentsPagination)
