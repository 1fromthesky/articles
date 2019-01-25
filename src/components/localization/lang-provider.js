import React, { Component } from 'react'
import { Consumer } from './context'
import { ru, en } from './dictionaries'

export default (OriginalComponent) =>
  class DecoratedComponent extends Component {
    render() {
      return (
        <Consumer>
          {(value) => {
            return <OriginalComponent {...this.props} local={ru} />
          }}
        </Consumer>
      )
    }
  }
