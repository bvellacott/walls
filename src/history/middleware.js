import * as types from './actionTypes'
import * as actions from './actions'
import { isDev } from '../runtimeEnv'
const { location, history } = window

const middleware = store => next => action => {
	switch(action.type) {
		case types.navigateBack:
			history.back()
			return
		case types.navigateForward:
			history.forward()
			return
		case types.navigate:
			const { path } = action
			if(location.pathname === path) {
				return location.pathname
			}
			if(isDev) {
				history.pushState(null, null, '#' + path)
			}
			else {
				history.pushState(null, null, path)
			}
			store.dispatch(actions._setCurrentPath(path))
			return path
		default:
			return next(action)
	}
}

export default middleware