import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCommentAC } from '../../store/ac';

class CommentForm extends Component {
  onCreateComment = (event) => {
    const elemForm = event.target.elements;
    event.preventDefault();

    if (!elemForm.user.value.trim() || !elemForm.text.value.trim()) {
      alert(`New comment is wrong. Check your comment`);
      return;
    }
    
    const newComment = {
      user: elemForm.user.value,
      text: elemForm.text.value
    }

    this.props.createComment(newComment, this.props.articleId);
    elemForm.user.value = ``;
    elemForm.text.value = ``;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onCreateComment}>
          <div>          
            Name:
            <input
              name="user"
            />
          </div>
          <div>    
            Text:
            ​<textarea 
              name="text"
              rows="5" 
              cols="50"
              />
          </div>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}



export default connect(
null, {createComment: createCommentAC}
)(CommentForm);
