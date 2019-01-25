import React, { Component } from 'react'
import { Consumer } from './context'
import { dictionary } from './dictionaries'

export default (OriginalComponent) =>
  class DecoratedComponent extends Component {
    createTranslate = (value) => {
      return dictionary[value.language]
    }

    render() {
      return (
        <Consumer>
          {(value) => {
            return (
              <OriginalComponent
                {...this.props}
                local={this.createTranslate(value)}
              />
            )
          }}
        </Consumer>
      )
    }
  }
