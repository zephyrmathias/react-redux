import { createStore } from 'redux'
import reducers from '../reducers'

const preloadedState = {}

const store = createStore(reducers, preloadedState)

export default store