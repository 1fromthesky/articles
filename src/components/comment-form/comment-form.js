import React, { Component } from 'react';

class CommentForm extends Component {
  render() {
    return (
      <div>
        <form>
          <div>          
            Name:
            <input
              name="name"
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

export default CommentForm;

