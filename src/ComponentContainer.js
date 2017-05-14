import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import Counter from './index'

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
        <CounterComponent/>
      </Provider>
    )
  }
}

export default ComponentContainer
