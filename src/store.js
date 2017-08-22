import { 
	createStore, 
	combineReducers, 
	applyMiddleware, 
} from 'redux'
import * as reducers from './reducers'
import history from './history/middleware'
import { _setCurrentPath } from './history/actions'
import { isDev } from './runtimeEnv'
const { location } = document

const store = createStore(
	combineReducers(reducers),
	applyMiddleware(history),
)

window.onpopstate = () => {
	const path = isDev ? (location.hash || '').substring(1) : location.pathname
	store.dispatch(_setCurrentPath(path))
}

export const { 
	subscribe, 
	dispatch, 
	getState 
} = store

export default store