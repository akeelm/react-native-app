import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigators/appNavigator.js';

const firstAction = AppNavigator.router.getActionForPathAndParams('Home');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Login');

const initialNavState = AppNavigator.router.getStateForAction(
  firstAction,
  tempNavState
);

export const nav = (state = initialNavState, action) => {
	let nextState;
	switch (action.type) {
		case 'LOGIN':
			nextState = AppNavigator.router.getStateForAction(
				NavigationActions.back(),
				state
			);
			break;
		case 'LOGOUT':
			nextState = AppNavigator.router.getStateForAction(
				NavigationActions.navigate({ routeName: 'Login' }),
				state
			);
			break;
		default:
			nextState = AppNavigator.router.getStateForAction(action, state);
			break;
	}

	// Simply return the original `state` if `nextState` is null or undefined.
	return nextState || state;
}