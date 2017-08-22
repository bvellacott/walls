import { _setCurrentPath } from '../history/actionTypes'
import { isDev } from '../runtimeEnv'
const { location } = document

const initialPath = isDev ? (location.hash || '').substring(1) : location.pathname

export const path = (state = initialPath, action) => {
	switch(action.type) {
		case _setCurrentPath:
			return action.path
		default:
			return state
	}
}