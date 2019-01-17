import React, { Component } from 'react'
import ArticleList from '../components/article-list'
import { Route } from 'react-router-dom'
import Article from '../components/article'

class ArticlesRoute extends Component {
  getArticle = ({ match }) => {
    const { id } = match.params
    return <Article id={id} isOpen />
  }

  render() {
    return (
      <div>
        <ArticleList />
        <Route path="/articles/:id" render={this.getArticle} />
      </div>
    )
  }
}

export default ArticlesRoute
