import React from 'react';

export default class Comments extends React.PureComponent {
    render() {
        const {user, text} = this.props;
        return (
          <div>
              <h4>{user}</h4>
              <section>{text}</section>
          </div>
        );
    }
}
