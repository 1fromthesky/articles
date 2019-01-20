import React, { Component } from 'react'
import UserForm from './user-form'
import Filters from './filters'
import Counter from './counter'
import CommentsRoute from '../routes/comments-page'
import { Route, NavLink, Switch } from 'react-router-dom'
import ArticleRoute from '../routes/articles'

export default class App extends Component {
  render() {
    return (
      <div>
        <UserForm />
        <div>
          <div>
            <NavLink to="/counter" activeStyle={{ color: `red` }}>
              Counter
            </NavLink>
          </div>
          <div>
            <NavLink to="/filtres" activeStyle={{ color: `red` }}>
              Filtres
            </NavLink>
          </div>
          <div>
            <NavLink to="/articles" activeStyle={{ color: `red` }}>
              Articles
            </NavLink>
          </div>
          <div>
            <NavLink to="/comments/1" activeStyle={{ color: `red` }}>
              Comments
            </NavLink>
          </div>
        </div>
        <Switch>
          <Route path="/counter" exact component={Counter} />
          <Route path="/filtres" component={Filters} />
          <Route path="/articles/new" render={() => <h2>New article</h2>} />
          <Route path="/articles" component={ArticleRoute} />
          <Route path="/comments/1" component={CommentsRoute} />
        </Switch>
      </div>
    )
  }
}
