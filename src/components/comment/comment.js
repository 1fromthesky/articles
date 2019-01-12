import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createCommentSelector } from '../../selectors/index'

class Comments extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    comment: PropTypes.shape({
      user: PropTypes.string,
      text: PropTypes.string
    })
  }

  render() {
    const { user, text } = this.props.comment
    return (
      <div>
        <h4>{user}</h4>
        <section>{text}</section>
      </div>
    )
  }
}

const initMapStateToProps = () => {
  const commentSelector = createCommentSelector()

  return (state, ownProps) => ({
    comment: commentSelector(state, ownProps)
  })
}

export default connect(initMapStateToProps)(Comments)
