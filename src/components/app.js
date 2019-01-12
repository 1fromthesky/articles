import React from 'react'
import ArticleList from './article-list'
import UserForm from './user-form'
import Filters from './filters'
import Counter from './counter'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <UserForm />
        <Counter />
        <Filters />
        <ArticleList />
      </div>
    )
  }
}
