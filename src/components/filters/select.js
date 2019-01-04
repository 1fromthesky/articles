import React from 'react';
import {connect} from 'react-redux';
import Select from 'react-select';
import PropTypes from 'prop-types';
import {selectArticlesAC} from "../../ac/index";


class Filters extends React.Component {
    static propTypes = {
        articles: PropTypes.array
    };

    constructor(props) {
        super(props);

        this.handleChange = (selectedOption) => {
            // this.setState({ selectedOption });
            this.props.dispatchSelectArticles(selectedOption);
        };
    }

    render() {
        const { selectedOption } = this.props;
        return (
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options = {this.props.selectOptions}
                closeMenuOnSelect={false}
                isMulti
            />
        );
    }
}

const mapStateToProps = (store) => {
    return {
        selectOptions: store.selectOptions,
        selectedOption: store.selectedOption
    }
};

export default connect(mapStateToProps, {
    dispatchSelectArticles: selectArticlesAC
    })(Filters);
