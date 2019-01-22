import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import store from './store'
import { Provider } from 'react-redux'
// import { BrowserRouter } from 'react-router-dom'
import history from './history'
import { ConnectedRouter } from 'connected-react-router'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
