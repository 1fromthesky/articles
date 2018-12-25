import React from 'react';
import Select from './select';
import DateRange from './date-range';

export default class Filters extends React.Component {
    render() {
        return (
            <div>
                <Select articles={this.props.articles} />
                <DateRange />
            </div>
        )
    }
}
