import React from 'react';
import Select from 'react-select';

export default class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
        };

        this.handleChange = (selectedOption) => {
            this.setState({ selectedOption });
            console.log(`Option selected:`, selectedOption);
        };
    }

    get selectOptions() {
        return this.props.articles.map((item) => {
            return {
                value: item.id,
                label: item.title
            };
        })
    }

    render() {
        const { selectedOption } = this.state;

        return (
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options = {this.selectOptions}
                closeMenuOnSelect={false}
                isMulti
            />
        );
    }
}