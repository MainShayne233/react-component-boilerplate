import React from 'react'
import ReactDOM from 'react-dom'
import ComponentContainer from './index'

const initialState = window.__INITIAL_STATE__

const MOUNT_NODE = document.getElementById('root')

let render = () => {

  ReactDOM.render(
    <ComponentContainer />,
    MOUNT_NODE
  )
}

if (__DEV__) {
  if (module.hot) {
    const renderComponent = render
    const renderError = (error) => {
      const RedBox = require('redbox-react').default

      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
    }

    render = () => {
      try {
        renderComponent()
      } catch (error) {
        console.error(error)
        renderError(error)
      }
    }

    module.hot.accept('./index', () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render()
      })
    )
  }
}

render()
