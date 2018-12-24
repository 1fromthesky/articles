import React, {Component} from 'react';
import ArticleList from './article-list';
import articles from '../fixtures';
import UserForm from './user-form';
import Select from 'react-select';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default class App extends Component {
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
        return articles.map((item) => {
            return {
                value: item.id,
                label: item.title
            };
        })
    }

    render() {
        const { selectedOption } = this.state;

        return (
            <div>
                <DayPicker
                    showOutsideDays
                    todayButton="Go to Today"
                />
                <UserForm/>
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options = {this.selectOptions}
                    closeMenuOnSelect={false}
                    isMulti
                />
                <ArticleList
                    items = {articles}
                />
            </div>
        );
    }
};
