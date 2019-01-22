import React, { Component } from 'react'
import UserForm from './user-form'
import Filters from './filters'
import Counter from './counter'
import CommentsRoute from '../routes/comments-page'
import { Route, Switch, Redirect } from 'react-router-dom'
import ArticleRoute from '../routes/articles'
import Menu, { MenuItem } from '../components/menu'
import { Provider as AuthProvider } from '../contexts/auth'

export default class App extends Component {
  state = {
    userName: ``
  }

  handleUserChange = (userName) => this.setState({ userName })

  render() {
    return (
      <AuthProvider value={{ userNameFromContext: this.state.userName }}>
        <div>
          <UserForm
            onChange={this.handleUserChange}
            value={this.state.userName}
          />

          <Menu>
            <MenuItem to="/counter">Counter</MenuItem>
            <MenuItem to="/filters">Filters</MenuItem>
            <MenuItem to="/articles">Articles</MenuItem>
            <MenuItem to="/comments/1">Comments</MenuItem>
          </Menu>

          <Switch>
            <Redirect exact from="/" to="/articles" />
            <Route path="/counter" exact component={Counter} strict />
            <Route path="/filtres" component={Filters} />
            <Route path="/articles/new" render={() => <h2>New article</h2>} />
            <Route path="/articles" component={ArticleRoute} />
            <Route path="/comments" component={CommentsRoute} />
            <Route path="/error" render={() => <h1>Error page</h1>} />
          </Switch>
        </div>
      </AuthProvider>
    )
  }
}
