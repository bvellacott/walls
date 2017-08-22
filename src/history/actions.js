import * as types from './actionTypes'

export const navigate = (path) => ({ 
	type: types.navigate, path
})
export const navigateBack = () => ({ type: types.navigateBack })
export const navigateForward = () => ({ type: types.navigateForward })
export const _setCurrentPath = (path) => ({ type: types._setCurrentPath, path })
