import React from 'react';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
	createReduxBoundAddListener,
	createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';


import Home from '../views/home.js';
import Login from '../views/auth/login.js';
import Signup from '../views/auth/signup.js';
import { combineReducers } from 'redux';

const HomeScreen = ({ navigation }) => (<Home navigation={navigation} />);
const LoginScreen = () => (<Login />);
const SignupScreen = () => (<Signup />);

const AppRouteConfigs = {
	Home: { screen: HomeScreen },
	Login: { screen: LoginScreen },
	Signup: { screen: SignupScreen },
};

export const AppNavigator = StackNavigator(AppRouteConfigs);

const initialState = 
	AppNavigator.router.getStateForAction(
		AppNavigator.router.getActionForPathAndParams('Home')
	);

const navReducer = (state = initialState, action) => {
	const nextState = 
		AppNavigator.router.getStateForAction(action, state);

	return nextState || state;
}

const appReducer = combineReducers({
	nav: navReducer,
});

const middleware = createReactNavigationReduxMiddleware(
	"root",
	state => nav,
  );

const addListener = createReduxBoundAddListener("root");

class App extends React.Component {
	render() {
		return (
			<AppNavigator navigation={addNavigationHelpers({
				dispatch: this.props.dispatch,
				state: this.props.nav,
				addListener,
			})} />
		);
	}
}


const mapStateToProps = state => ({
	nav: state.nav
});

export default connect(mapStateToProps)(App);
