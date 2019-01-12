import React from 'react'

export default (OriginalComponent) =>
  class DecoratedComponent extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        isShow: false
      }

      this.toggleHideShow = () => {
        this.setState({ isShow: !this.state.isShow })
      }
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          isShow={this.state.isShow}
          toggleHideShow={this.toggleHideShow}
        />
      )
    }
  }
