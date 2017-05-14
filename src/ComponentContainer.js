import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { injectReducer } from './store/reducers'
import createStore from './store/createStore'
import CounterContainer from './containers/CounterContainer'
import reducer from './modules/counter'

class ComponentContainer extends Component {

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { initialState } = this.props
    const store = createStore(initialState)
    injectReducer(store, { key: 'counter', reducer })

    return (
      <Provider store={store}>
        <CounterContainer/>
      </Provider>
    )
  }
}

export default ComponentContainer
