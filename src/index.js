import React from 'react'
import ReactDOM from 'react-dom'

import * as firebase from 'firebase/app'

import 'firebase/auth'

import 'firebase/database'
import 'firebase/firestore'

import App from './common/App'

// Render your app
if (typeof document !== 'undefined') {
  const renderMethod = module.hot
    ? ReactDOM.render
    : ReactDOM.hydrate || ReactDOM.render

  const render = Comp => {
    renderMethod(<Comp />, document.getElementById('root'))
  }

  // Render!
  render(App)

  // Hot Module Replacement
  if (module.hot) {
    module.hot.accept('./common/App', () => {
      const {default: app} = require('./common/App')

      render(app)
    })
  }
}

export default App
