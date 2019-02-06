import React, {Component} from 'react'
import {captureException} from '@sentry/browser'

import logger from '../core/log'

export class ErrorBoundary extends Component {
  componentDidCatch(error: Error, errorInfo: any) {
    logger.warn('Exception caught in React error boundary!', error)

    captureException(error)
  }

  render = () => this.props.children
}

const withError = (Component: React.ComponentType) => (props: any) => (
  <ErrorBoundary>
    <Component {...props} />
  </ErrorBoundary>
)

export default withError
