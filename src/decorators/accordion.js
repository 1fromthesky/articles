import React from 'react';

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            openItemId: null,
        };

        this.toggleOpenCloseItem = (openItemId) => {
            this.setState({
                openItemId: openItemId === this.state.openItemId ? null : openItemId
            });
        };
    }

    render() {
        return (
          <OriginalComponent
              {...this.props}
              openItemId = {this.state.openItemId}
              toggleOpenCloseItem = {this.toggleOpenCloseItem}
          />
        );
    }
};
