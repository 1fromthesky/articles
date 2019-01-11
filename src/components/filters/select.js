import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeSelectionAC } from '../../store/ac'
import {filtersSelector, articleListSelector} from "../../selectors/index";

class SelectFilter extends Component {
    render() {
        return (
            <Select
                options={this.optionsForSelect}
                onChange={this.handleSelectChange}
                value={this.props.selected}
                isMulti
            />
        )
    }

    get optionsForSelect() {
        return this.props.articles.map((item) => ({
            value: item.id,
            label: item.title
        }))
    }

    handleSelectChange = (selectedOptions) => {
        this.props.changeSelection(selectedOptions)
    }
}

export default connect(
    (state) => ({
        selected: filtersSelector(state).selected,
        articles: articleListSelector(state)
    }),
    { changeSelection: changeSelectionAC }
)(SelectFilter)

