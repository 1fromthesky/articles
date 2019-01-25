import React, { Component } from 'react'
import UserForm from './user-form'
import Filters from './filters'
import Counter from './counter'
import CommentsRoute from '../routes/comments-page'
import { Route, Switch, Redirect } from 'react-router-dom'
import ArticleRoute from '../routes/articles'
import Menu, { MenuItem } from '../components/menu'
import { Provider as AuthProvider } from '../contexts/auth'
import { Provider as LocalProvider } from './localization/context'
import { LOACALIZATION } from '../constants'

export default class App extends Component {
  state = {
    userName: ``,
    language: LOACALIZATION.ENG
  }

  handleUserChange = (userName) => this.setState({ userName })

  handleChangeLocalization = () => {
    if (this.state.language === LOACALIZATION.ENG) {
      this.setState({ language: LOACALIZATION.RUS })
    } else {
      this.setState({ language: LOACALIZATION.ENG })
    }
  }

  render() {
    return (
      <AuthProvider
        value={{
          userNameFromContext: this.state.userName
        }}
      >
        <LocalProvider value={{ language: this.state.language }}>
          <button onClick={this.handleChangeLocalization}>
            Change Language
          </button>
          <div>
            <UserForm
              onChange={this.handleUserChange}
              value={this.state.userName}
            />

            <Menu>
              <MenuItem to="/counter">Counter</MenuItem>
              <MenuItem to="/filtres">Filters</MenuItem>
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
        </LocalProvider>
      </AuthProvider>
    )
  }
}
