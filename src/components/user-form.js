import React from 'react';

export default class Article extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userName: ``,
        };

        this.onChangeName = (event) => {
          this.setState({userName: event.target.value});
        };
    }

    render() {
        return (
            <form>
                user name:
                <input
                    value = {this.state.userName}
                    onChange = {this.onChangeName}
                 />
            </form>
        )
    }
}
