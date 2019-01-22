import React from 'react'
import MenuItem from './menu-item'

export default class Menu extends React.Component {
  render() {
    return (
      <div>
        <h2>Main menu</h2>
        {this.props.children}
      </div>
    )
  }
}

export { MenuItem }
