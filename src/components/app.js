import React from 'react';
import ArticleList from './article-list';
import articles from '../fixtures';
import UserForm from './user-form';
import Filters from './filters'


export default class App extends React.Component {
    render() {
        return (
            <div>
                <UserForm/>
                <Filters
                    articles = {articles}
                />
                <ArticleList
                    items = {articles}
                />
            </div>
        );
    }
};
