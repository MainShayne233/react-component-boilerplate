import { injectReducer } from './store/reducers'

export default (store) => {
  const Counter = require('./containers/CounterContainer').default
  const reducer = require('./modules/counter').default
  injectReducer(store, { key: 'counter', reducer })
  return Counter
}
