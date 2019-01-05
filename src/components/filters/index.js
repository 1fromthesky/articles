import React from 'react';
import Select from './select';
import DateRange from './date-range';
import PropTypes from 'prop-types';

class Filters extends React.Component {
    static propTypes = {
        articles: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            date: PropTypes.string,
            text: PropTypes.string,
            comments: PropTypes.array
        }))
    };

    render() {
        return (
            <div>
                <Select/>
                <DateRange/>
            </div>
        )
    }
}

export default Filters;
