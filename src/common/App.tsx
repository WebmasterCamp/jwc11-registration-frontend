import React from 'react'
import {Root, Routes} from 'react-static'
import {Router} from '@reach/router'
import {Provider} from 'react-redux'

import 'normalize.css'

import SiteHead from './SiteHead'

import createStore from '../ducks'

const store = createStore()

import '../style.sass'

const StaticRoutes = (_: {default: boolean}) => <Routes />

function App() {
  return (
    <Provider store={store}>
      <Root>
        <SiteHead />

        <Router>
          <StaticRoutes default />
        </Router>
      </Root>
    </Provider>
  )
}

export default App
