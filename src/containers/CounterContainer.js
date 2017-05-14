import { connect } from 'react-redux'
import { increment, decrement, doubleAsync } from '../modules/counter'
import Counter from '../components/Counter'

const mapDispatchToProps = {
  increment : () => increment(),
  decrement : () => decrement(),
  doubleAsync
}

const mapStateToProps = (state) => ({
  counter : state.counter
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
