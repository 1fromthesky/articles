import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCommentAC } from '../../store/ac';
import './style.css';

const limits = {
  user: {
    min: 3,
    max: 10
  },
  text: {
    min: 3,
    max: 50
  }
}

class CommentForm extends Component {
  static propTypes = {}

  state = {
    user: '',
    text: ''
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.addComment(this.state)
    this.setState({
      user: '',
      text: ''
    })
  }

  isValidForm = () => ['user', 'text'].every(this.isValidField)
  isValidField = (type) => this.state[type].length >= limits[type].min
  getClassName = (type) => (this.isValidField(type) ? '' : 'form-input__error')

  handleChange = (type) => (ev) => {
    const { value } = ev.target
    if (value.length > limits[type].max) return
    this.setState({
      [type]: value
    })
  }

  render() {
    return (

      <form onSubmit={this.handleSubmit}>
      <div>
        user:
        </div>
        <input
          value={this.state.user}
          onChange={this.handleChange('user')}
          className={this.getClassName('user')}
        />

        <div>
        comment:{' '}
        </div>
        <div>
        <textarea
          value={this.state.text}
          onChange={this.handleChange('text')}
          className={this.getClassName('text')}
        />
        </div>
        <input type="submit" value="submit" disabled={!this.isValidForm()} />
      </form>
    )
  }
}



export default connect(
  null,
  (dispatch, ownProps) => ({
    addComment: (comment) => dispatch(addCommentAC(comment, ownProps.articleId))
  })
)(CommentForm);
