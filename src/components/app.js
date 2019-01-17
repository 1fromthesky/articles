import React, { Component } from 'react'
import UserForm from './user-form'
import Filters from './filters'
import Counter from './counter'
import { Route, NavLink } from 'react-router-dom'
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
        </div>
        <Route path="/counter" component={Counter} />
        <Route path="/filtres" component={Filters} />
        <Route path="/articles" component={ArticleRoute} />
      </div>
    )
  }
}
