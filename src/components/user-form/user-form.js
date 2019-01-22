import React from 'react'

export default class UserForm extends React.Component {
  constructor(props) {
    super(props)

    this.onChangeName = (event) => {
      this.props.onChange(event.target.value)
    }
  }

  render() {
    return (
      <form>
        user name:
        <input value={this.props.value} onChange={this.onChangeName} />
      </form>
    )
  }
}
