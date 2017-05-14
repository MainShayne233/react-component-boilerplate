import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import Counter from './routes/Counter'

class ComponentContainer extends Component {
  static propTypes = {
    store  : PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { store } = this.props
    const CounterComponent = Counter(store)

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <CounterComponent/>
        </div>
      </Provider>
    )
  }
}

export default ComponentContainer
